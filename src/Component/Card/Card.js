import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import imgA from '../../images/mbti.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
     
        title="MBTI 성격 유형 테스트"
        subheader="INFP"
      />
      <CardMedia
        className={classes.media}
        image={imgA}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         저의 성격은 이렇습니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>성격:</Typography>
          <Typography paragraph>
           나의 행동을 계속 돌아보며 반성하고 고쳐서 나아가기 위해 노력한다.
          </Typography>
          <Typography paragraph>
            침착하고 수줍흠이 많은 사람처럼 비추어지기도 하지만, 마음 속은 언제라도 연료가 공금되는
            기회가 오면 크게 타오를 수 있는 열정의 불꽃이 숨어 있다. 그 불꽃은 주변 사람들의 영향을
            많이 받아 큰 불꽃이 될 수도 있고 사라질 수도 있다.
          </Typography>
          <Typography paragraph>
            성격이 세심하고 디테일하며 자신의 행동으로 누군가에게 조금이라도 부정적인 영향을 끼칠 경우 견디지 못한다. 
            이해력과 포용성이 뛰어난 데다, 갈등을 표면화시키는 성격도 아닌지라 상황 대부분을 '그럴 수 있지'하며 이해하려 노력하고 넘어간다.
          
          </Typography>
          <Typography>
            내면과 외면의 차이가 크다. 
         
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
