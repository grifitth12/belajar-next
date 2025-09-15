'use client'

import styles from "./post.module.css"

const Post = () => {
    return (
        <div className={styles.bgRed}>
            <h1>Post Page</h1>
            <button onClick={() => console.log("lihat user")}>lihat user</button>
        </div>
    )
}

export default Post