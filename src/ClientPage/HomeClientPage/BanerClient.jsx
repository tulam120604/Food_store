import { Link } from 'react-router-dom'
import '../../styles/ClientPage/banerClient.css'
const BanerClient = () => {
    return (<>
        <div className="banerClient">
            <div className="banerPageClient">
                <div className="searchClient">
                    <input type="text" placeholder='search...' />
                    <img src="../src/assets/images/search.png" alt="" />
                </div>
                <div className="baner">
                    <div className="left">
                        <h3>fo<span>od</span></h3>
                        <p>mang ẩm thực chất lượng đến mọi nhà</p>

                        <Link to='products_food'>đặt món ngay</Link>
                    </div>

                    <div className="right">
                        <img src="../src/assets/images/hamburge1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default BanerClient