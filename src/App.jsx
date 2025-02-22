import React, { Suspense } from "react";
import Header from "./contact/Header";
import Nav from "./contact/Nav";
import Footer from "./contact/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./contact/Home";
import Insert from "./contact/Insert";
import View from "./contact/View";
import Update from "./contact/Update";
import Delete from "./contact/Delete";
import LogIn from "./Navbarlinks/LogIn";
import SingleVeiw from "./contact/SingleVeiw";
import UpdateEdite from "./contact/UpdateEdite";
import AlertBox from "./contact/Alertbox/AlertBox";

function App() {
  return (
    <>
      <Header />

      <div className="row">
        <Nav />
        <div className="main">
          <Suspense
            fallback={<p className="text-center text-xl">Loading...</p>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/view" element={<View />} />
              <Route path="/user/:id" element={<SingleVeiw />} />
              <Route path="/person/:id" element={<UpdateEdite />} />
              <Route path="/delete1/:id" element={<AlertBox />} />
              <Route path="/update" element={<Update />} />
              <Route path="/delete" element={<Delete />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </Suspense>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
