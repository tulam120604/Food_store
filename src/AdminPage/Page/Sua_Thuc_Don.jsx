/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProduct } from "../../CallApi/products"
import { dataProductsContext } from "../../DataContext/DataProvide"


const Sua_Thuc_Don = () => {
    const { Sua_San_Pham } = useContext(dataProductsContext)
    // promise form = useParam:
    const { id } = useParams()

    const naVi = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        data.loai = Number(data.loai)
        Sua_San_Pham(data)
        // naVi('/admin/products-manager')
        setTimeout(() => {
            naVi('/adminstration/quan_li_thuc_don'), 2000
        })
    }

    const promiseFormData = () => {
        (async () => {
            const data = await getOneProduct(id)
            reset(data)
        })()
    }
    useEffect(promiseFormData, [id]) // id o day la no se render lai giao dien dua theo id,
    //   neu id thay doi no se call lai api


    const options = [
        { value: 1, label: 'Đồ ăn' },
        { value: 2, label: 'Đồ uống' }
    ]
    return (<>
        <div className="addProductsAdmin">
            <section>
                <span className="capitalize h3 pl-2.5">sửa sản phẩm mã {id}</span>
            </section>
            <form className="w-11/12 mt-5 ml-5" onSubmit={handleSubmit(onSubmit)}>
                {/* ảnh*/}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">ảnh sản phẩm</label>
                    <input type="file" {...register('image')} id="form3Example3" className="form-control" />
                </div>
                {/* tên sản phẩm */}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example4">tên sản phẩm</label>
                    <input type="text" {...register('name', { required: true })}
                        id="form3Example4" className="form-control" />
                    {errors.name && <span className="text-red-600">tên sản phẩm không được để trống !</span>}
                </div>
                {/* giá sản phẩm */}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">giá sản phẩm</label>
                    <input type="number" {...register('price', { required: true })}
                        id="form3Example3" className="form-control" />
                    {errors.price && <span className="text-red-600">giá sản phẩm không được để trống</span>}
                </div>
                {/* tiêu đề sản phẩm*/}
                {/* <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">tiêu đề sản phẩm</label>
                    <input type="title" {...register('title', { required: true })}
                        id="form3Example3" className="form-control" />
                    {errors.title && <span className="text-red-600">tiêu đề không được để trống</span>}
                </div> */}
                {/* loại sản phẩm*/}
                <div className="form-outline mb-4">
                    <label className="form-label capitalize font-medium" htmlFor="form3Example3">loại sản phẩm (1: đồ ăn / 2: đồ uống )</label>
                    <select id="" {...register('loai')}>
                        {options.map((item, index) =>
                            <option key={index} value={item.value}>{item.label}</option>
                        )}
                    </select>
                    {errors.new && <span className="text-red-600">loại sản phẩm không được để trống</span>}
                </div>
                {/* Submit button */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary btn-block mb-4 bg-sky-800 capitalize">
                        sửa sản phẩm
                    </button>
                </div>
            </form>
        </div>
    </>)
}

export default Sua_Thuc_Don