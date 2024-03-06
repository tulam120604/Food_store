import '../../styles/ClientPage/footerClient.css'
const FooterClient = () => {
    return (<>
        <div className="footer_client_page">
            <div className="footer_client">
                <div className="content_footer">
                    <div className="block">
                        <div className="logo">
                            <span>food</span>
                            <img src="../src/assets/images/iconLogo.png" alt="" />
                        </div>
                        <p>Hotline: 0987 654 jqk</p>
                        <p>Địa chỉ : 96/69S phường abc, quận xyz, TP. jqk</p>
                    </div>

                    <div className="block">
                        <span>truy cập nhanh</span>
                        <li>dịch vụ</li>
                        <li>hỗ trợ</li>
                        <li>liên hệ</li>
                    </div>
                    <div className="block">
                        <span>theo dõi chúng tôi</span>
                        <a href='#'>FOOD Shop</a>
                        <a href='#'>https://www.facebook.jqk/foodshop</a>
                    </div>
                </div>
                <h6>copyright 2024@ by cao tu lam</h6>
            </div>

        </div>
    </>)
}

export default FooterClient