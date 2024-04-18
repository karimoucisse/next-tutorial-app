import SingleCart from "@/components/singlecart/SingleCart"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"

const BlogPage = async () => {
  const posts = await getPosts()
  return (
    <div className= {styles.container}>
      {posts?.map(post => (
        <SingleCart post= {post} key={post.title}/>
      ))}
    </div>
  )
}

export default BlogPage