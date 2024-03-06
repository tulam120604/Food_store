import { Link, useParams } from 'react-router-dom'
import '../../styles/ProductsClientPage/OneProductClient.css'
import { useContext, useEffect, useState } from 'react';
import { getOneProduct } from '../../CallApi/products';
import { dataContextProducts } from '../../App';
import ComponentProductsRender from '../ComponentProductsRender';
const OneProductClient = () => {
    const tat_ca_san_pham = useContext(dataContextProducts);

    const [deitalProduct, setDeitalProduct] = useState([])
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const data = await getOneProduct(id);
            setDeitalProduct(data);
        })()
    }, [id])

    // lọc sản phẩm cùng loại:
    const san_pham_cung_loai = [];
    for (let i = 0; i < tat_ca_san_pham.length; i++) {
        if (tat_ca_san_pham[i].loai === deitalProduct.loai) {
            san_pham_cung_loai.push(tat_ca_san_pham[i]);
        }
    }


    // tinh so  luong:
    const [so_luong, set_so_luong] = useState(1)
    const giam = () => {
        set_so_luong(so_luong - 1)
        if (so_luong === 1) {
            set_so_luong(1)
        }
    }
    const tang = () => {
        set_so_luong(so_luong + 1)
    }
    return (<>
        <div className="deital_product_client">
            <div className="deital_product_client_page">
                <div>
                    <section className="py-5">
                        <div className="container">
                            <div className="row gx-5">
                                <aside className="col-lg-6">
                                    <div className="border rounded-4 mb-3 d-flex justify-content-center">
                                        <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto', padding: '3vh' }} className="rounded-4 fit" src={deitalProduct.image} />
                                    </div>
                                    <div className="d-flex justify-content-center mb-3 small_img">
                                        <img width={60} height={60} className="rounded-2" src={deitalProduct.image} />
                                        <img width={60} height={60} className="rounded-2" src={deitalProduct.image} />
                                        <img width={60} height={60} className="rounded-2" src={deitalProduct.image} />
                                        <img width={60} height={60} className="rounded-2" src={deitalProduct.image} />
                                    </div>
                                    {/* thumbs-wrap.// */}
                                    {/* gallery-wrap .end// */}
                                </aside>
                                <main className="col-lg-6">
                                    <div className="ps-lg-3">
                                        <h4 className="title text-dark capitalize">
                                            {deitalProduct.name}
                                        </h4>
                                        <div className="d-flex flex-row my-3">
                                            <div className="text-warning mb-1 me-2">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                                <span className="ms-1">
                                                    4.5
                                                </span>
                                            </div>
                                            <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1" />154 lần đặt</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="price">Giá :</span>
                                            <span className="price">{deitalProduct.price} Đ</span>
                                        </div>
                                        <p>
                                            Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                            men.
                                        </p>

                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-md-4 col-6 mb-3">
                                                <label className="mb-2 d-block">Số lượng</label>
                                                <div className="col">
                                                    <button className='btn border' onClick={giam}>-</button>
                                                    <span className='mx-4'>{so_luong}</span>
                                                    <button className='btn border' onClick={tang}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <span className="price">Tổng số tiền :</span>
                                            <span className="price">{(deitalProduct.price) * so_luong} Đ</span>
                                        </div>
                                        <Link to={`/thanh_toan/${id}`} className="button_order"> Đặt ngay </Link>
                                        <Link to="#" className="button_add_cart  ml-2.5"> <i className="me-1 fa fa-shopping-basket" /> Thêm vào giỏ hàng </Link>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </section>
                    {/* content */}
                    <section className="bg-light border-top py-4">
                        <div className="container">
                            <div className="row gx-4">
                                <div className="col-lg-8 mb-4">
                                    <div className="border rounded-2 px-3 py-2 bg-white">
                                        {/* bình luận */}
                                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                            <li className="nav-item d-flex" role="presentation">
                                                <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Bình luận & đánh giá</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="ex1-content">
                                            <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                                <p>
                                                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur.
                                                </p>


                                            </div>
                                        </div>
                                        <form >
                                            <div className="order_wrap w-11/12 mt-5">
                                                <div className="form_outline">
                                                    <input className='h-11 form-control' type="text" id="text" placeholder='Nhập bình luận & đánh giá của bạn ...' />
                                                    {/* {errors.name && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập bình luận !</span>} */}
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-4">
                                                    <button className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize mt-2">
                                                        gửi bình luận
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="order_wrap w-12/12 mt-5">
                                        <h5 className="card-title">Thực đơn cùng loại</h5>
                                        <div className="tat_ca_san_pham">
                                            {tat_ca_san_pham.map((item, key) => {
                                                {
                                                    return (<>
                                                        <ComponentProductsRender
                                                            item={item}
                                                            key={key}
                                                        />
                                                    </>)
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="px-0 border rounded-2 shadow-0">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Thực đơn cùng loại</h5>
                                                {san_pham_cung_loai.map((item, key) => {
                                                    return (<>
                                                        <div className="d-flex mb-3" key={key}>
                                                            <Link to={`/products_food/${item.id}`} className="me-3">
                                                                <img src={item.image} style={{ Width: 96, height: 96 }} className="img-md img-thumbnail" />
                                                            </Link>
                                                            <div className="info">
                                                                <Link to={`/products_food/${item.id}`} className="nav-link mb-1">
                                                                    {item.name}
                                                                </Link>
                                                                <strong className="text-dark"> {item.price}</strong>
                                                            </div>
                                                        </div>
                                                    </>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    </>)
}

export default OneProductClient