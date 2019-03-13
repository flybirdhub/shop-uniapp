import {post} from '../http'
export const user = {
    login(o) {
        return post('/api/User/login', o)
    }
}
