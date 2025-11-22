
import { Routes, Route } from "react-router-dom";
import Signin from './pages/signin'
import Home from './pages/home'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
