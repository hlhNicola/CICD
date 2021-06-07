import { IState } from '../../store';

export const getSurveyStatus = (state: IState) => state.survey.complete;
export const getSurveyWeight = (state: IState) => state.survey.weight;
export const getSurveyAge = (state: IState) => state.survey.age;