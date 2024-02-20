/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import '../styles/AdminPage/dashboard.css'
import NavBarAdmin from "./Page/navBar";
import FooterAdmin from "./Page/footer";


const AdminStrationsPage = ({ page }) => {
    return (<>
        <div className="adminstation">
            <div className="navbarMenu">
                <div className="navbarAdmin">
                    <NavBarAdmin
                        // themeBg={themeBg.Bg_Color}
                        listMenu={page}
                    />
                </div>
            </div>

            {/* dashboard */}
            <div className="mainAdmin">
                <div className="block1 text-slate-50">
                    <div style={{ padding: '9.5px 0' }} className="blockTop">
                        <input className="ml-5" type="text" placeholder="Search" />
                        <span className="font-medium mr-5">Xin chào admin &#9785;</span>
                    </div>
                </div>
                <div className="renderAdmin  bg-slate-900">
                    <Outlet />
                </div>
            </div>
            <FooterAdmin />
        </div>
    </>);
}

export default AdminStrationsPage;