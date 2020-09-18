import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

const SimpleCard: React.FC = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src="https://avatars1.githubusercontent.com/u/23100510"
          title="Samuel Cabral"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Samuel Cabral
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            samuel-cabral
          </Typography>

          <Typography variant="body2" component="h3">
            Computing engineering student at IFCE Fortaleza, full-stack
            development student at Rocketseat and inter IT Support Technician at
            TRT7
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Follow
        </Button>
        <Button size="small" color="primary">
          {bull}
          {bull}
          {bull}
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
