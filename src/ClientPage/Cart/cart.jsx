/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../styles/Cart/cart.css'

const Cart_Page = ({ gioHang }) => {


    return (<>
        <div className="cart_page_client">
            <div className="cart_page_1">
                <div className="row">
                    <div className="col-md-8 cart_page_2">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Giỏ hàng của bạn</b></h4></div>
                                <div className="col align-self-center">3 items</div>
                            </div>
                        </div>
                        {gioHang?.map((item) => {
                            return (<>
                                <div className="row main align-items-center border-bottom">
                                    <div className="col-2"><img className="img-fluid" src={item.image} /></div>
                                    <div className="col">
                                        <div className="row">{item.name}</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col flex">{item.price} Đ <span className="close">✕</span></div>
                                </div>
                            </>)
                        })}

                        {/* <div className="row main align-items-center border-bottom">
                            <div className="col-2"><img className="img-fluid" src="../src/assets/images/coca.png" /></div>
                            <div className="col">
                                <div className="row">coca</div>
                                <div className="row">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col flex"> 44.00 Đ <span className="close">✕</span></div>
                        </div> */}
                        <Link to="/products_food"><button className="back-to-shop">←<span>Trở về thực cửa hàng</span></button></Link>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Tổng số tiền</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>Số  lượng sản phẩm : 3</div>
                            <div style={{ fontSize: '2.2vh' }} className="col text-orange-500 text-right font-medium">44.00 Đ</div>
                        </div>
                        <form>
                            <p>Phí vận chuyển</p>
                            <select><option>Miễn phí vận chuyển (0đ)</option></select>
                            <p>Mã giảm giá (nếu có)</p>
                            <input id="code" placeholder="Enter your code" />
                        </form>
                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col">Tổng giá trị thực đơn</div>
                            <div style={{ fontSize: '2.2vh' }} className="col text-orange-500 text-right font-medium">44.00 đ</div>
                        </div>
                        <button style={{ borderRadius: '5px' }} className="btn btn-success uppercase">thanh toán</button>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Cart_Page