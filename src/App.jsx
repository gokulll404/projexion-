
import { Routes, Route } from "react-router-dom";
import Signin from './pages/signin'
import Home from './pages/home'

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App
