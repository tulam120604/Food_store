import instance from "./config";

// tạo tài khoản
const create_account = async (newAcc) => {
    try {
        const { data } = await instance.post(`users`, newAcc);
        return data
    } catch (error) {
        console.log(error);
    }
}

// đăng nhập
const login_account = async (loginAcc) => {
    try {
        const { data } = await instance.post(`login`, loginAcc);
        return data
    } catch (error) {
        console.log(error.response.data);
    }
}

export { create_account, login_account }