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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="block">
                        <span>infomation</span>
                        <li>about us</li>
                        <li>event</li>
                        <li>more search</li>
                    </div>
                    <div className="block">
                        <span>helpful links</span>
                        <li>services</li>
                        <li>support</li>
                        <li>tem & coditions</li>
                        <li>privacy</li>
                    </div>
                    <div className="block">
                        <span>our menu</span>
                        <li>driver</li>
                        <li>catalog</li>
                        <li>launch</li>
                    </div>
                </div>
                <h6>copyright 2024@ by cao tu lam</h6>
            </div>

        </div>
    </>)
}

export default FooterClient