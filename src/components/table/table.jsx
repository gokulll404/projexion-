// src/components/table/Table.jsx
import "../table/table.css";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import Search from '../../assets/images/icons/search.svg';
import Filter from '../../assets/images/icons/filter.svg';
import TableArrow from '../../assets/images/icons/tablearrow.svg';
import Leftarrow from '../../assets/images/icons/leftarrow.svg';
import Rightarrow from '../../assets/images/icons/rightarrow.svg';

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Table = () => {
  const projects = useSelector((state) => state.projects?.list || []);

  // UI state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // search + sort state
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState(null); // e.g. 'projectName' or 'estimatedBudget'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  // Derived: filtered + sorted list (memoized)
  const processedProjects = useMemo(() => {
    // 1) search filter (case-insensitive across multiple fields)
    const q = query.trim().toLowerCase();
    let list = projects.filter((p) => {
      if (!q) return true;
      const fields = [
        p.projectCode,
        p.projectName,
        p.projectStatus,
        p.projectOwner,
        p.projectComplexity,
        String(p.estimatedBudget || ""),
        String(p.startDate || ""),
        String(p.endDate || "")
      ];
      return fields.some((f) => (f || "").toString().toLowerCase().includes(q));
    });

    // 2) sorting
    if (sortKey) {
      list = list.slice().sort((a, b) => {
        const av = a[sortKey] ?? "";
        const bv = b[sortKey] ?? "";

        // If numeric (budget), sort numerically
        if (sortKey === "estimatedBudget") {
          const na = Number(av) || 0;
          const nb = Number(bv) || 0;
          return sortOrder === "asc" ? na - nb : nb - na;
        }

        // else string compare
        const sa = (av + "").toString().toLowerCase();
        const sb = (bv + "").toString().toLowerCase();
        if (sa < sb) return sortOrder === "asc" ? -1 : 1;
        if (sa > sb) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    return list;
  }, [projects, query, sortKey, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(processedProjects.length / itemsPerPage));
  const displayedProjects = processedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // page navigation
  const goPrev = () => { if (currentPage > 1) setCurrentPage((s) => s - 1); };
  const goNext = () => { if (currentPage < totalPages) setCurrentPage((s) => s + 1); };
  const goToPage = (n) => { if (n >= 1 && n <= totalPages) setCurrentPage(n); };

  // handle sorting when header clicked
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setCurrentPage(1);
  };

  // Export ALL projects from Redux (per your choice) with styling
  const exportAllStyled = () => {
    // Prepare data: create header row with friendly names
    const header = [
      "Project Id",
      "Project Name",
      "Status",
      "Estimated budget",
      "Project owner",
      "Complexity",
      "Project start date",
      "Project end date",
    ];

    // Map projects into row arrays (preserve order)
    const rows = projects.map((p) => [
      p.projectCode ?? "",
      p.projectName ?? "",
      p.projectStatus ?? "",
      p.estimatedBudget ?? "",
      p.projectOwner ?? "",
      p.projectComplexity ?? "",
      p.startDate ?? "",
      p.endDate ?? "",
    ]);

    // Build worksheet data (array of arrays)
    const aoa = [header, ...rows];

    // Create workbook & worksheet
    const ws = XLSX.utils.aoa_to_sheet(aoa);

    // Apply basic styling to header row (bold + background)
    // Note: .s styling requires community xlsx support; many viewers honor it.
    // We attempt to set bold and fill for the header cells.
    const range = XLSX.utils.decode_range(ws["!ref"]);
    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cell_address = XLSX.utils.encode_cell({ r: 0, c: C });
      if (!ws[cell_address]) continue;
      ws[cell_address].s = {
        font: { bold: true, color: { rgb: "FFFFFFFF" } },
        fill: { fgColor: { rgb: "FF4A3AFF" } }, // purple header (hex without #, with alpha)
        alignment: { horizontal: "center", vertical: "center" },
      };
    }

    // Optionally set column widths (approx)
    ws["!cols"] = [
      { wch: 12 }, // project id
      { wch: 28 }, // name
      { wch: 14 }, // status
      { wch: 14 }, // budget
      { wch: 18 }, // owner
      { wch: 14 }, // complexity
      { wch: 16 }, // start date
      { wch: 16 }, // end date
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Projects");

    // Write workbook to binary and save
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array", cellStyles: true });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, `projects_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.xlsx`);
  };

  // When processedProjects or page count changes, clamp currentPage
  if (currentPage > totalPages) setCurrentPage(totalPages);

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="top-bar">
        <p className="subtitle">All projects</p>

        <div className="search-box">
          <img className="icon" src={Search} alt="" />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
          />
        </div>

        <button className="filter-btn">
          <img className="icon" src={Filter} alt="" />Filter
        </button>

        {/* Export button */}
        <button className="export-btn" onClick={exportAllStyled} style={{ marginLeft: 12 }}>
          Export Excel
        </button>

        <div className="table-bottom-line"></div>
      </div>

      <div className="table-wrapper">
        <table className="project-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("projectCode")}>
                Project Id
                <img className={`sort-icons ${sortKey === "projectCode" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("projectName")}>
                Project Name
                <img className={`sort-icons ${sortKey === "projectName" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("projectStatus")}>
                Status
                <img className={`sort-icons ${sortKey === "projectStatus" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("estimatedBudget")}>
                Estimated budget
                <img className={`sort-icons ${sortKey === "estimatedBudget" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("projectOwner")}>
                Project owner
                <img className={`sort-icons ${sortKey === "projectOwner" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("projectComplexity")}>
                Complexity
                <img className={`sort-icons ${sortKey === "projectComplexity" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("startDate")}>
                Project start date
                <img className={`sort-icons ${sortKey === "startDate" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>

              <th onClick={() => handleSort("endDate")}>
                Project end date
                <img className={`sort-icons ${sortKey === "endDate" ? sortOrder : ""}`} src={TableArrow} alt="" />
              </th>
            </tr>
          </thead>

          <tbody>
            {displayedProjects.length > 0 ? (
              displayedProjects.map((p, index) => (
                <tr key={index}>
                  <td>{p.projectCode}</td>
                  <td>{p.projectName}</td>
                  <td><span className={`status ${p.projectStatus?.toLowerCase()}`}>{p.projectStatus}</span></td>
                  <td>{p.estimatedBudget}</td>
                  <td>{p.projectOwner}</td>
                  <td>{p.projectComplexity}</td>
                  <td>{p.startDate}</td>
                  <td>{p.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center", padding: "20px" }}>
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <span>Page</span>
        <input
          type="number"
          value={currentPage}
          onChange={(e) => {
            let page = Number(e.target.value) || 1;
            if (page < 1) page = 1;
            if (page > totalPages) page = totalPages;
            setCurrentPage(page);
          }}
          min={1}
          max={totalPages}
        />
        <span>of {totalPages}</span>

        <div className="page-controls">
          <button className="page-btn" onClick={goPrev}>
            <img src={Leftarrow} alt="" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button className="page-btn" onClick={goNext}>
            <img src={Rightarrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
