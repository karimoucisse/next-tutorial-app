import Image from "next/image";
import styles from "./singlePost.module.css";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const post = await getPost(params.slug);
  return (
    post ? (
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={post.img} alt={post.title} width={500} height={500} layout="responsive" />
        </div>
        <div className={styles.right}>
          <p>{post.desc}</p>
        </div>
      </div>
    ) : null
  );
};

export default SinglePostPage;
