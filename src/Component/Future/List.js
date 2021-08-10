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

function List() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
        <li className={classes.list}>1.직장 생활:
        <p>회사 프로젝트에서 주도권을 가지고 나의 주장을 펼치고 있을 것이며
          회사 동료들과 좋은 관계를 형성하여 즐거운 회사생활을 하고 있을 것이다.
        </p>
        </li>
        <li className={classes.list}>2.월급:
        <p>달 마다 200만원씩 저축했던 돈으로 자동차를 뽑고 저축금액을 300만원으로 늘려 결혼자금을
          모으고 있을 것이다.</p></li>
        <li className={classes.list}>3.생활:
        <p>
          주말에는 좋아하는 여가활동을 하면서 힐링을 하고 동네 친구들과 만나 즐거운 자리를 가지고 있을 
          것이다. 
          
          </p></li>
       
      </ul>
    </div>
  )
}

export default List
