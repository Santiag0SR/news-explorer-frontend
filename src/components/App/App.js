import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";

import "./App.css";
import Navigation from "../Navigation/navigation";
import Header from "../Header/header";
import Main from "../Main/main";
import About from "../About/about";
import Footer from "../Footer/footer";
import NavigationDark from "../NavigationDark/navigationdark";
import SavedNewsHeader from "../SavedNewsHeader/savednewsheader";
import SavedNews from "../SavedNews/savednews";
import PopupWithForm from "../PopupWithForm/popupwithform";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Header />
              <Main />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/saved-news"
          element={
            <>
              <NavigationDark />
              <SavedNewsHeader />
              <SavedNews />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
      <PopupWithForm isOpen={false} />
    </>
  );
}

export default App;
