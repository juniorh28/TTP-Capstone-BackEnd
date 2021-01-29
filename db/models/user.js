const Sequelize = require('sequelize');
const db = require('../db');
const crypto = require('crypto')

const User = db.define('user', {
/*     firstName: {
      type: Sequelize.STRING,
    },
  
    lastName: {
      type: Sequelize.STRING,
    },
 */
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    
/*     img:{
        type: Sequelize.STRING,
    }, */

    password:{
        type: Sequelize.STRING,
        get(){
            return () => this.getDataValue('password')
        }
    },
    salt:{
        type: Sequelize.STRING,
        get(){
            return () => this.getDataValue('salt')
        }
    },
    googleID:{
        type: Sequelize.STRING,
    }
})
  

/*   User.prototype.correctPassword=(candidatePwd)=>{
      return User.encryptPassword(candidatePwd,this.salt()) === this.password()
  } */
//each user will compare password and decrypt it
  User.prototype.correctPassword = function(enteredPassword) {
    return User.encryptPassword(enteredPassword, this.salt()) === this.password()
}

  User.generateSalt=()=>{return crypto.randomBytes(16).toString("base64")}

  //crypto will take the password and hash it
  User.encryptPassword=(plainText,salt)=>{
      return crypto.createHash("RSA-SHA256").update(plainText).update(salt).digest("hex")
  }

  //if the password is updated or created will generate salt on it
  const setSaltAndPassword=(user)=>{
      if(user.changed("password")){
          user.salt=User.generateSalt()
          user.password=User.encryptPassword(user.password(),user.salt())
      }
  }
  //before we create password in db, we encrypt it
  User.beforeCreate(setSaltAndPassword)
  //beofre we update password, we encrypt it
  User.beforeUpdate(setSaltAndPassword)
  User.beforeBulkCreate(users =>{
      users.forEach(setSaltAndPassword)
  })
  module.exports = User;
  