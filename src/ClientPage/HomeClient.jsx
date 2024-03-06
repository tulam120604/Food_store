/* eslint-disable react/prop-types */
import OurMenuClient from "./HomeClientPage/OurMenuClient"
import OurServiceClient from "./HomeClientPage/OurServiceClient"
import TopMenuClient from "./HomeClientPage/TopMenuClient"
import BanerClient from "./HomeClientPage/BanerClient"
import ContactClient from "./HomeClientPage/ContactClient"
const HomeClient = ({ addToCart }) => {
    return (<>
        <BanerClient />

        <TopMenuClient
            addToCart={addToCart} />
        <OurMenuClient
            addToCart={addToCart} />

        <OurServiceClient />


        <ContactClient />
    </>)
}

export default HomeClient