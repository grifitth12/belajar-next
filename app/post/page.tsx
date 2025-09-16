import CardList from "../components/post/CardList"
import ViewUSerButton from "../components/post/ViewUserButton"
import styles from "./post.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"   

interface Ipost{
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts =  async() => {
    const response = await fetch(base_url, {
        next: {revalidate: 3600}
    })
    const posts: Ipost[] = await response.json()
    return (
        <>
        <p>{new Date().toLocaleTimeString()}</p>
         <h1 className={styles.bgRed}> Post page </h1>
         {posts.map((post) => {
            return (
                <CardList key={post.id}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <ViewUSerButton userId={post.userId} />
                </CardList>
            )
         })}
        </>
    )
}

export default Posts;