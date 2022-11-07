import axios, {AxiosError} from "axios";

export const getOneUser = async () => {
    try {
        const userDetail = await axios({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "get"
        });
        return {status: 200, data: userDetail.data};
    } catch (error: any) {
        throw {status: 500, error: error.data };
    }
}