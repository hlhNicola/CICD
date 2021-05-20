import axios from 'axios'

export const getFoodOptions = (inputIngr: string) => {
    return axios.get(`http://api.edamam.com/auto-complete`,{
        params: {
            q:inputIngr,
            limit: 10,
            app_id: process.env.food_app_id,
            app_key: process.env.food_app_key,
          
        }
    })
}

export const getFooditems = (ingr: string) => {
    return axios.get(`https://api.edamam.com/api/food-database/v2/parser`,{
        params: {
            ingr: ingr,
            app_id: process.env.food_app_id,
            app_key: process.env.food_app_key,
        }
    })
}