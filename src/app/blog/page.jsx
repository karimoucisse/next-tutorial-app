import SingleCart from "@/components/singlecart/SingleCart"
import styles from "./blog.module.css"

const BlogPage = () => {
  return (
    <div className= {styles.container}>
      <SingleCart/>
      <SingleCart/>
      <SingleCart/>
      <SingleCart/>
      <SingleCart/>
    </div>
  )
}

export default BlogPage