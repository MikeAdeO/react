import { useEffect, useState } from "react"


const APIS = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => {
        console.log("DATAAA=", data);
        setPosts(data);
     }).catch((err) => {
        alert(err.message);
     })
   }, []);

  


  return (
   
    <div>
        <div className="post__container">
            {
               posts.map((post, index) => {
                    return (
                        <div key={post.id}>
                            <h1>{index+1}</h1>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p><br></br><br></br>
                        </div>
                    )
               }) 
            }
        </div>
    </div>
  )
}

export default APIS