
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

export default function ImgCard({food}: any) {
  const classes = useStyles();
  if(food){
    console.log('1',food.label)

  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Apple"
          height="140"
          image='s'
          title="Apple"
        />
        {food}
      </CardActionArea>
    </Card>
  );
}