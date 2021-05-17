import { reducer as simulatorReducer } from '../features/Simulator/reducer';
import { reducer as foodReducer } from '../features/Food/reducer';



export default {
  simulator: simulatorReducer,
  food: foodReducer
};
