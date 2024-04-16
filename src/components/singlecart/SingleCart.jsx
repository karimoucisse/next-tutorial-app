import Image from "next/image"
import styles from "./singlecart.module.css"
import Link from "next/link"

const SingleCart = () => {
  return (
    <div className= {styles.container}>
      <Link href= "/blog/post">
        <div className= {styles.image_container}>
            <Image src= "/photo.jpg" fill/>
        </div>
        <div className= {styles.description}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>
      </Link>
    </div>
  )
}

export default SingleCart