/* eslint-disable react/prop-types */
import '../../styles/ClientPage/topMenuClient.css'
import ComponentProductsRender from '../ComponentProductsRender'
import { dataContextProducts } from '../../App'
import { useContext } from 'react'
import SaleClient from './SaleClient'
const TopMenuClient = ({ addToCart }) => {
    const dataProducts = useContext(dataContextProducts);
    return (<>
        <div className="topMenuClient">
            <div className="topMenuClientPage">
                <div className="top_best_sale_product">
                    <span>&#9728; Sản phẩm <p>bán chạy </p></span>
                    <div className="topMenu">
                        {dataProducts.map((item) => {
                            return (<>
                                <ComponentProductsRender
                                    item={item}
                                    addToCart={addToCart}
                                />
                            </>)
                        })}
                    </div>

                    <div className='handlePage'>
                        <button>&#10094;</button>
                        <button>&#10095;</button>
                    </div>
                </div>
                <SaleClient />
            </div>
        </div>
    </>)
}

export default TopMenuClient