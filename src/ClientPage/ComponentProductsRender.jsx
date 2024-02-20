/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../styles/ClientPage/renderProducts.css'

const ComponentProductsRender = ({ item, key, addToCart }) => {
    const themSP = (dataItem) => {
        addToCart(dataItem)
    }
    return (<>
        <div className="boxProductRender" key={key}>
            <Link key={key} to={`/products_food/${item.id}`}>
                <img key={key} src={item.image} alt="" />
            </Link>
            <div key={key} className="properties">
                <Link key={key}>{item.name}</Link>
                <p key={key}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <section key={key}>
                    <span key={key}>{item.price} đ</span>
                    <Link key={key} to={`/thanh_toan/${item.id}`}>đặt ngay</Link>
                    <img onClick={() => themSP(item)} key={key} src="../src/assets/images/cart.png" alt="" />
                </section>
            </div>
        </div>
    </>)
}

export default ComponentProductsRender