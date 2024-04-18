import Image from "next/image"
import styles from "./singlecart.module.css"
import Link from "next/link"

const SingleCart = ({post}) => {
  return (
    <div className= {styles.container}>
      {post ?
        <Link href= {`/blog/${post.slug}`}>
          {post.img &&
            <div className= {styles.image_container}>
              <Image src= {post.img} fill/>
            </div>
          }
        <div className= {styles.description}>
            <p>{post.desc}</p>
            <p>Utilisateur: {post.userId}</p>
            <p>Date de création: 01/04/2001 </p>
        </div>
      </Link> : null
      }
    </div>
  )
}

export default SingleCart