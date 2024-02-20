/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavBarAdmin = ({ listMenu }) => {

    // const stroke = (themeNavBar) ? 'black' : 'white';
    return (<>
        <div className="navbarAdminstration bg-slate-800 text-slate-50">
            <Link className="capitalize no-underline" style={{ width: '100%', textAlign: 'center', fontSize: '2.5vh' }} to='/'>Adminstration</Link><ul>
                {listMenu?.map((list) => {
                    return (<>
                        <Link className="no-underline" to={list.path}>
                            {list.name}
                        </Link>
                    </>)
                })}</ul>
        </div>
    </>);
}

export default NavBarAdmin;