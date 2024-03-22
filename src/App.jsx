
import './App.css'
import 'tailwindcss/tailwind.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from "./Components/AuthComponent/Signup";
import Signin from "./Components/AuthComponent/Signin";
import Sendmoney from './Components/PageComponent/Sendmoney';
import Dashboard from './Components/PageComponent/Dashboard';
import { ReqContextProvider } from './Context/ReqContext';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
        <ReqContextProvider>
          <Routes>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/signin" element={<Signin/>}/>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/send" element={<Sendmoney/>}/>
          </Routes>
        </ReqContextProvider>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
