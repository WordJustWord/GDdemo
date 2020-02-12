import http from "../http";

export const saveApplicationInfo = async (id, data) => {
    console.log(id, data)
    const res = await http.fetchPost("/api/ApplicationInfo/" + id, data);
    // console.log(res);
}

export const getApplicationInfo = async (id) => {
    const res = await http.fetchGet("/api/ApplicationInfo/" + id, null);
    if (res.status === 200) {
        return res;
    }
}