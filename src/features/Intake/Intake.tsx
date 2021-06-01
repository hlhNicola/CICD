
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import ImgCard from '../../components/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useSelector,useDispatch } from 'react-redux';
import { getSelectedItems, getTotalCalories } from './selectors';
import { actions } from  './reducer';
import { actions as simulatorActions } from '../Simulator/reducer';

export default function Intake() {
  const dispatch = useDispatch()
  const intake = useSelector(getSelectedItems)
  const calorie = useSelector(getTotalCalories)

  const dispatchSimulationError = () => {
    let errorMessage = ''
    if(calorie > 3000){
      errorMessage = 'It is too much for an adult daily intake, please remove some food'
    }
    else if(calorie < 1900){
      errorMessage = 'It is too less for an adult daily intake, please add more food'
    }
    dispatch(actions.intakeApiErrorReceived({error: errorMessage}))
  }

  const startSimulation = () => {
    if (calorie > 4000 || calorie < 1500){
      dispatchSimulationError()
    }
    else {
      const weight = Math.sqrt((calorie - 752.901)/0.028) - 167.074
      dispatch(simulatorActions.simulatorDataRecevied(weight))
    }
  }
  
  const cards = intake.length > 0 ? (intake.map((item: any, index: number) => {
      return <ImgCard food={item} key={index} foodId={index} style={{minWidth: "100px"}}/>
    })):null
  
  return (
    <Card>
      <CardActionArea>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Total Calories: {calorie} KCAL
        </Typography>
          <div style={{display: 'flex', justifyContent:'space-around', flexWrap: "wrap"}}>
            {cards}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" variant="contained" color="secondary" onClick={startSimulation}>
          Run Simulation
        </Button>
      </CardActions>
    </Card>
 )
};