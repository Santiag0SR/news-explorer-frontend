import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Navigation from "../Navigation/navigation";
import Header from "../Header/header";
import Main from "../Main/main";
import About from "../About/about";
import Footer from "../Footer/footer";
import SavedNewsHeader from "../SavedNewsHeader/savednewsheader";
import api from "../../utils/newsapi";
import SignIn from "../SignIn/signin";
import SignUp from "../SignUp/signup";
import Preloader from "../Preloader/preloader";
import NotFound from "../NotFound/notfound";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [popupRedirectText, setPopupRedirectText] = useState("");
  const [news, setNews] = useState([]);
  const [numberCards, setNumberCards] = useState("3");
  const [isLoading, setIsLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {}, []);

  const handleSearchSubmit = (search) => {
    // setSearching(false);
    // setNotFound(false);
    // setIsLoading(true);
    // setNumberCards("3");
    // let keyword = search;
    // localStorage.setItem("keyword", search);
    // api
    //   .getNewsCards({ keyword, numberCards })
    //   .then((res) => {
    //     if (res.totalResults === 0) {
    //       setNotFound(true);
    //       localStorage.removeItem("articles");
    //     } else {
    //       setNotFound(false);
    //       localStorage.setItem("articles", JSON.stringify(res.articles));
    //       setNews(JSON.parse(localStorage.getItem("articles")));
    //       localStorage.setItem("resultsNumber", res.totalResults);
    //       const totalResults = localStorage.getItem("resultsNumber");
    //       if (totalResults < parseInt(numberCards)) {
    //         setIsDisabled(true);
    //       } else setIsDisabled(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(`Error:${err}`);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //     setSearching(true);
    //   });
  };

  function handleCardSave(card) {
    let keyword = localStorage.getItem("keyword");
    console.log(keyword);
    console.log(card);
    // add when set up personal api
    // api.saveCard(card, keyword).then((newCard) => setNews([newCard, ...news]));
  }

  function handleCardDelete(card) {
    console.log(card);
    // add when set up personal api
    // api.saveCard(card, keyword).then((newCard) => setNews([newCard, ...news]));
  }

  const handleShowMoreButton = () => {
    const totalResults = localStorage.getItem("resultsNumber");

    if (totalResults < parseInt(numberCards)) {
      console.log("no more results");
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      let addnews = (3 + news.length).toString();
      const keyword = localStorage.getItem("keyword");
      api.getNewsCards({ keyword, numberCards: addnews }).then((res) => {
        localStorage.setItem("articles", JSON.stringify(res.articles));
        setNews(JSON.parse(localStorage.getItem("articles")));
      });
    }
  };

  const handleSignInSubmit = (email, password) => {
    console.log(email, password);
    setIsLoggedin(true);
    closeAllPopups();
    navigate("/saved-news");
    // TO ADD WHEN BACKEND ADDED
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
    setIsSignUpOpen(false);
    setShowMobileMenu(false);
    setIsSignInOpen(true);
    // TO ADD WHEN BACKEND ADDED
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

  function toggleMenu() {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else setShowMobileMenu(true);
  }

  function handleLinkClick() {
    setShowMobileMenu(false);
  }

  function handleLogoutClick() {
    console.log("hello");
    setIsLoggedin(false);
    navigate("/");
  }

  function handleSingInClick() {
    setShowMobileMenu(false);
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
    setShowMobileMenu(false);
  }

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
        <Route
          path="/"
          element={
            <>
              <Navigation
                showMobileMenu={showMobileMenu}
                toggleMenu={toggleMenu}
                onLinkClick={handleLinkClick}
                onSignInClick={handleSingInClick}
                isLoggedin={isLoggedin}
                onLogout={handleLogoutClick}
              />
              <Header handleSearchSubmit={handleSearchSubmit} />
              {notFound && <NotFound />}

              {isLoading && <Preloader />}
              {/* {searching && !notFound && ( */}
              <Main
                cards={news}
                onCardSave={handleCardSave}
                onShowMore={handleShowMoreButton}
                isDisabled={isDisabled}
              />
              {/* )} */}

              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              <Navigation
                showMobileMenu={showMobileMenu}
                toggleMenu={toggleMenu}
                onLinkClick={handleLinkClick}
                onSignInClick={handleSingInClick}
                isLoggedin={isLoggedin}
                onLogout={handleLogoutClick}
              />
              <SavedNewsHeader />
              {news !== null && (
                <Main
                  cards={news}
                  onShowMore={handleShowMoreButton}
                  onCardDelete={handleCardDelete}
                />
              )}
            </>
          }
        />
      </Routes>
      <Footer />
      <SignIn
        isOpen={isSignInOpen}
        onClose={closeAllPopups}
        onSignin={handleSignInSubmit}
        redirectText={popupRedirectText}
        handleFormSwitch={handleFormSwitch}
      />
      <SignUp
        isOpen={isSignUpOpen}
        onClose={closeAllPopups}
        onSignup={handleSignUpSubmit}
        redirectText={popupRedirectText}
        handleFormSwitch={handleFormSwitch}
      />
    </>
  );
}

export default App;
