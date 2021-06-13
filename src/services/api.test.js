import {getFoodOptions, getFooditems, postImages} from './api'
import axios from 'axios'

jest.mock('axios')

describe('getFoodOptions', () => {
    it('fetches ingredient hint from food api', async () => {
        const data = [
                "soy burger",
                "burger bun",
                "burger roll",
                "burger meat",
                "vegan burger",
                "veggie burger",
                "turkey burger",
                "vegetable burger",
                "black bean burger",
                "tom cat burger bun"
            ]
       
          axios.get.mockImplementationOnce(() => Promise.resolve(data));

          await expect(getFoodOptions('burger')).resolves.toEqual([
            "soy burger",
            "burger bun",
            "burger roll",
            "burger meat",
            "vegan burger",
            "veggie burger",
            "turkey burger",
            "vegetable burger",
            "black bean burger",
            "tom cat burger bun"
        ]);
   
    });
   
    it('fetches erroneously hint from food API', async () => {
        const errorMessage = 'Network Error';
 
        axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
        );
    });
  });

  describe('getFooditems', () => {
    it('fetches food data after click the hints', async () => {
      const data = {
          text: 'apple'
      };
   
      axios.get.mockImplementationOnce(() => Promise.resolve(data));

      await expect(getFooditems('apple')).resolves.toEqual(data);
   
    });
   
    it('fetches erroneously food from food API', async () => {
        const errorMessage = 'Network Error';
 
        axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
        );
    });
  });

  describe('postImages', () => {
    it('generate simulation images', async () => {
      const data = {
        "corrections": {
            "current": {
                "age": {
                    "value": "AG20",
                    "message": "age must be one of 'AG20' or 'AG40'"
                }
            },
            "goal": {
                "age": {
                    "value": "AG20",
                    "message": "age must be one of 'AG20' or 'AG40'"
                }
            }
        },
        "info": {
            "current": {
                "bmi": 28.286390532544377,
                "feet_offset": 0.06375
            },
            "goal": {
                "bmi": 21.630769230769232,
                "feet_offset": 0.06375
            }
        },
        "current": "http://sandbox-compositor.modelmydiet.com/i/fa186b787d70552f1bf1404f3fce663a50e95f78c0a08b97bef6876486da4839.jpeg",
        "goal": "http://sandbox-compositor.modelmydiet.com/i/77a316e763fa01ac6ccaead0fa7fe0479f1781ec06c2a4bee71e2e7516758e7e.jpeg"
    }
       
          axios.post.mockImplementationOnce(() => Promise.resolve(data));

          await expect(postImages(170, 'AG20', 130)).resolves.toEqual(data);
   
    });
   
    it('fetches erroneously result from Model My Diet API', async () => {
        const errorMessage = 'Network Error';
 
        axios.post.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
        );
    });
  });