/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../styles/ClientPage/ourMenuClient.css'
import ComponentProductsRender from '../ComponentProductsRender'
import { dataContextProducts } from '../../App'
import { useContext } from 'react'
const OurMenuClient = ({ addToCart }) => {
    const dataProducts = useContext(dataContextProducts)
    const dataOurMenuClient = dataProducts.slice(0, 6);

    // thêm vào giỏ hàng
    return (<>
        <div className="ourMenuClient">
            <div className="ourMenu">
                <div className="title_Our_Menu">
                    <span>our <b>menu</b></span>
                    <p>we are company engaged in the field food services
                        width a very wide range throughout viet nam
                    </p>
                </div>

                <div className="products_our_menu">
                    {dataOurMenuClient.map((item, index) => {
                        return (<>
                            <ComponentProductsRender
                                item={item}
                                key={index}
                                addToCart={addToCart}
                            />
                        </>)
                    })}
                </div>

                <div className="more_menu">
                    <Link to='/products_food'>xem thực đơn &#10153;</Link>
                </div>
            </div>
        </div>
    </>)
}

export default OurMenuClient