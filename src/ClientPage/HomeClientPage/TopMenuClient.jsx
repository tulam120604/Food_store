/* eslint-disable react/prop-types */
import '../../styles/ClientPage/topMenuClient.css'
import ComponentProductsRender from '../ComponentProductsRender'
import { dataContextProducts } from '../../App'
import { useContext } from 'react'
const TopMenuClient = ({ addToCart }) => {
    const dataProducts = useContext(dataContextProducts);
    return (<>
        <div className="topMenuClient">
            <div className="topMenuClientPage">
                <span>top <p>menu</p></span>

                <div className="topMenu">
                    {dataProducts.map((item, index) => {
                        return (<>
                            <ComponentProductsRender
                                item={item}
                                key={index}
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
        </div>
    </>)
}

export default TopMenuClient