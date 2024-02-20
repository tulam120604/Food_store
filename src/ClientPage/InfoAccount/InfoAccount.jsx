/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../../styles/login/InfoAccount.css'
const InfoAccount = ({ dataUser, dangXuat }) => {
    const data = dataUser.user;
    return (<>
        <div className="infomation_account">
            <div className="infomation">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item capitalize"><Link to="/" className='no-underline'>trang chủ</Link></li>
                                <li className="breadcrumb-item active capitalize" aria-current="page ">thông tin tài khoản</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Tên tài khoản</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.nameAcc}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{data.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Số điện thoại</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">***********</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Địa chỉ</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">Việt Nam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                        <button type="button" className="btn btn-primary capitalize">sửa thông tin</button>
                        <Link style={{ display: (data.role === 1) ? 'block' : 'none' }} to='/adminstration' className="btn btn btn-info ms-1 capitalize">trang quản trị</Link>
                        <button type="button" className="btn btn btn-danger ms-1 capitalize" onClick={dangXuat}>đăng xuất</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default InfoAccount