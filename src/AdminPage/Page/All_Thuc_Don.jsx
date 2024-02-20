/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../../styles/AdminPage/dashboard.css'

const All_Thuc_Don = ({ SP, onRemove }) => {

    // const clickRemove = (idPro) => {
    //     onRemove(idPro)
    // }
    return (<>
        <div className="allProductsAdmin overscroll-auto bg-slate-900 text-slate-50">
            <section>
                <span className="h3 ml-5">Danh sách sản phẩm</span>
                <Link to='/adminstration/them_thuc_don'> <button className='btn btn-primary ml-3 capitalize mr-5 bg-black'> thêm sản phẩm +</button></Link>
            </section>

            {/* all san pham */}
            <table className="table ml-5 table-dark">
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá sản phẩm</th>
                        <th scope="col">Tiêu đề </th>
                        <th scope="col">Loại sản phẩm</th>
                        <th scope="col">Đánh giá</th>
                        <th scope="col">Tùy chỉnh &#9881;</th>
                    </tr>
                </thead>
                {SP.map((pr, i) => {
                    return (<>
                        <tbody key={i}>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th >{pr.id}</th>
                                <td style={{ width: '80px', height: '80px' }}><img style={{ height: '100%' }} src={pr.image} alt={pr.name} /></td>
                                <td>{pr.name}</td>
                                <td>{pr.price}</td>
                                <td>{pr.title}</td>
                                <td>{(pr.loai) === 1 ? 'Đồ ăn' : 'Đồ uống'}</td>
                                <td>{pr.feedback}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onRemove(pr.id)}>Xóa</button>
                                    <Link to={`${pr.id}/sua_thuc_don`}><button className='btn btn-primary ml-3'>Sửa</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </div >
    </>);
}

export default All_Thuc_Don;