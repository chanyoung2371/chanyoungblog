const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')
const moment=require('moment')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    password:{
        type:String,
        minlength:5
    },
    role: {
        type: Number,
        default: 0
    },
    Image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', function (next){
    var user = this;
    if (user.isModified('password')) {
        //비밀번호 암호화
        bcrypt.genSalt(saltRounds, function (err, salt){
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else{
        next()
    }
})

userSchema.methods.comparePassword=function(plainPassword,cb){
    bcrypt.compare(plainPassword,this.password,function(err,isMath){
        if(err) return cb(err);
        cb(null,isMath)
    })
}
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),'secret')
    var oneHour = moment().add(1,'hour').valueOf();

    user.tokenExp = oneHour;
    user.token=token;
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}
const User = mongoose.model('User', userSchema)
module.exports = { User }
