import Banner from "../../assets/images/banner.svg"
import '../banner/banner.css'

const banner = () => {
  return (
    <div className='Banner'>
      <img className="banner-img" src={Banner} alt="banner" />
    </div>
  )
}

export default banner
