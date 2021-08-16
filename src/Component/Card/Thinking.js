import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgA from '../../images/thinking.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 500,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image={imgA}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          주로 어떤식으로 떠오르시나요 ?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         길을 가다가 재미있는 거리가 있으면 메모를 하여 마인드맵을 그립니다. 또, 노래를 듣거나 영상을 시청하다가 관심가는 거리가 생기면
         메모를 하여 마인드맵을 그려 저의 아이디어를 도출해냅니다. 아이디어라는 것은 일상에서 나오는 것이라 생각합니다.

        </Typography>
      </CardContent>
    </Card>
  );
}
