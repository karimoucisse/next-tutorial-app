import { auth, signIn } from "@/lib/auth"
import styles from "./login.module.css"

const LoginPage = async ()  => {

  const session = await auth()

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  const handleLogin = async (data) => {
    "use server"
    const {email, password} = Object.fromEntries(data)
    console.log(email, password);
  }
  return (
    <div className= {styles.container}>
      <form action= {handleGithubLogin}>
        <button>Login with github</button>
      </form>
      <form action={handleLogin}>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage