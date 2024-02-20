import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/ClientPage/contactClient.css'
const ContactClient = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = () => {
        toast.success('Đã gửi', { autoClose: 800 })
    }
    return (<>
        <div className="contact_client_page">
            <div className="contact_client">
                <span >liên hệ với <b>chúng tôi</b></span>
                <p>Chúng tôi là công ty hoạt động trong lĩnh vực dịch vụ thực phẩm rộng khắp Việt Nam</p>
                <div className="box_message">
                    <div className="left">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <section>
                                <div className="contact">
                                    <label htmlFor="name">name</label>
                                    <input type="text" {...register('name')} placeholder='Your name...' />
                                </div>
                                <div className="contact">
                                    <label htmlFor="email">email</label>
                                    <input type="text" {...register('email')} placeholder='abc@jqk.xyz' />
                                </div>
                            </section>
                            <section style={{ marginTop: '10vh' }}>
                                <div className="contact">
                                    <label htmlFor="message">message</label>
                                    <input type="text" {...register('message')} placeholder='Message...' />
                                </div>
                            </section>
                            <button>send</button>
                        </form>
                    </div>

                    <div className="right">
                        <img src="../src/assets/images/message.png" alt="" />
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    </>)
}

export default ContactClient