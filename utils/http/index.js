import {API_URL} from "@/config/var/api"
import {token} from "../storage/token"

export const post = (s, o = {}, b = API_URL) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: b + s,
            data: o,
            header: {
                'token': (() => {
                    return token.get()
                })()
            },
            success: (res) => {
                resolve(res.data)
            }
        });
    })
}
