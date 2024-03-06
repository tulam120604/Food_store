import { createContext, useEffect, useState } from 'react'
import './App.css'
import { getProducts } from './CallApi/products'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Client from './ClientPage/Client'
import HomeClient from './ClientPage/HomeClient'
import { getAdminPage, getClientPage } from './CallApi/page'
import AllProductsClient from './ClientPage/ProductsClientPage/allProductsClient'
import Login from './Login/Login'
import CreateAccount from './Login/CreateAccount'
import { create_account, login_account } from './CallApi/login'
import { useLocalStorage } from './Hooks/useStrorage'
import { ToastContainer } from 'react-toastify'
import InfoAccount from './ClientPage/InfoAccount/InfoAccount'
import AdminStrationsPage from './AdminPage/AdminStrations'
import AllMenu from './AdminPage/Page/AllMenu'
import All_Thuc_Don from './AdminPage/Page/All_Thuc_Don'
import Them_Thuc_Don from './AdminPage/Page/Them_thuc_don'
import Sua_Thuc_Don from './AdminPage/Page/Sua_Thuc_Don'
import OneProductClient from './ClientPage/ProductsClientPage/OneProductClient'
import Cart_Page from './ClientPage/Cart/cart'
import Thanh_Toan from './ClientPage/ThanhToan/ThanhToan'
import Swal from 'sweetalert2'
import instance from './CallApi/config'
import AllAccount from './AdminPage/Page/allAccount'
import ProtectedRoute from './ProtectedRoute/Protected'
import PageNotFound from './PageNotFound/PageNotFound'


// eslint-disable-next-line react-refresh/only-export-components
// dùng useContext để truyền dữ liệu
export const dataContextProducts = createContext();
export const soLuongTrangClient = createContext();
export const tatCaTaiKhoan = createContext();
export const linkPage = createContext()


function App() {
  const goPage = useNavigate();

  // lấy dữ liệu người dùng qua localStorage

  // link page :
  const [pageClient, setPageClient] = useState([])
  const allPageClient = () => {
    (async () => {
      const data = await getClientPage();
      setPageClient(data)
    })()
  }
  useEffect(allPageClient, [])

  // CRUD dữ liệu api qua các hàm trong folder CallApi : 
  // lấy all sản phẩm:
  const [products, setProducts] = useState([])
  const dataAllProducts = () => {
    (async () => {
      const data = await getProducts();
      setProducts(data)
    })()
  }
  useEffect(dataAllProducts, [])


  // PAGE
  const [soLuongPage, setSoLuongPage] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get('pagesClient');
        setSoLuongPage(data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  // ACCOUNT
  // tạo tài khoản
  const handleCreateAccount = async (newAcc) => {
    try {
      await create_account(newAcc);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        goPage('/login')
      }, 1500)

    } catch (error) {
      console.log(error);
    }
  }

  // đăng nhập:
  const [loadingApiLogin, setLoadingApiLogin] = useState(false);

  const [saiThongTin, setSaiThongTin] = useState('');
  const [user, setUser] = useLocalStorage('account',)
  const handleLogin = async (acc) => {
    setLoadingApiLogin(true)
    try {
      const data = await login_account(acc);
      setUser(data)
      if (data != undefined) {
        goPage('/')
      }
      else {
        setSaiThongTin('Thông tin tài khoản, email và mật khẩu không chính xác !');
      }
    } catch (error) {
      console.log(error);
    }
    setLoadingApiLogin(false)
  }

  // đăng xuất :
  const handleDangXuat = () => {
    Swal.fire({
      title: `Xác nhận đăng xuất tài khoản?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận!",
      cancelButtonText: "Hủy!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        Swal.fire({
          title: "Đăng xuất thành công",
          icon: "success"
        });
        goPage('/')
        setTimeout(() => {
          goPage(0)
        }, 1000)
      }
    });
  }


  // lấy danh sách tài khoản
  const [accounts, setAccount] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get('users');
        setAccount(data)
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  // _______________ADMIN________________
  // page
  const [adminstrationPage, setAdminstrationPage] = useState([]);
  const getPageAdmin = () => {
    (async () => {
      const data = await getAdminPage();
      setAdminstrationPage(data)
    })()
  }
  useEffect(getPageAdmin, [])


  // ______________-GIỎ HÀNG________________
  const [cart, setCart] = useState([])
  const handleAddCart = (dataSP_da_them) => {
    const locItemTrung = cart.some((element) => element.id === dataSP_da_them.id);
    if (locItemTrung) {
      setCart((cart) => cart.map((s_pham) => s_pham.id === dataSP_da_them.id ?
        { ...s_pham, soluongItem: s_pham.soluongItem + 1 } : s_pham
      ))
      return;
    }
    setCart([{ ...dataSP_da_them, soluongItem: 1 }, ...cart])
  }


  return (
    <>
      <Routes>
        {/* client */}
        <Route path='/' element={<linkPage.Provider value={pageClient}>
          < Client
            dataUser={user}
            soLuongItem_cart={cart}
          /></linkPage.Provider>} >
          <Route index element={<dataContextProducts.Provider value={products}>
            <HomeClient
              addToCart={handleAddCart}
            />
          </dataContextProducts.Provider>} />
          <Route path='products_food' element={<dataContextProducts.Provider value={products}>
            <AllProductsClient
              addToCart={handleAddCart}
            />
          </dataContextProducts.Provider>
          } />
          <Route path='products_food/:id' element={<dataContextProducts.Provider value={products}>
            <OneProductClient />
          </dataContextProducts.Provider>} />
          <Route path='service_client' element={
            <h2>Service client page</h2>} />
          <Route path='about_us_client' element={<h2>About us client page</h2>} />
          <Route path='contact_us_client' element={<h2>Contact client page</h2>} />
          <Route path='cart' element={
            <Cart_Page
              gioHang={cart}
            />} />
          <Route path='thanh_toan/:id' element={<Thanh_Toan />} />
          <Route path='login' element={<Login
            loginAccount={handleLogin}
            loadingAPI={loadingApiLogin}
            saithongtin={saiThongTin} />} />
          <Route path='create_account' element={<tatCaTaiKhoan.Provider value={accounts}><CreateAccount
            createAccount={handleCreateAccount}
          /></tatCaTaiKhoan.Provider>} />

          <Route path='infomation_account' element={<InfoAccount
            dataUser={user}
            dangXuat={handleDangXuat}
          />} />
        </Route>

        {/* admin */}
        <Route path='/adminstration' element={<ProtectedRoute><AdminStrationsPage
          page={adminstrationPage}
        /></ProtectedRoute>}>
          <Route path='quan_li_menu' element={<soLuongTrangClient.Provider value={soLuongPage}>
            <AllMenu />
          </soLuongTrangClient.Provider>} />
          <Route path='quan_li_thuc_don' element={<All_Thuc_Don />} />
          <Route path='them_thuc_don' element={<Them_Thuc_Don />} />
          <Route path='quan_li_thuc_don/:id/sua_thuc_don' element={<Sua_Thuc_Don
          />} />
          <Route path='quan_li_tai_khoan' element={<tatCaTaiKhoan.Provider value={accounts}>
            <AllAccount />
          </tatCaTaiKhoan.Provider>} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes >
      <ToastContainer />
    </>
  )
}

export default App
