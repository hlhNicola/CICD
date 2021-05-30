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

export const postImages = (ingr: string) => {
    return axios.post(`http://sandbox.modelmydiet.com/women`,{
        "api_key": process.env.REACT_APP_SIMULATOR_APP_KEY,
        "units":"imperial",
        "height":"65",
        "shape":"hourglass",
        "bust":"small",
        "ethnicity":"CA01",
        "age":"AG20",
        "eyes":"EYR",
        "nose":"NOS",
        "lips":"LPT",
        "beard_style": "BS01",
        "beard_color": "BC01",
        "hair_color":"HC01",
        "hair_style":"HS21",
        "outfit":"undergarment",
        "background":"blank",
        "view":"front",
        "delta": {
            "current":{
                "weight":"190"
            },
            "goal" : {
                "weight":"130"
            }
        }
    })
}