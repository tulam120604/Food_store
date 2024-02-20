/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import FooterClient from "./HomeClientPage/FooterClient"
import HeaderClient from "./HomeClientPage/HeaderClient"



const Client = ({ page, dataUser, soLuongItem_cart }) => {

    return (<>
        <HeaderClient
            linkPage={page}
            dataUser={dataUser}
            soLuongItem_cart={soLuongItem_cart}
        />

        <main>
            <Outlet />
        </main>

        <FooterClient />
    </>)
}

export default Client