/* eslint-disable react/prop-types */

import { useContext } from "react"
import { soLuongTrangClient } from "../../App"


const AllMenu = () => {
    const listTrangClient = useContext(soLuongTrangClient);
    return (<>
        <div style={{ height: '86vh' }} className="cateloriesAdmin text-slate-50">
            <section>
                <span className="h3 ml-5">Danh mục</span>
            </section>
            <table className="table capitalize rounded-lg table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Page</th>
                        <th scope="col">Tùy chỉnh &#9881;</th>
                    </tr>
                </thead>
                {listTrangClient?.map((item, key) => {
                    return (<>
                        <thead key={key}>
                            <tr key={key}>
                                <td scope="col">{key + 1}</td>
                                <td scope="col">{item.name}</td>
                                <td scope="col"><button className="btn btn-primary">Thay đổi tên trang</button></td>
                            </tr>
                        </thead>
                    </>)
                })}
            </table>
        </div>
    </>)
}

export default AllMenu