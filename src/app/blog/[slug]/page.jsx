import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <div className= {styles.container}>
      <div className={styles.left}>
        <Image src= "/photo.jpg" fill/>
      </div>
      <div className= {styles.right}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          libero eligendi dignissimos autem hic? Quos animi, deleniti laborum a
          , iure, voluptatum numquam nihil possimus asperiores facilis maxime
           harum voluptate veritatis.
        </p>
      </div>
    </div>
  )
}

export default SinglePostPage