import { Post } from "../lib/request"

/**
 * @description method to call login post api
 * @author jagannath
 * @date 11/04/2021
 * @param payload: Object- { email: String, password: String}
 */
export const loginApi = (data) => {
    return Post('/login', data)
}