import FoodList from '../../components/FoodList';
import InforTable from '../../components/InfoTable';
import { getFoodInfo } from './selectors';
import { useSelector } from 'react-redux';
import StartSurvey from '../Survey/survey';
import Intake from '../Intake/Intake';
import { getSurveyStatus } from '../Survey/selectors';

export default function Food() {
  const foodData = useSelector(getFoodInfo)
  const surveyStatus = useSelector(getSurveyStatus)
  
  return (
    <div>
      <div style={{display: 'flex', justifyContent:'center', margin: '50px'}}>
      <FoodList/>
      </div>
      {foodData.length > 0 ? <InforTable /> : null}
      {surveyStatus ? <Intake /> : <StartSurvey /> }
    </div>
 )
};