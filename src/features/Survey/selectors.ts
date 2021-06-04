import { IState } from '../../store';

export const getSurveyStatus = (state: IState) => state.survey.complete;