/* eslint-disable react/prop-types */


const AllMenu = () => {
    return (<>
        <div style={{ height: '86vh' }} className="cateloriesAdmin text-slate-50">
            <section>
                <span className="h3 ml-5">Danh mục</span>
            </section>
            <table className="table capitalize rounded-lg table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID Menu</th>
                        <th scope="col">Tên menu</th>
                        <th scope="col">Tùy chỉnh &#9881;</th>
                    </tr>
                </thead>
            </table>
        </div>
    </>)
}

export default AllMenu