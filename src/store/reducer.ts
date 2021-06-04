import { reducer as simulatorReducer } from '../features/Simulator/reducer';
import { reducer as foodReducer } from '../features/Food/reducer';
import { reducer as intakeReducer } from '../features/Intake/reducer';
import { reducer as surveyReducer } from '../features/Survey/reducer';

export default {
  simulator: simulatorReducer,
  food: foodReducer,
  intake: intakeReducer,
  survey: surveyReducer
};
