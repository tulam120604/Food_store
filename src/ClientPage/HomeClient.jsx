/* eslint-disable react/prop-types */
import OurMenuClient from "./HomeClientPage/OurMenuClient"
import OurServiceClient from "./HomeClientPage/OurServiceClient"
import SaleClient from "./HomeClientPage/SaleClient"
import TopMenuClient from "./HomeClientPage/TopMenuClient"
import AboutClient from "./HomeClientPage/AboutClient"
import BanerClient from "./HomeClientPage/BanerClient"
import ContactClient from "./HomeClientPage/ContactClient"
const HomeClient = ({ addToCart }) => {
    return (<>
        <BanerClient />

        <TopMenuClient
            addToCart={addToCart} />

        <SaleClient />

        <OurMenuClient
            addToCart={addToCart} />

        <OurServiceClient />

        <AboutClient />

        <ContactClient />
    </>)
}

export default HomeClient