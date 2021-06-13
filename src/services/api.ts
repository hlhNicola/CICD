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

// Capital name the function for using useSelector hook
export const postImages = (currentWeight:number, age: string, targetWeight: number) => {

    return axios.post(`http://sandbox.modelmydiet.com/women`,{
        "api_key": process.env.REACT_APP_SIMULATOR_APP_KEY,
        "units":"imperial",
        "height":"65",
        "shape":"hourglass",
        "bust":"small",
        "ethnicity":"CA01",
        "age": age,
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
                "weight": currentWeight
            },
            "goal" : {
                "weight": targetWeight
            }
        }
    })
}