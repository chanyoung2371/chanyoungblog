import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  root: {
    marginTop:'5%',  
    width:'100%',
    height:'400px',
  },
  list:{
    padding:'10px 10px 10px 10px',
    listStyle: 'none',
    border: '1px solid black',
    marginBottom: '4%',
    
  }
  

}));

function TenList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.list}>1.사업:
        <p>꾸준히 저축한 돈과 대출로 오래 전부터 꿈이었던 나의 뷰가 좋고
            디저트가 맛있는 카페를 차렸을 것이다.
             
        </p>
        </li>
        <li className={classes.list}>2.결혼:
        <p>집을 마련하여 사귀고 있는 여자친구와 결혼을 하였을 것이다. 
            아이도 있어 행복한 가정을 꾸렸을 것이다.</p></li>
        <li className={classes.list}>3.여행:
        <p>
         가장 좋아하는 여행을 다닐 것이다. 여자친구와는 해외 투어를 할 것이고 
         친구들과는 국내투어를 하고 있을 것이다.
          
          </p></li>
       
      </ul>
    </div>
  )
}

export default TenList
