import axios from 'axios'

export const getFoodOptions = (inputIngr: string) => {
    return axios.get(`https://api.edamam.com/auto-complete`,{
        params: {
            q:inputIngr,
            limit: 10,
            app_id: process.env.REACT_APP_FOOD_APP_ID,
            app_key: process.env.REACT_APP_FOOD_APP_KEY,
          
        }
    })
}

export const getFooditems = (ingr: string) => {
    return axios.get(`/api/food-database/v2/parser`,{
        params: {
            ingr: ingr,
            app_id: process.env.REACT_APP_FOOD_APP_ID,
            app_key: process.env.REACT_APP_FOOD_APP_KEY,
        }
    })
}