/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../styles/ClientPage/ourMenuClient.css'
import ComponentProductsRender from '../ComponentProductsRender'
import { useEffect, useState } from 'react'
import instance from '../../CallApi/config'
const OurMenuClient = ({ addToCart }) => {

    const [dataProductsOurMenu, setDataProductsOurMenu] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`products?_limit=8`);
                setDataProductsOurMenu(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    // thêm vào giỏ hàng
    return (<>
        <div className="ourMenuClient">
            <div className="ourMenu">
                <div className="title_Our_Menu">
                    <span>&#9832;thực đơn</span>
                </div>

                <div className="products_our_menu">
                    {dataProductsOurMenu.map((item) => {
                        return (<>
                            <ComponentProductsRender
                                item={item}
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