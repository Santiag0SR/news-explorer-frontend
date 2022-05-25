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
import NewsCard from "../NewsCard/newscard";
import NewsCardList from "../NewsCardList/newscardlist";
import api from "../../utils/newsapi";
// import { getNewsCards } from "../../utils/newsapi";
// import PopupWithForm from "../PopupWithForm/popupwithform";
import SignIn from "../SignIn/signin";
import SignUp from "../SignUp/signup";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [popupRedirectText, setPopupRedirectText] = useState("");
  const [news, setNews] = useState([]);

  const handleSearchSubmit = (search) => {
    console.log(search);
    let keyword = search;
    api.getNewsCards({ keyword }).then((res) => {
      // const news = JSON.stringify(res.articles);
      // console.log(typeof news);
      setNews(res.articles);
      // console.log(res.articles);
      // setNews(JSON.stringify(res.articles));
    });
  };

  const handleCardSave = () => {};

  const handleSignInSubmit = (email, password) => {
    console.log(email, password);
    // authorize(email, password)
    //   .then((res) => {
    //     if (res.token) {
    //       handleLogin();
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     if (err === 400) {
    //       console.log("One or more of the fields were not provided");
    //     } else if (err === 401) {
    //       console.log(
    //         "the user with the specified email or password was not found"
    //       );
    //     }
    //     setStatus("failed");
    //     setTooltipOpen(true);
    //   });
  };

  const handleSignUpSubmit = (user, email, password) => {
    console.log(user, email, password);
    // authorize(email, password)
    //   .then((res) => {
    //     if (res.token) {
    //       handleLogin();
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     if (err === 400) {
    //       console.log("One or more of the fields were not provided");
    //     } else if (err === 401) {
    //       console.log(
    //         "the user with the specified email or password was not found"
    //       );
    //     }
    //     setStatus("failed");
    //     setTooltipOpen(true);
    //   });
  };

  function handleSingInClick() {
    setIsSignInOpen(true);
    setPopupRedirectText("Sign up");
  }

  function handleFormSwitch() {
    if (isSignInOpen) {
      setIsSignInOpen(false);
      setIsSignUpOpen(true);
      setPopupRedirectText("Sign in");
    } else if (isSignUpOpen) {
      setIsSignUpOpen(false);
      setIsSignInOpen(true);
      setPopupRedirectText("Sign up");
    }
  }

  function closeAllPopups() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
  }

  // useEffect(() => {
  //   let keyword = "Real Madrid";
  //   api.getNewsCards({ keyword }).then((res) => {
  //     // const news = JSON.stringify(res.articles);
  //     // console.log(typeof news);
  //     setNews(res.articles);
  //     // console.log(res.articles);
  //     // setNews(JSON.stringify(res.articles));
  //   });
  // }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/api" element={<NewsCardList data={news} />} /> */}
        <Route
          path="/"
          element={
            <>
              <Navigation onSignInClick={handleSingInClick} />
              <Header handleSearchSubmit={handleSearchSubmit} />
              <Main cards={news} onCardSave={handleCardSave} />
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              <Navigation />
              <SavedNewsHeader />
              <SavedNews />
            </>
          }
        />
      </Routes>
      <Footer />
      <SignIn
        isOpen={isSignInOpen}
        onClose={closeAllPopups}
        handleSignInSubmit={handleSignInSubmit}
        redirectText={popupRedirectText}
        handleFormSwitch={handleFormSwitch}
      />
      <SignUp
        isOpen={isSignUpOpen}
        onClose={closeAllPopups}
        handleSignUpSubmit={handleSignUpSubmit}
        redirectText={popupRedirectText}
        handleFormSwitch={handleFormSwitch}
      />
      {/* <PopupWithForm
        isOpen={isSignInOpen}
        onClose={closeAllPopups}
        handleSignInSubmit={handleSignInSubmit}
      /> */}
    </>
  );
}

export default App;
