const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// application/x-www-form-urlencoded <- 분석해서 가져올 수 있게 해주는 거
app.use(bodyParser.urlencoded({ extended: true }));
// application/json <=""
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chanyoung:Chan1007-@chanyoungblog.wishc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB connected...'))
  .catch(err => console.log(err))


app.get('/',(req, res) => res.send('hello world'))


/*
app.post('/register', (req, res) => {

  //회원가입 정보 클라에서 가져와 데이터 베이스에 저장.
  const user = User(req, body)

  user.save((err, userInfo ) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success:true
    })
  })  
})
*/

app.post('/login', (req, res) => {
  //요청된 이메일을 디비에 있는지 찾는 작업
  User.findOne({ email: req.body.email},(err, user)=>{
     if(!user){
    return res.json({
      loginSuccess: false,
      message: "제공된 이메일에 해당하는 유저가 없습니다."
    })
}
    //요청된 이메일이 디비에 있다면 비밀번호가 맞는지 확인
    /*user.comparePassword(req.body.password ,(err, isMatch) =>{
      if(!isMatch)
        return res.json({ loginSuccess: false, message:"비밀번호가 틀렸음"
      user.generateToken((err, user)=>{

      })
      })
    })*/
  })
  })



app.listen(port, () => console.log(`Example app listening on port ${port}!`))