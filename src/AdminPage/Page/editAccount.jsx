/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import { getOneAccount } from "../../data/account";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAccountManager = ({ editAccount }) => {
    const naviEditAccount = useNavigate();
    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.role = Number(data.role)
        editAccount(data)
        naviEditAccount('/admin/account-manager/')
    }
    const getDataOneAccount = () => {
        (async () => {
            const dataAccount = await getOneAccount(id)
            reset(dataAccount)
        })()
    }
    useEffect(getDataOneAccount, [id])


    return (<>
        <div className="addProductsAdmin">
            <section>
                <span className="capitalize h3 pl-2.5">sửa tài khoản {id}</span>
            </section>
            <form className="w-11/12 mt-5 ml-5" onSubmit={handleSubmit(onSubmit)}>
                {/* ảnh*/}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">ảnh</label>
                    <input type="file" {...register('image')} id="form3Example3" className="form-control" />
                </div>
                {/* tên tài khoản */}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example4">tên</label>
                    <input type="text" {...register('userAccount', { required: true })}
                        id="form3Example4" className="form-control" />
                    {errors.name && <span className="text-red-600">tên không được để trống !</span>}
                </div>
                {/* mật khẩu */}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">mật khẩu</label>
                    <input type="password" {...register('password', { required: true })}
                        id="form3Example3" className="form-control" />
                    {errors.price && <span className="text-red-600">mật khẩu không được để trống và phải chứa từ 6 đến 20 kí tự</span>}
                </div>
                {/* email tài khoản*/}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">email</label>
                    <input type="email" {...register('email', { required: 'Email address is required' })}
                        id="form3Example3" className="form-control" />
                    {errors.title && <span className="text-red-600">email không được để trống</span>}
                </div>
                {/* loại tài khoản*/}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">loại tài khoản</label>
                    <select {...register('role')} >
                        <option value="1">quản trị</option>
                        <option value="2">người dùng</option>
                    </select>
                </div>
                {/* Submit button */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize">
                        cập nhật tài khoản
                    </button>
                </div>
            </form>
        </div>
    </>)
}

export default EditAccountManager