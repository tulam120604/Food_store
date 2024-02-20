import instance from "./config";

// client page
const getClientPage = async () => {
    try {
        const { data } = await instance.get('pagesClient');
        return data
    } catch (error) {
        console.log(error);
    }
}


// admin page
const getAdminPage = async () => {
    try {
        const { data } = await instance.get('menuAdmin');
        return data
    } catch (error) {
        console.log(error);
    }
}


export { getClientPage, getAdminPage }