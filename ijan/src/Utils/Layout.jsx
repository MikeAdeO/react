import { Outlet, Link } from "react-router-dom"
import Header2 from "./Header2"
import Footer2 from "./Footer2"
const Layout = () => {
  return (
    <div>
       <Header2 />
        <Outlet />
        <Footer2 />
    </div>
  )
}

export default Layout