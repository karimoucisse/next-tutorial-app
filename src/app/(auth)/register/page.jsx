import { connectToDb } from "@/lib/utils"
import  styles from "./register.module.css"
import { User } from "@/lib/models"
import bcrypt from "bcrypt"
const RegisterPage = () => {

  const handleregiser = async (data) => {
    "use server"
    const {name, email, password, passwordRe} = Object.fromEntries(data)
    try {
      connectToDb()
      if(password !== passwordRe)
      {
        return "error, passwords don't match"
      }
      const userExist = await User.findOne({email})
      if(userExist)
      {
        return "error, user already exist"
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const newUser = new User({
        name,
        email,
        password: hashedPassword
      })
      await newUser.save()
    } catch (error) {
      console.log(error);
      return {error: "error in register"}
    }
  }

  return (
    <div className= {styles.container}>
      <form action= {handleregiser}>
        <input type="text" placeholder="Name" name="name"/>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
        <input type="password" placeholder="Password verification" name="passwordRe"/>
        <button>Valider</button>
      </form>
    </div>
  )
}

export default RegisterPage