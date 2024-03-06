/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import { addProducts, deleteProducts, editProducts, getProducts } from "../CallApi/products";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const dataProductsContext = createContext();
const DataProvide = ({ children }) => {
    // STATE LOADING KHI ALL API
    const [loadingApi, setLoadingApi] = useState(false)

    // LẤY TẤT CẢ SẢN PHẨM
    const [allProducts, setAllproducts] = useState([]);
    useEffect(() => {
        (async () => {
            setLoadingApi(true)
            try {
                const data = await getProducts();
                setAllproducts(data)
            } catch (error) {
                console.log(error);
            }
            setLoadingApi(false)
        })()
    }, []);

    // THÊM SẢN PHẨM
    const Them_San_Pham = async (addNew) => {
        try {
            const data = await addProducts(addNew);
            setAllproducts([...allProducts, data])
            toast.success('Đã thêm thực đơn.', { autoClose: 1200 })
        } catch (error) {
            console.log(error);
            toast.error('Đã thêm thực đơn.', { autoClose: 1200 })
        }
    }

    // XÓA SẢN PHẨM
    const Xoa_San_Pham = async (idProducts) => {
        try {
            await
                Swal.fire({
                    title: `Chắc chắn xóa sản phẩm mã ${idProducts} ?`,
                    text: "Chọn xác nhận để xóa, hoặc hủy để hủy thao tác !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Xác nhận!",
                    cancelButtonText: "Hủy!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        deleteProducts(idProducts);
                        const products_con_lai = allProducts.filter((item) => item.id !== idProducts);
                        setAllproducts(products_con_lai);
                        toast.success("Đã xóa thực đơn.", { autoClose: 1200 })
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });

        } catch (error) {
            console.log(error);
        }
    }
    // SỬA SẢN PHẨM
    const Sua_San_Pham = async (product_edit) => {
        {
            try {
                await editProducts(product_edit);
                setAllproducts(allProducts.map((item) => (item.id === product_edit.id) ? product_edit : item));
                toast.success('Sửa thực đơn thành công', { autoClose: 1200 })
            } catch (error) {
                toast.error('Sửa thực đơn thất bại.', { autoClose: 1200 })
                console.log(error);
            }
        }
    }

    const objContext = {
        loadingApi,
        allProducts,
        Them_San_Pham,
        Xoa_San_Pham,
        Sua_San_Pham
    }

    return (<>
        <dataProductsContext.Provider value={objContext}>
            {children}
        </dataProductsContext.Provider>
        <ToastContainer />
    </>)
}

// eslint-disable-next-line react-refresh/only-export-components
export { dataProductsContext, DataProvide }