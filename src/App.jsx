import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div>
     <Header/>
     <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
     <Footer/>
    </div>
  )
}