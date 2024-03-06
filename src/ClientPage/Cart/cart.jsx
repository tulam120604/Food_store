/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../../styles/Cart/cart.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'

const Cart_Page = ({ gioHang }) => {

    const { register, handleSubmit } = useForm()

    const code_giam_gia = ['abcjqk', 'jqkabc', 'xyzabc'];

    let tongGia = 0
    gioHang.forEach(element => {
        tongGia = (element.price * gioHang.length);
    });

    const [tonggiatridonhang, setTonggiatridonhang] = useState(tongGia);


    // áp mã giảm giá
    const onSubmitCode = (dataForm) => {
        for (let i = 0; i < code_giam_gia.length; i++) {
            if ((dataForm.code_giamGia) === code_giam_gia[i]) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Áp dụng mã giảm giá thành công !",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('mã code chính xác');
                setTonggiatridonhang((tongGia * 90) / 100);
                console.log(tonggiatridonhang);
            }
        }
    }


    return (<>
        <div className="cart_page_client">
            <div className="cart_page_1">
                <div className="row">
                    <div className="col-md-8 cart_page_2">
                        <div className="title">
                            <div className="row">
                                <div className="col"><h4><b>Giỏ hàng của bạn</b></h4></div>
                            </div>
                        </div>
                        <div className="row main align-items-center border-bottom">
                            <div className="col-2 font-medium">Ảnh sản phẩm</div>
                            <div className="col">
                                <div className="row font-medium">Tên sản phẩm</div>
                                <div className="row"> </div>
                            </div>
                            <div className="col font-medium">
                                Số lượng
                            </div>
                            <div className="col font-medium">
                                Giá tiền
                            </div>
                        </div>
                        {gioHang?.map((item) => {
                            let a = item.soluongItem
                            const tangSoluong = () => {
                                return a = item.soluongItem + 1
                            }
                            console.log(a);
                            return (<>
                                <div className="row main align-items-center border-bottom">
                                    <div className="col-2"><img className="img-fluid" src={item.image} /></div>
                                    <div className="col">
                                        <div className="row">{item.name}</div>
                                        <div className="row"> </div>
                                    </div>
                                    <div className="col">
                                        <button className='border' onClick={() => (a = item.soluongItem - 1)}>-</button>
                                        <span className='mx-4'>{a}</span>
                                        <button className='border' onClick={tangSoluong}>+</button>
                                    </div>
                                    <div style={{ fontSize: '2.3vh' }} className="col flex text-orange-500 font-medium">{item.price} Đ <span className="close">✕</span></div>
                                </div>
                            </>)

                        })}
                        <Link to="/products_food"><button className="back-to-shop">←<span>Trở về thực cửa hàng</span></button></Link>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Tổng số tiền</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>Số  lượng sản phẩm : {gioHang.length}</div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>Giá :</div>
                            <div style={{ fontSize: '2.2vh' }} className="col text-orange-500 text-right font-medium">{tonggiatridonhang} Đ</div>
                        </div>
                        <form>
                            <p>Phí vận chuyển</p>
                            <select><option>Miễn phí vận chuyển (0đ)</option></select>
                        </form>
                        <p>Nhập mã giảm giá (nếu có)</p>
                        <form className="flex" style={{ paddingLeft: 0, height: '10vh' }} onSubmit={handleSubmit(onSubmitCode)}>
                            <input style={{ height: '100%' }} type="text" placeholder='Enter Code' {...register('code_giamGia')} />
                            <button style={{ padding: '0 2vh', background: '#138496', borderRadius: '0.4vh' }}>Gửi</button>
                        </form>
                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col font-medium">Tổng giá trị đơn hàng</div>
                            <div style={{ fontSize: '2.2vh' }} className="col text-orange-500 text-right font-medium">{tonggiatridonhang} Đ</div>
                        </div>
                        <Link style={{ borderRadius: '5px' }} className="btn btn-success uppercase">tiến hành thanh toán</Link>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />

    </>)
}

export default Cart_Page