/* eslint-disable react/prop-types */

import { useContext } from "react"
import { tatCaTaiKhoan } from "../../App";


const AllAccount = () => {
    const listAccount = useContext(tatCaTaiKhoan);
    return (<>
        <div style={{ height: '86vh' }} className="cateloriesAdmin text-slate-50">
            <section>
                <span className="h3 ml-5">Danh sách tài khoản</span>
            </section>
            <table className="table capitalize rounded-lg table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Tên đăng nhập</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tùy chỉnh &#9881;</th>
                    </tr>
                </thead>
                {listAccount?.map((item, key) => {
                    return (<>
                        <thead key={key}>
                            <tr key={key}>
                                <td scope="col">{key + 1}</td>
                                <td scope="col">{item.id}</td>
                                <td scope="col">{item.nameAcc}</td>
                                <td scope="col">{item.password}</td>
                                <td scope="col">{item.email}</td>
                                <td scope="col"><button className="btn btn-primary">Thay đổi thông tin</button></td>
                            </tr>
                        </thead>
                    </>)
                })}
            </table>
        </div>
    </>)
}

export default AllAccount