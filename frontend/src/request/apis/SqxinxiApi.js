import http from "../http";

export const saveApplicationInfo = async (id, data) => {
    console.log(id, data)
    const res = await http.fetchPost("/api/ApplicationInfo/" + id, data);
    // console.log(res);
}

export const getApplicationInfo = async (id) => {
    return await http.fetchGet("/api/ApplicationInfo/" + id, null);
}