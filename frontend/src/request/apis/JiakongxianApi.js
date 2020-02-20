import http from "../http";

export const saveJkx = async (id, data) => {
    console.log(id, data)
    const res = await http.fetchPost("/api/line/save", data);
    // console.log(res);
}

export const getJkx = async (id) => {
    const res = await http.fetchGet("/api/line/getOne/" + id, null);
    if (res.status === 200) {
        return res;
    }
}