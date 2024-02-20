/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../styles/login/Login.css'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const Login = ({ loginAccount, loadingAPI, saithongtin }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onHandleCreateAccount = (dataForm) => {
        // console.log(dataForm);
        loginAccount(dataForm)
    }
    return (<>
        <div className="loginAccount">
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3 className='capitalize text-center'>đăng nhập</h3>
                                <form className="requires-validation" onSubmit={handleSubmit(onHandleCreateAccount)}>
                                    <div className="col-md-12">
                                        <input className="form-control" type="text"
                                            {...register('nameAcc', { required: true })} placeholder="Tên đăng nhập" />
                                        {errors.nameAcc && <p>Vui lòng nhập tên đăng nhập !</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="email"
                                            {...register('email', { required: true })} placeholder="E-mail" />
                                        {errors.nameAcc && <p>Vui lòng nhập email !</p>}
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="password"
                                            {...register('password', { required: true })} placeholder="Mật khẩu" />
                                        {errors.nameAcc && <p>Vui lòng nhập mật khẩu!</p>}
                                    </div>
                                    <div className="col-md-12">
                                        {(saithongtin !== '') ? <p>{saithongtin}</p> : ''}
                                    </div>
                                    <div className="form-button mt-3">
                                        <button className="btn btn-primary bg-sky-600 "> {loadingAPI && <FontAwesomeIcon icon={faSpinner} spin />} &nbsp;
                                            Đăng Nhập</button>

                                    </div>
                                    <div className="form-button mt-3">
                                        <span className='text-gray-200'>Hoặc đăng nhập bằng</span>
                                    </div>
                                    <div className="form-button mt-3">
                                        <img src="../src/assets/images/icon-facebook.png" alt="" />
                                        <img src="../src/assets/images/icon-google.png" alt="" />
                                    </div>
                                    <div className="form-button mt-3">
                                        <span className='text-gray-200'>Chưa có tài khoản? <Link to='/create_account'>Đăng kí ngay </Link></span>
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

export default Login