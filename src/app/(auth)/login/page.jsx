import styles from "./login.module.css"

const LoginPage = () => {
  return (
    <div className= {styles.container}>
      <form action="">
        <input type="string" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Valider</button>
      </form>
    </div>
  )
}

export default LoginPage