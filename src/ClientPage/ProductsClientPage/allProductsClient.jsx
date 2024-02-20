/* eslint-disable react/prop-types */
import '../../styles/ProductsClientPage/allProducts.css'
import ComponentProductsRender from '../ComponentProductsRender'
import { dataContextProducts } from '../../App'
import { useContext, useState } from 'react'
const AllProductsClient = ({ addToCart }) => {
    const dataProducts = useContext(dataContextProducts);

    // phân trang :
    const [soItem1Trang] = useState(9);
    const [trangHienTai, setTrangHienTai] = useState(1);

    const itemTrangCuoi = soItem1Trang * trangHienTai;
    const itemTrangDau = itemTrangCuoi - soItem1Trang;
    // cắt mảng :
    const dataItem1Page = dataProducts.slice(itemTrangDau, itemTrangCuoi);
    // tính số trang 
    const soTrang = [];
    const a = Math.ceil(dataProducts.length / soItem1Trang);
    for (let i = 0; i < a; i++) {
        soTrang.push(i)
    }
    // chuyển trang
    // previous trang
    const pre = () => {
        setTrangHienTai(trangHienTai - 1)
        if (trangHienTai === 1) {
            setTrangHienTai(1)
        }
    }
    // next trang
    const next = () => {
        setTrangHienTai(trangHienTai + 1)
        if (trangHienTai === a) {
            setTrangHienTai(a)
        }
    }
    return (<>
        <div className="products_all_client">
            <div className="all_product_client">
                <div className="baner_product_client">

                </div>

                <div className="body_products_client">
                    <div className="menu_product_client">
                        <span>thực đơn</span>
                        <section>
                            <li>tất cả</li>
                            <li>được yêu thích nhất</li>
                            <li>món dùng ngay</li>
                            <li>món tráng miệng</li>
                            <li>đồ uống</li>
                        </section>
                    </div>

                    <div className="products">
                        <div className='namePage'>
                            <div className="line"></div>
                            <span>tất cả</span>
                            <div className="line"></div>
                        </div>
                        <div className="renderProduct">
                            {dataItem1Page.map((item, index) => {
                                return (<><ComponentProductsRender
                                    item={item}
                                    key={index}
                                    addToCart={addToCart}
                                /></>)
                            })}
                        </div>

                        <div className='handlePage'>
                            <button onClick={pre}>&#10094;</button>
                            {soTrang.map((item, key) => {
                                const handleTrang = () => {
                                    setTrangHienTai(key + 1)
                                }
                                return (
                                    <button onClick={handleTrang} key={key}>{key + 1}</button>
                                )
                            }
                            )}
                            <button onClick={next}>&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default AllProductsClient