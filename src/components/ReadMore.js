import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReadMore() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const post = localStorage.getItem("notes");
    const NewPost = JSON.parse(post);
      const FilterPost = NewPost.filter((post) => {
          return +post.id === +id;
      })[0];
      
      setPosts(FilterPost);
      
  },[]);
  console.log(posts);
    return (
       <> 
        <div>
      
                {posts.title}
                <div>
                {posts.author}
                </div>
                <div>
                {posts.content}
                </div>
    </div>
    </>
    );
}

export default ReadMore;
