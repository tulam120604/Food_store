/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const AllAccountPage = ({ accountManager, onRemove }) => {
    return (<>
        <div style={{ height: '86vh' }} className="accountManagerAdmin text-slate-50">
            <section>
                <span className="h3 ml-5">Quản lý tài khoản</span>
            </section>
            <table className="table capitalize rounded-lg table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID tài khoản</th>
                        <th scope="col">Tên tài khoản</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Email</th>
                        <th scope="col">Loại tài khoản</th>
                        <th scope="col">Tùy chỉnh &#9881;</th>
                    </tr>
                </thead>
                {accountManager.map((item, i) => {
                    return (<>
                        <tbody>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th>{item.id}</th>
                                <td className="normal-case">{item.userAccount}</td>
                                <td>{item.password}</td>
                                <td className="normal-case">{item.email}</td>
                                <td>{(item.role) === 1 ? 'Quản trị' : 'người dùng'}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onRemove(item.id)}>Xóa</button>
                                    <Link to={`${item.id}/edit-account-manager`}><button className='btn btn-primary ml-3'>Sửa</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </div>
    </>)
}

export default AllAccountPage