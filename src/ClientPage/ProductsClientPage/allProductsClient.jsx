/* eslint-disable react/prop-types */
import '../../styles/ProductsClientPage/allProducts.css';
import ComponentProductsRender from '../ComponentProductsRender';
import { dataContextProducts } from '../../App';
import { useContext, useEffect, useState } from 'react';
import instance from '../../CallApi/config';

const AllProductsClient = ({ addToCart }) => {
    // eslint-disable-next-line no-unused-vars
    const dataProducts = useContext(dataContextProducts);

    // phân trang bằng api
    const [loaiTrang, setLoaiTrang] = useState(null);
    const [trangHienTai, setTrangHienTai] = useState(1);
    const [dataItemTrang, setDataItemTrang] = useState([]);
    const [soItemTrang] = useState(12)
    useEffect(() => {
        if (loaiTrang !== null) {
            (async () => {
                try {
                    const { data } = await instance.get(`products?_page=${trangHienTai}&_limit=${soItemTrang}&${loaiTrang}`);
                    setDataItemTrang(data);
                } catch (error) {
                    console.log(error);
                }
            })()
        }
        else {
            (async () => {
                try {
                    const { data } = await instance.get(`products?_page=${trangHienTai}&_limit=${soItemTrang}`);
                    setDataItemTrang(data);
                } catch (error) {
                    console.log(error);
                }
            })()
        }
    }, [trangHienTai, loaiTrang, soItemTrang]);

    // console.log(dataItemTrang);

    // phân trang :
    // const [soItem1Trang] = useState(9);
    // const [trangHienTai, setTrangHienTai] = useState(1);

    // const itemTrangCuoi = soItem1Trang * trangHienTai;
    // const itemTrangDau = itemTrangCuoi - soItem1Trang;
    // // cắt mảng :
    // const dataItem1Page = dataProducts.slice(itemTrangDau, itemTrangCuoi);
    // // tính số trang 
    // const soTrang = [];
    // const a = Math.ceil(dataProducts.length / soItem1Trang);
    // for (let i = 0; i < a; i++) {
    //     soTrang.push(i)
    // }

    // chuyển trang
    // previous trang
    const pre = () => {
        setTrangHienTai(trangHienTai - 1);
        if (trangHienTai === 1) {
            setTrangHienTai(1);
        }
    }
    // next trang
    const next = () => {
        setTrangHienTai(trangHienTai + 1);
        if (dataItemTrang.length < soItemTrang) {
            setTrangHienTai(trangHienTai);
        }
    }

    // phân loại menu sản phẩm :
    const [tenloaisanpham, setTenloaisanpham] = useState('tất cả');
    // const [loaiSp, setLoaiSp] = useState();

    // menu
    const [positionMenu, setPositionMenu] = useState(false);
    useEffect(() => {
        const srollMenu = () => {
            if (scrollY > 475) {
                setPositionMenu(true);
            }
            else {
                setPositionMenu(false);
            }
        }
        window.addEventListener('scroll', srollMenu);
    }, [])

    const [thucDon, setThucDon] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance(`thucDon`);
                setThucDon(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return (<>
        <div className="products_all_client">
            <div className="all_product_client">
                <div className="baner_product_client">
                </div>
                <div className="body_products_client">
                    <div className="menu_product_client">
                        <div style={{ position: positionMenu ? 'fixed' : '', width: positionMenu ? '12%' : '', top: positionMenu ? '70px' : '' }} className="list_page_menu_client">
                            <span>thực đơn</span>
                            <section>
                                {thucDon.map((item) => {
                                    return (<>
                                        <li className={(item.name === tenloaisanpham) ? 'liActive' : ''}
                                            onClick={() => { setLoaiTrang(item.loai); setTenloaisanpham(item.name) }}>{item.name}</li>
                                    </>)
                                })}
                            </section>
                        </div>
                    </div>

                    <div className="products">
                        <div className='namePage'>
                            <div className="line"></div>
                            <span>{tenloaisanpham}</span>
                            <div className="line"></div>
                        </div>
                        <div className="renderProduct">
                            {dataItemTrang.map((item) => {
                                return (<><ComponentProductsRender key={item}
                                    item={item}
                                    addToCart={addToCart}
                                /></>)
                            })}
                        </div>

                        <div className='handlePage'>
                            <button onClick={pre}>&#10094;</button>

                            <button onClick={next}>&#10095;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>)
}

export default AllProductsClient