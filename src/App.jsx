import { createContext, useEffect, useState } from 'react'
import './App.css'
import { addProducts, deleteProducts, editProducts, getOneProduct, getProducts } from './CallApi/products'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Client from './ClientPage/Client'
import OurMenuClient from './ClientPage/HomeClientPage/OurMenuClient'
import HomeClient from './ClientPage/HomeClient'
import { getAdminPage, getClientPage } from './CallApi/page'
import AllProductsClient from './ClientPage/ProductsClientPage/allProductsClient'
import Login from './Login/Login'
import CreateAccount from './Login/CreateAccount'
import { create_account, login_account } from './CallApi/login'
import { useLocalStorage } from './Hooks/useStrorage'
import { ToastContainer, toast } from 'react-toastify'
import InfoAccount from './ClientPage/InfoAccount/InfoAccount'
import AdminStrationsPage from './AdminPage/AdminStrations'
import AllMenu from './AdminPage/Page/AllMenu'
import All_Thuc_Don from './AdminPage/Page/All_Thuc_Don'
import Them_Thuc_Don from './AdminPage/Page/Them_thuc_don'
import Sua_Thuc_Don from './AdminPage/Page/Sua_Thuc_Don'
import OneProductClient from './ClientPage/ProductsClientPage/OneProductClient'
import Cart_Page from './ClientPage/Cart/cart'
import Thanh_Toan from './ClientPage/ThanhToan/ThanhToan'

// eslint-disable-next-line react-refresh/only-export-components
export const dataContextProducts = createContext()


function App() {
  const goPage = useNavigate();

  // lấy dữ liệu người dùng qua localStorag

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

  // lấy 1 sản phẩm
  const [oneProduct, setOneProduct] = useState([])
  const dataOneProduct = (idProduct) => {
    (async () => {
      const data = await getOneProduct(idProduct);
      setOneProduct(data)
    })()
  }
  useEffect(dataOneProduct, [])

  // thêm sản phẩm  
  const Them_Product = async (productNew) => {
    try {
      const data = await addProducts(productNew);
      setProducts([...products, data])
      toast.success('Đã thêm thực đơn.', { autoClose: 1200 })
    } catch (error) {
      toast.error('Thêm thực đơn thất bại.', { autoClose: 1200 })
      console.log(error);
    }
  }

  // xóa sản phẩm
  const handleRemove = async (idProducts) => {
    try {
      await deleteProducts(idProducts);
      const products_con_lai = products.filter((item) => item.id !== idProducts);
      setProducts(products_con_lai);
      toast.success("Đã xóa thực đơn.", { autoClose: 1200 })
    } catch (error) {
      console.log(error);
    }
  }

  // sửa sản phẩm :
  const handleEditProduct = async (product_edit) => {
    try {
      await editProducts(product_edit);
      setProducts(products.map((item) => (item.id === product_edit.id) ? product_edit : item))
    } catch (error) {
      toast.error('Sửa thực đơn thất bại.', { autoClose: 1200 })
      console.log(error);
    }
  }



  // ACCOUNT
  // tạo tài khoản
  const handleCreateAccount = async (newAcc) => {
    try {
      const data = await create_account(newAcc)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // đăng nhập:
  const [loadingApiLogin, setLoadingApiLogin] = useState(false);

  const [saiThongTin, setSaiThongTin] = useState('');
  const [user, setUser] = useLocalStorage()
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
    const confirm = window.confirm('Xác nhận đăng xuất ?');
    if (confirm) {
      localStorage.clear()
      toast.success('Đã đăng xuất.', { autoClose: 1200 })
      goPage('/')
    }
  }

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
    setCart([...cart, dataSP_da_them])
  }

  return (
    <>
      <Routes>
        {/* client */}
        <Route path='/' element={
          <Client
            page={pageClient}
            dataUser={user}
            soLuongItem_cart={cart}
          />} >
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
          <Route path='service_client' element={<OurMenuClient />} />
          <Route path='about_us_client' element />
          <Route path='contact_us_client' element />
          <Route path='cart' element={
            <Cart_Page
              gioHang={cart} />} />
          <Route path='thanh_toan/:id' element={<Thanh_Toan />} />
          <Route path='login' element={<Login
            loginAccount={handleLogin}
            loadingAPI={loadingApiLogin}
            saithongtin={saiThongTin} />} />
          <Route path='create_account' element={<CreateAccount
            createAccount={handleCreateAccount}
          />} />

          <Route path='infomation_account' element={<InfoAccount
            dataUser={user}
            dangXuat={handleDangXuat}
          />} />
        </Route>

        {/* admin */}
        <Route path='/adminstration' element={<AdminStrationsPage
          page={adminstrationPage}
        />}>
          <Route path='quan_li_menu' element={<AllMenu />} />
          <Route path='quan_li_thuc_don' element={<All_Thuc_Don
            SP={products}
            onRemove={handleRemove} />} />
          <Route path='them_thuc_don' element={<Them_Thuc_Don
            onAddProduct={Them_Product} />} />

          <Route path='quan_li_thuc_don/:id/sua_thuc_don' element={<Sua_Thuc_Don
            onUpdateProduct={handleEditProduct}
          />} />
        </Route>
      </Routes >
      <ToastContainer />
    </>
  )
}

export default App
