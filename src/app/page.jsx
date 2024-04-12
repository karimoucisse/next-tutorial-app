import Image from "next/image"
import styles from "./home.module.css"

const page = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.textContainer}>
        <div>
          <h2>Creative</h2>
          <h2>Thoughts</h2>
          <h2>Agency.</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Unde nostrum corrupti aliquam voluptatum beatae 
          fuga odit facere et obcaecati, nemo cum cupiditate 
          quidem praesentium? Aspernatur eligendi tenetur porro 
          qui illum!
        </p>
        <div className= {styles.btnContainer}>
          <button>Learn More</button>
          <button>Contact</button>
        </div>
      </div>
      <div className= {styles.imageContainer}>
        <Image src="/photo.jpg" fill/>
      </div>
    </div>
  )
}

export default page