/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import '../../styles/AdminPage/dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { dataProductsContext } from '../../DataContext/DataProvide';
// import { ToastContainer, toast } from 'react-toastify';
// import SuccessPage from '../Client_Page/SuccessPage';


const Them_Thuc_Don = () => {
    // validate form :
    const naVigation = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { Them_San_Pham } = useContext(dataProductsContext)

    const onSubmit = (data) => {
        data.loai = Number(data.loai) // convert string to number
        Them_San_Pham(data)
        // setTimeout(() => { naVigation('/admin/products-manager') }, 1500)
        naVigation('/adminstration/quan_li_thuc_don')
        // toast.success('Đã thêm sản phẩm', { autoClose: 1400 })
    }
    return (<>
        <div className="addProductsAdmin">
            <section className='mb-6'>
                <span className='h3 pl-2.5'>thêm sản phẩm</span>
                <Link className='pr-5 hover:text-sky-700 font-medium' to='/adminstration/quan_li_thuc_don'>Quay lại</Link>
            </section>
            {/* -- */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="order_wrap w-11/12 mt-5">
                        <div className="form_outline">
                            <label className='capitalize font-medium text-slate-50' htmlFor="image">ảnh</label>
                            <input className='h-11 form-control' type="text" id="image" {...register('image', { required: true })} />
                            {errors.image && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập ảnh thực đơn !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5 capitalize font-medium text-slate-50' htmlFor="text">tên thực đơn</label>
                            <input className='h-11 form-control' type="text" id="text" {...register('name', { required: true })} />
                            {errors.name && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập tên thực đơn !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5 capitalize font-medium text-slate-50' htmlFor="price">giá thực đơn</label>
                            <input className='h-11 form-control' type="number" id="price" {...register('price', { required: true })} min={0} />
                            {errors.price && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập giá thực đơn !</span>}
                        </div>
                        {/* <div className="form_outline">
                            <label className='mt-3.5 capitalize font-medium text-slate-50' htmlFor="tiltle">tiêu đề thực đơn</label>
                            <input className='h-20 form-control' type="title" id="title" {...register('title', { required: true })} />
                            {errors.title && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập tiêu đề thực đơn !</span>}
                        </div> */}
                        <div className="form_outline">
                            <label className='mt-3.5 capitalize font-medium text-slate-50' htmlFor="loai">loại thực đơn (1: đồ ăn / 2: đồ uống / 3: loại khác)</label>
                            <select id="" {...register('loai')}>
                                <option value="1">Đồ ăn</option>
                                <option value="2">Đồ uống</option>
                            </select>
                            {errors.loai && <span style={{ fontSize: '2vh' }} className='normal-case text-red-600'>Chưa nhập loại thực đơn !</span>}
                        </div>
                        <div className="form-check d-flex justify-content-center mb-4">
                            <button type="submit" className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize mt-10">
                                thêm thực đơn
                            </button>
                        </div>
                    </div>
                </form>
                <br />
            </div>
            {/* <div className="successAdd flex justify-center fixed inset-2/4">
                <SuccessPage />
            </div> */}
            {/* <ToastContainer /> */}
        </div>
    </>)
}

export default Them_Thuc_Don;