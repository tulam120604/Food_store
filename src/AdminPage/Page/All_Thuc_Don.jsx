/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../../styles/AdminPage/dashboard.css'
import { useContext } from 'react';
import { dataProductsContext } from '../../DataContext/DataProvide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const All_Thuc_Don = () => {
    const { allProducts, Xoa_San_Pham, loadingApi } = useContext(dataProductsContext);

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
            <table className="table capitalize rounded-lg table-dark">
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
                <div className="loadingApi">
                    {loadingApi ? <FontAwesomeIcon icon={faSpinner} spin /> : ''}
                </div>
                {allProducts?.map((pr, i) => {
                    return (<>
                        <thead key={i}>
                            <tr key={i}>
                                <td scope="col">{i + 1}</td>
                                <td scope='col'>{pr.id}</td>
                                <td scope='col' style={{ width: '80px', height: '80px' }}><img style={{ height: '100%' }} src={pr.image} alt={pr.name} /></td>
                                <td scope='col'>{pr.name}</td>
                                <td scope='col'>{pr.price}</td>
                                <td scope='col'>{pr.title}</td>
                                <td scope='col'>{(pr.loai) === 1 ? 'Đồ ăn' : 'Đồ uống'}</td>
                                <td scope='col'>{pr.feedback}</td>
                                <td scope='col'>
                                    <button className='btn btn-danger' onClick={() => Xoa_San_Pham(pr.id)}>Xóa</button>
                                    <Link to={`${pr.id}/sua_thuc_don`}><button className='btn btn-primary ml-3'>Sửa</button></Link>
                                </td>
                            </tr>
                        </thead>
                    </>)
                })}
            </table>
        </div >
    </>);
}

export default All_Thuc_Don;