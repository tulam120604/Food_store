import { Link, useParams } from 'react-router-dom'
import '../../styles/Cart/cart.css'
import { useEffect, useState } from 'react';
import { getOneProduct } from '../../CallApi/products';

const Thanh_Toan = () => {
    const { id } = useParams();
    const [don_hang_thanh_toan, setDon_hang_thanh_toan] = useState([])

    useEffect(() => {
        (async () => {
            const data = await getOneProduct(id);
            setDon_hang_thanh_toan(data)
        })()
    })

    const [soluongsanpham, setSoluongsanpham] = useState(1);
    const giam = () => {
        setSoluongsanpham(soluongsanpham - 1)
        if (soluongsanpham === 1) {
            setSoluongsanpham(1)
        }
    }
    const tang = () => {
        setSoluongsanpham(soluongsanpham + 1)
    }

    let giaTien = (don_hang_thanh_toan.price) * soluongsanpham

    const [phi_van_chuyen, set_phi_van_chuyen] = useState(0);
    return (<>
        <div className="cart_page_client">
            <div className="cart_page_1">
                <div className="row">
                    <div className="cart_page_2">
                        <div className="title" style={{ marginTop: '5vh' }}>
                            <div className="row">
                                <div className="col"><h4><b>Đơn hàng của bạn</b></h4></div>
                                <div className="col align-self-center">Số lượng : {soluongsanpham}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '10vh' }} className="row main align-items-center border-bottom">
                            <div className="col-2"><img className="img-fluid" src={don_hang_thanh_toan.image} /></div>
                            <div className="col">
                                <div className="row font-medium">{don_hang_thanh_toan.name}</div>
                                <div className="row">tiêu đề</div>
                            </div>
                            <div className="col">
                                <button className='border' onClick={giam}>-</button>
                                <span className='mx-4'>{soluongsanpham}</span>
                                <button className='border' onClick={tang}>+</button>
                            </div>
                            <div style={{ fontSize: '2.3vh' }} className="col flex text-orange-500 font-medium">{giaTien} Đ</div>
                        </div>
                        <Link to="/products_food"><button className="back-to-shop">←<span>Trở về cửa hàng</span></button></Link>
                    </div>
                </div>

                <div className="row">
                    <div className=" summary">
                        <div><h5><b>Thanh toán đơn hàng</b></h5></div>
                        <hr />
                        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '45% 45%', columnGap: '10%' }} className="box_dia_chi">
                            <div className="colum1">
                                <div className="row">
                                    <div className="col" style={{ paddingLeft: 0 }}>Số lượng sản phẩm :  {soluongsanpham}</div>
                                </div>
                                <div className="mt-2.5">
                                    <div className="col" style={{ paddingLeft: 0 }}>Giá :</div>
                                    <div style={{ fontSize: '2.3vh' }} className="col text-right text-orange-500 font-medium">{giaTien} Đ</div>
                                </div>
                                <form>
                                    <p>Phí vận chuyển</p>
                                    <select><option>Miễn phí vận chuyển ({phi_van_chuyen})</option></select>
                                    <p>Mã giảm giá (nếu có)</p>
                                    <input id="code" placeholder="Enter your code" />
                                </form>
                                <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                    <div className="col">Tổng giá trị thực đơn</div>
                                    <div style={{ fontSize: '2.3vh' }} className="col text-right text-orange-500 font-medium">{giaTien + phi_van_chuyen} Đ</div>
                                </div>
                            </div>
                            <div className="colum2">
                                <div className="mt-2.5">
                                    <form>
                                        <p>Địa chỉ : </p>
                                        <input type='text' placeholder="Nhập địa chỉ của bạn" />
                                    </form>
                                </div>
                                <div>
                                    <form>
                                        <p>Số điện thoại : </p>
                                        <input type='number' placeholder="Nhập số điện thoại nhận hàng của bạn" />
                                    </form>
                                </div>
                                <button style={{ borderRadius: '5px' }} className="btn btn-success uppercase">Xác nhận thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Thanh_Toan