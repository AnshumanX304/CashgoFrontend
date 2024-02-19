
import './App.css'
import 'tailwindcss/tailwind.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from "./Components/AuthComponent/Signup";
import Signin from "./Components/AuthComponent/Signin";
import Sendmoney from './Components/PageComponent/Sendmoney';
import Dashboard from './Components/PageComponent/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/send" element={<Sendmoney/>}/>
        </Routes>
      </BrowserRouter>
       {/* <h1 className="text-3xl font-bold underline">
      bkskvb
    </h1>  */}
  
    </>
  )
}

export default App
