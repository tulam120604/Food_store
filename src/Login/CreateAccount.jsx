/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../styles/login/Login.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react';



const CreateAccount = ({ createAccount }) => {
    const [confirmPass, setConfirmPass] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleCreateAcc = (dataForm) => {
        // console.log(dataForm);
        // check confirm pas
        if (dataForm.confirmPassword != dataForm.password) {
            setConfirmPass('Mật khẩu không đúng')
        }
        else {
            console.log('đã đúng');
            createAccount(dataForm);
            // setTimeout(() => {
            //     chuyenTrang('/login')
            // }, 2000)
        }
    }

    // check pas
    const [checkPassword, setCheckPassword] = useState('');
    const checkPass = (e) => {
        if ((e.target.value).length > 5 && (e.target.value).length < 21) {
            setCheckPassword('')
        }
        else {
            setCheckPassword('Mật khẩu phải dài từ 6 đến 20 kí tự')
        }
    }

    return (<>
        <div className="loginAccount">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='capitalize text-center'>đăng kí</h3>
                                <form className="requires-validation" onSubmit={handleSubmit(handleCreateAcc)}>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" {...register('nameAcc', { required: true })} placeholder="Tên đăng nhập" />
                                        {errors.nameAcc && <p>Tên đăng nhập không được để trống !</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="email"
                                            {...register('email', {
                                                required: true, pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: 'Địa chỉ email không hợp lệ !'
                                                }
                                            })}
                                            placeholder="E-mail" />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="password"
                                            {...register('password', { required: true })}
                                            placeholder="Mật khẩu" onChange={checkPass} />
                                        {(errors.password) ? <p>Mật khẩu không được để trống !</p> : <p>{checkPassword}</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="password"
                                            {...register('confirmPassword', { required: true })}
                                            placeholder="Xác nhận mật khẩu" />
                                        {errors.confirmPassword ? <p>Xác nhận mật khẩu không được để trống !</p> : <p>{confirmPass}</p>}
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" />
                                        <label className="form-check-label text-gray-200 ">Chấp nhận điều khoản dịch vụ</label>
                                    </div>

                                    <div className="form-button mt-3">
                                        <button className="btn btn-primary bg-sky-600 "> Tạo tài khoản</button>
                                    </div>
                                    <div className="form-button mt-3">
                                        <span className='text-gray-200'>Đã có tài khoản. <Link to='/login'>Đăng nhập</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>)
}

export default CreateAccount