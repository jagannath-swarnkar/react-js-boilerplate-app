import { Get } from "../lib/request"

 /**
 * @description method to call analytics data for table, get api
 * @author jagannath
 * @date 12/04/2021
 */
export const getTotalAnalyticsApi = () => {
    return Get('/analytics')
}

 /**
 * @description method to call graph data get api, for chart
 * @author jagannath
 * @date 13/04/2021
 * @param eventType: String - click | pageView | hover | videoPlay | download
 * @param filterBy: String - day | week | month | year
 */
export const getGraphDataApi = ({eventType, filterBy="week"}) =>{
    return Get(`/graph/${eventType}?filterBy=${filterBy}`)
}

 /**
 * @description method to call analytic table data get api, for chart
 * @author jagannath
 * @date 13/04/2021
 * @param eventType: String - click | pageView | hover | videoPlay | download
 * @param limit: Number - 10
 * @param skip: Number - 0
 */
  export const getAnalyticDataApi = ({eventType, skip=0,limit=10, startDate, endDate}) =>{

    return Get(`/analytics/${eventType}?skip=${skip}&limit=${limit}${startDate ? '&startDate='+startDate:''}${endDate ? '&endDate='+endDate:''}`)
}