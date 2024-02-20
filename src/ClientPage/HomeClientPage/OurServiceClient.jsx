import '../../styles/ClientPage/ourServiceClient.css'
const OurServiceClient = () => {
    const a = [1, 2, 3, 4]
    return (<>
        <div className="our_service_client">
            <div className="our_service">
                <span>dịch vụ của <p>chúng tôi</p></span>
                <div className="content_our_service">
                    <div className="left">
                        {a.map(() => {
                            return (<>
                                <div className="box_service">
                                    <img src="../src/assets/images/discount_system.png" alt="" />
                                    <span>discount system</span>
                                    <p>We have favorable discount system for our regular customer</p>

                                </div>
                            </>)
                        })}
                    </div>

                    <div className="right">
                        <img src="../src/assets/images/shiper.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default OurServiceClient