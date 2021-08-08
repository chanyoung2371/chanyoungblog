import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgA from '../../images/reading.jpg'

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
          독서를 언제부터 시작했나요?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          중학교 1학년 때 처음 독서를 시작하였으며 처음 책은
          축구선수 박지성의 자서전 '더 큰 나를 위해 나를 버리다'이었습니다.
          현재의 나, 미래의 나를 생각할 수 있게 하고 지치고 힘이 들 때 생각이 나 힘이 되어준 책이며,
          지금은
          지인에게 추천하고 싶은 책 1순위 입니다.


        </Typography>
      </CardContent>
    </Card>
  );
}
