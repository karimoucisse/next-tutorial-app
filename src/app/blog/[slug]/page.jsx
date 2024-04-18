import Image from "next/image"
import styles from "./singlePost.module.css"
import { getPost } from "@/lib/data";

const SinglePostPage = async ({params}) => {
  const post = await getPost(params.slug);
  return (
    (<div className= {styles.container}>
      <div className={styles.left}>
        <Image src= {post.img} fill/>
      </div>
      <div className= {styles.right}>
        <p>{post.desc}</p>
      </div>
    </div>)
  )
}

export default SinglePostPage