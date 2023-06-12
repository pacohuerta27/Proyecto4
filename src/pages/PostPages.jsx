import { useState, useEffect } from "react"
import axios from "axios"

const PostPages = () => {
    const [posts, setPost] =useState ([])
    const obtenerPosts = async () => {
        const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(resp.data)
        setPost(resp.data)
    }

    useEffect(() => {
        console.log("Holas")
    })

    useEffect (() => {
        obtenerPosts();
    }, []);

  return (
    <>
     <main className="row">
            <article className="col">
                <h2>Posts</h2>
            </article>
        </main>
        <main className="row">
            <article className="col">
                <button type="button" className="btn btn-success" onClick={obtenerPosts}>Obtener informacion</button>
            </article>
        </main>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
           posts.map((posts)=>(
            <div key={posts.id} className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{posts.title}</h5>
                <p className="card-text">{posts.body}</p>
              </div>
            </div>
          </div>
           )) 
        }
</div>

    </>
  )
}

export default PostPages