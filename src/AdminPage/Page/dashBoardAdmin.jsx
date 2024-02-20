import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ThongKe = ({ SP, DM, ACC }) => {
    return (<>
        <div style={{ height: '86vh' }} className="container-fluid bg-slate-900 text-slate-50">
            <div className="row">
                <section className="flex justify-between">
                    <h1 className="h2">Bảng điều khiển</h1>
                </section>
                <div className="blockDashboard pt-3 pb-2 mb-3">
                    <div className="blockProducts">
                        <span>Số lượng sản phẩm : <Link style={{ padding: '5px 10px', borderRadius: '5px', background: '#32304B' }}
                            to='products-manager'>&#9783;</Link></span>

                        <p>{SP.length}</p>
                    </div>

                    <div className="blockCatelories">
                        <span>Số lượng danh mục : <Link style={{ padding: '5px 10px', borderRadius: '5px', background: '#32304B' }}
                            to='catelories-manager'>&#9783;</Link></span>

                        <p>{DM.length}</p>
                    </div>

                    <div className="blockAccountAdmin">
                        <span>Số lượng tài khoản : <Link style={{ padding: '5px 10px', borderRadius: '5px', background: '#32304B' }}
                            to='account-manager'>&#8791;</Link></span>

                        <p>{ACC.length}</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ThongKe