import axios from 'axios'

export const getFoodOptions = (input: string) => {
    return axios.get(`http://api.edamam.com/auto-complete`,{
        params: {
            q:input,
            limit: 10,
            app_id: process.env.food_app_id,
            app_key: process.env.food_app_key,
          
        }
    })
}