/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import '../../styles/ClientPage/headerClient.css'
import { Link, NavLink } from 'react-router-dom'
import { linkPage } from '../../App'
const HeaderClient = ({ dataUser, soLuongItem_cart }) => {
    const Page = useContext(linkPage)
    let user = ''
    let nameUser = ''
    if (dataUser !== undefined) {
        user = dataUser.user
        nameUser = user.nameAcc
    }

    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 200) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    })

    // giỏ hàng
    return (<>
        <div className="headerClient" style={{ boxShadow: scrollHeader ? '1mm 1mm 3mm black' : '' }}>
            <header style={{ height: scrollHeader ? '60px' : '80px' }}>
                <NavLink to='/'>
                    <span onClick={() => scrollTo(0, 0)}>food</span>
                    <img onClick={() => scrollTo(0, 0)} src="../src/assets/images/iconLogo.png" alt="" />
                </NavLink>

                <div className="sidebar" key={Page}>
                    <section>
                        {Page.map((value) => {
                            return (<>
                                <NavLink className='menuNavLink ' key={value.name} to={value.link} style={({ isActive }) => ({
                                    background: isActive ? '#1b1b22' : '',
                                    opacity: isActive ? '1' : ''
                                })}>{value.name}</NavLink>
                            </>)
                        })}
                    </section>
                    <section>

                        <div className="cart">
                            <span>{soLuongItem_cart.length}</span>
                            <Link to='/cart'>
                                <img src="../src/assets/images/cart.png" alt="" />
                            </Link>
                        </div>

                        <Link className='dangnhap' to={(user === '') ? '/login' : 'infomation_account'} style={{ fontSize: scrollHeader ? '1.8vh' : '2vh' }}>{(user === '') ? 'đăng nhập' : nameUser}</Link>
                    </section>
                </div>
            </header>
        </div>
    </>)
}

export default HeaderClient