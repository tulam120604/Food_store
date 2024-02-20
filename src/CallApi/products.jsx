import instance from "./config";

//  get products:
const getProducts = async () => {
    try {
        const { data } = await instance.get('/products')
        return data
    } catch (error) {
        console.log(error);
    }
}

// get one products
const getOneProduct = async (idProduct) => {
    try {
        const { data } = await instance.get(`/products/${idProduct}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

// add products
const addProducts = async (productNew) => {
    try {
        const { data } = await instance.post(`/products`, productNew);
        return data
    } catch (error) {
        console.log(error);
    }
}

// delete products
const deleteProducts = async (idProducts) => {
    try {
        const { data } = await instance.delete(`/products/${idProducts}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

// edit products
const editProducts = async (productEdit) => {
    try {
        const { data } = await instance.put(`/products/${productEdit.id}`, productEdit);
        return data
    } catch (error) {
        console.log(editProducts);
    }
}







export { getProducts, getOneProduct, deleteProducts, addProducts, editProducts }