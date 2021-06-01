
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { actions } from '../features/Intake/reducer';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    minWidth: 150,
    zIndex:10,
    margin: "10px"
  },
});

export default function ImgCard(props: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const removeItem = () => {
    console.log(props)
    dispatch(actions.reduceItem(props.foodId))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.food.label}
          height="140"
          image={props.food.image}
          title={props.food.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.food.label}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Calorie per serve: {props.food.ENERC_KCAL} KCAl
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={() => removeItem()}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}