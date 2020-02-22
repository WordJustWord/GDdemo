import http from "../http";

export const generate = async () => {
    const res = await http.fetchGet("/api/scbiaodan");
}

export const getDoc = async (title) => {
    const res = await http.fetchGet("/api/read/" + title, null);
    if (res.status === 200) {
        return res;
    }
}