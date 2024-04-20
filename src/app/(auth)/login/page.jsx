import { auth, signIn } from "@/lib/auth"
import styles from "./login.module.css"

const LoginPage = async ()  => {

  const session = await auth()

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
  }
  return (
    <div className= {styles.container}>
      <form action= {handleGithubLogin}>
        {/* <input type="string" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/> */}
        <button>Valider</button>
      </form>
    </div>
  )
}

export default LoginPage