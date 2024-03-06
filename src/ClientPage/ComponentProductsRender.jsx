/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../styles/ClientPage/renderProducts.css';

const ComponentProductsRender = ({ item, addToCart }) => {
    const themSP = (dataItem) => {
        addToCart(dataItem)
    }
    return (<>
        <div className="boxProductRender" >
            <div className="fa-img">
                <Link to={`/products_food/${item.id}`}>
                    <img src={item.image} alt="" />
                </Link>
                <section>
                    <img onClick={() => themSP(item)} src="../src/assets/images/cart.png" alt="" />
                </section>
            </div>
            <div className="properties">
                <Link>{item.name}{item.id}</Link>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <section >
                    <span >{item.price} đ</span>

                    <Link to={`/thanh_toan/${item.id}`}>đặt ngay</Link>
                </section>
            </div>
        </div>
    </>)
}

export default ComponentProductsRender