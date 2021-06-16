import axios from 'axios'

// get drop down food options 
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

// get food items in table
export const getFooditems = (ingr: string) => {
    return axios.get(`/api/food-database/v2/parser`,{
        params: {
            ingr: ingr,
            app_id: process.env.REACT_APP_FOOD_APP_ID,
            app_key: process.env.REACT_APP_FOOD_APP_KEY,
        }
    })
}


// generate simulation images
export const postImages = (currentWeight:number, age: string, targetWeight: number, bust='small', shape='hourglass') => {

    return axios.post(`http://sandbox.modelmydiet.com/women`,{
        "api_key": process.env.REACT_APP_SIMULATOR_APP_KEY,
        "units":"imperial",
        "height":"65",
        "shape": shape,
        "bust": bust,
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

// store input to database
export const postDietData = (data: any) => {
    return axios.post(`http://localhost:8000`,  {data})
}