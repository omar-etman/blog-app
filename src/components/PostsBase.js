import React from "react";
import { useEffect, useState } from "react";

function PostsBase() {
    const [posts, setPosts] = useState([]);
    const [images,setImages] = useState([]);

//   function dataCleanup(arr) {
//     return arr.map((item) => {
//       const { zipcode, street } = item.address;
//       return {
//         ...item,
//         zipcode,
//         street,
//       };
//     });
//   }
  async function fetchItems() {
    const postsResponse = await fetch("https://api.kanye.rest/");
    const postsData = await postsResponse.json();
    

    setPosts(postsData);
   
  }

  useEffect(() => {
    fetchItems();
  }, []);
  async function fetchImages() {
    const imagesResponse = await fetch("https://api.giphy.com/v1/gifs/random?api_key=4xrAcdcHmhcnRdjGLRDkddx7M54tWzk4&tag=&rating=g");
    const imagesData = await imagesResponse.json();
    

    setImages(imagesData);
    console.log(imagesData.data[0]);
  }

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
          {posts.quote}
          <div>
          <img src="gif" />
          </div>
    </>
  );
}

export default PostsBase;
