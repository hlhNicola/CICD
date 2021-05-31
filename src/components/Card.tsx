
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    zIndex:10,
  },
});

export default function ImgCard({food}:any) {
  const classes = useStyles();
  // if(food){
  //   console.log('1',food)

  // }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={food.label}
          height="140"
          image={food.image}
          title="Apple"
        />
        {food.label}
      </CardActionArea>
    </Card>
  );
}