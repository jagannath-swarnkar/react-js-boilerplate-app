import { DeleteWithToken, GetWithToken, PostWithToken } from "../lib/request"

 /**
 * @description
 * @author jagannath
 * @date 11/04/2021
 * @param data:Object {imageUrl: String, headText?: String, ctaLink?: String}
 */
export const addNewGlanceApi = (data) => {
    return PostWithToken('/glance', data)
}

 /**
 * @description method to get all glance data from api
 * @author jagannath
 * @date 11/04/2021
 * @param query:Object {limit=10, skip=0}
 */
export const getGlanceApi = ({limit=10, skip=0}) => {
    return GetWithToken(`/glance?limit=${limit}&skip=${skip}`)
} 


 /**
 * @description method to delete glance data by id
 * @author jagannath
 * @date 11/04/2021
 * @param id: String - glance id
 */
  export const deleteGlanceApi = (id) => {
    return DeleteWithToken(`/glance/${id}`)
} 