import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgA from '../../images/coding.jpg'

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
          어떠한 코딩을 하나요 ?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        현재 웹 프로그래밍을 중심으로 하여 HTML,CSS,JS를 주로 하고 있습니다. 가장 좋아하는 언어는 CSS이며 
        이유는 디자인을 눈으로 보고 만들어지는 것을 바로 확인 할 수 있어 재미를 느꼈기 때문입니다. 앞으로 머신러닝을 공부할 계획이며
        4학년 때 저만의 프로젝트 결과물을 내는 것이 목표입니다.

        </Typography>
      </CardContent>
    </Card>
  );
}
