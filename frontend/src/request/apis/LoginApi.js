import http from "../http";

export const signin = async (name, pwd) => {
    const res = await http.fetchPost("/api/login/signin", name, pwd);
}

export const signout = async () => {
    const res = await http.fetchGet("/api/login/signout");
}

export const getDoc = async (title) => {
    const res = await http.fetchGet("/api/read/" + title, null);
    if (res.status === 200) {
        return res;
    }
}