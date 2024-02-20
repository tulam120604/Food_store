import { useState } from 'react'
import '../styles/Confirm/Confirm.css'
const Confirm = () => {
    const [display, setDisplay] = useState(true)
    const huy = () => {
        setDisplay(false)
    }
    const xacnhan = () => {
        setDisplay(false)
    }
    return (<>
        <div style={{ display: display ? 'block' : 'none' }} className="Confirm_Component">
            <div className="confirm">
                <h1>Xác nhận yêu cầu xóa?</h1>
                <p>Chắc chắn xóa ? Chọn xác nhận để xóa hoặc chọn hủy để hủy yêu cầu.</p>
                <button onClick={huy}>Huỷ</button>
                <button onClick={xacnhan}>Xác nhận</button>
            </div>
        </div>
    </>)
}

export default Confirm