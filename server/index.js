const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { User } = require("./models/User");

// application/x-www-form-urlencoded <- 분석해서 가져올 수 있게 해주는 거
app.use(bodyParser.urlencoded({ extended: true }));
// application/json <=""
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
const { default: userEvent } = require('@testing-library/user-event');
mongoose.connect('mongodb+srv://chanyoung:Chan1007-@chanyoungblog.wishc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB connected..@.'))
  .catch(err => console.log(err))
app.get('/api/hello', (req, res) => res.send('hello world'))

app.post('/api/user/signup', (req, res) => {
  //회원가입 데이터 디비 푸쉬
  console.log(req.body)
  const user = new User(req.body)

  user.save((err, userInfo) => {
    console.log(userInfo)
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})



app.post('/api/user/login', (req, res) => {
  //이메일 디비에서 찾기
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 아이디에 해당하는 유저가 없습니다."
      })
    }
    //이메일 맞으면 비밀번호 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, massage: "비밀번호가 틀렸습니다." })
      //비밀번호 맞는다면 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //토큰 저장
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })

  })

})
/*
app.get('/api/user/auth', auth, (req, res) => {
  //여기 까지 미들웨어를 통과해 왔다는 애기는 Authentication 이 true
  res.status(200).json({
    id: req.user.id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})
app.get('/api/user/logout', auth, (req, res) => {
  
  User.findOneAndUpdate({ id: req.user.id },
    { token: "" }, 
    (err,user) => {
    if(err) return res.json({ success: false,err });
    return res.status(200).send({
      succes: true
    })
  })
})

*/




app.listen(port, () => console.log(`Example app listening on port ${port}!`))