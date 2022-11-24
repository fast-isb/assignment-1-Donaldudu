import React from "react";
import Head from "./Manager/Head";
import AddDish from "./Manager/AddDish";
import DeleteDish from "./Manager/DeleteDish";
import ViewFeedbacks from "./Manager/ViewFeedbacks";
import { Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Head/>
      <Routes>
          <Route path="/AddDish" element={<AddDish/>}/>
          <Route path="/DeleteDish" element={<DeleteDish/>}/>
          <Route path="/ViewFeedbacks" element={<ViewFeedbacks/>}/>
      </Routes>
    </>
  );
};

export default Home;
