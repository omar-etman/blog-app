import "./App.css";
import Navigation from "./Components/Navigation";
import Posts from "./Components/Posts";
import PostDetails from "./Components/PostDetails"
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./API/index";
import {setPosts} from "./redux/reducers"

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.posts)
  useEffect(() => {
    const postsList = getPosts()
    dispatch(setPosts(postsList));
  }, [state]);
  return (
    <Box sx={{ bgcolor: grey[200]}}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/:id" element={<PostDetails />}/>
      </Routes>
    </Box>
  );
}

export default App;
