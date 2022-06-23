import { useState, useEffect, useCallback, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/NewsApi";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import ConfirmationTooltip from "../ConfirmationTooltip/ConfirmationTooltip";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import {
  register,
  login,
  getUser,
  saveCard,
  getSavedCards,
  deleteCard,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/currentusercontext";

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [popupRedirectText, setPopupRedirectText] = useState("");
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);
  const [numberCards, setNumberCards] = useState("3");
  const [isLoading, setIsLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [serverError, setSeverError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedArticle, setSavedArticle] = useState({});
  const [CardWithoutAuth, setCardWithoutAuth] = useState([]);

  const navigate = useNavigate();

  const handleSearchSubmit = (search) => {
    setSearching(false);
    setNotFound(false);
    setIsLoading(true);
    setNumberCards("3");
    let keyword = search;
    localStorage.setItem("keyword", search);
    api
      .getNewsCards({ keyword, numberCards })
      .then((res) => {
        if (res.totalResults === 0) {
          setNotFound(true);
          localStorage.removeItem("articles");
        } else {
          setNotFound(false);
          localStorage.setItem("articles", JSON.stringify(res.articles));
          setNews(JSON.parse(localStorage.getItem("articles")));
          localStorage.setItem("resultsNumber", res.totalResults);
          const totalResults = localStorage.getItem("resultsNumber");
          if (totalResults < parseInt(numberCards)) {
            setIsDisabled(true);
          } else setIsDisabled(false);
        }
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      })
      .finally(() => {
        setIsLoading(false);
        setSearching(true);
      });
  };

  function checkSavedButton(card) {
    const savedArticle = savedNews.find((data) => data.link === card.url);
    return savedArticle;
  }

  function handleSaveClick(card) {
    const savedArticle = savedNews.find((data) => data.link === card.url);
    if (isLoggedin) {
      if (!savedArticle) {
        handleCardSave(card);
        setSavedArticle(savedArticle);
      } else {
        handleCardDelete(savedArticle);
        setSavedArticle(savedArticle);
      }
    } else {
      handleSingInClick();
    }
  }

  const saveWithoutAuth = (card) => {
    setCardWithoutAuth(card);
  };

  function handleCardSave(card) {
    let keyword = localStorage.getItem("keyword");
    saveCard({
      keyword,
      title: card.title,
      text: card.content,
      date: card.publishedAt,
      source: card.source.name,
      link: card.url,
      image: card.urlToImage,
    })
      .then((newCard) => {
        console.log("new article saved");
        setSavedNews([...savedNews, newCard.data]);
      })
      .catch((err) => console.error(`Problem saving new article: ${err}`));
  }

  function handleCardDelete(card) {
    deleteCard(card._id)
      .then(() => {
        console.log(" article deleted");
        setSavedNews(savedNews.filter((item) => item !== card));
      })
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  }

  const handleShowMoreButton = () => {
    const totalResults = localStorage.getItem("resultsNumber");

    if (totalResults < parseInt(numberCards)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      let addnews = (3 + news.length).toString();
      const keyword = localStorage.getItem("keyword");
      api
        .getNewsCards({ keyword, numberCards: addnews })
        .then((res) => {
          localStorage.setItem("articles", JSON.stringify(res.articles));
          setNews(JSON.parse(localStorage.getItem("articles")));
        })
        .catch((err) => {
          console.log(`Error:${err}`);
        });
    }
  };

  function handleTooltipOpen() {
    closeAllPopups();
    setIsTooltipOpen(true);
  }

  const handleSignInSubmit = (email, password) => {
    login(email, password)
      .then((res) => {
        if (res.token) {
          navigate("/");
          setIsLoggedin(true);
          setSeverError("");
          closeAllPopups();
        }
      })
      .then(() => {
        if (CardWithoutAuth) {
          handleCardSave(CardWithoutAuth);
        }
      })
      .catch((err) => {
        if (err === 400) {
          setSeverError("One or more of the fields were not provided");
          console.log("One or more of the fields were not provided");
        } else if (err === 401) {
          setSeverError(
            "The user with the specified email or password was not found"
          );
          console.log(
            "The user with the specified email or password was not found"
          );
        }
      })
      .finally(() => {
        setCardWithoutAuth([]);
      });
  };

  const handleSignUpSubmit = (email, password, name) => {
    setShowMobileMenu(false);
    register(email, password, name)
      .then((res) => {
        if (res.data._id) {
          console.log("res OK");
          handleTooltipOpen();
          resetForm();
          setSeverError("");
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => {
        if (err === 400) {
          console.log("One of the fields was filled in incorrectly");
          setSeverError("One of the fields was filled in incorrectly");
        } else if (err === 409) {
          console.log("This email or user is not available");
          setSeverError("This email or user is not available");
        } else {
          console.log(err);
          setSeverError(err);
        }
      });
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
    localStorage.removeItem("jwt");
    setIsLoggedin(false);
    navigate("/");
    setSavedNews([]);
  }

  function handleSingInClick() {
    closeAllPopups();
    setShowMobileMenu(false);
    setIsSignInOpen(true);
    setPopupRedirectText("Sign up");
    resetForm();
    setSeverError("");
  }

  function handleFormSwitch() {
    if (isSignInOpen) {
      setIsSignInOpen(false);
      setIsSignUpOpen(true);
      setPopupRedirectText("Sign in");
      resetForm();
      setSeverError("");
    } else if (isSignUpOpen) {
      setIsSignUpOpen(false);
      setIsSignInOpen(true);
      setPopupRedirectText("Sign up");
      resetForm();
      setSeverError("");
    }
  }

  function handleFormChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    }
  );

  const handleLogin = () => {
    setIsLoggedin(true);
  };

  function handleTokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      getUser()
        .then((res) => {
          if (res) {
            handleLogin();
          } else {
            localStorage.removeItem("jwt");
          }
        })
        .catch((err) => {
          if (err === 400) {
            console.log("Token not provided or provided in the wrong format");
          } else if (err === 401) {
            console.log("The provided token is invalid ");
          }
        });
    }
  }

  function closeAllPopups() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setShowMobileMenu(false);
    setIsTooltipOpen(false);
    setSeverError("");
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

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt && isLoggedin) {
      getUser()
        .then((data) => {
          setCurrentUser(data.data);
        })
        .catch((err) => console.log(`Problem fetching profile data: ${err}`));
      getSavedCards()
        .then((data) => {
          setSavedNews(data);
        })
        .catch((err) => console.log(`Problem fetching profile data: ${err}`));
    } else {
      setSearching(false);
    }
  }, [isLoggedin]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                checkSavedButton={checkSavedButton}
              />
              <Header handleSearchSubmit={handleSearchSubmit} />
              {notFound && <NotFound />}
              {isLoading && <Preloader />}
              {searching && !notFound && (
                <Main
                  cards={news}
                  onSaveClick={handleSaveClick}
                  isLoggedin={isLoggedin}
                  onShowMore={handleShowMoreButton}
                  isDisabled={isDisabled}
                  savedNews={savedNews}
                  savedArticle={savedArticle}
                  checkSavedButton={checkSavedButton}
                  saveWithoutAuth={saveWithoutAuth}
                />
              )}
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute onSignInClick={handleSingInClick}>
              <Navigation
                showMobileMenu={showMobileMenu}
                toggleMenu={toggleMenu}
                onLinkClick={handleLinkClick}
                onSignInClick={handleSingInClick}
                isLoggedin={isLoggedin}
                onLogout={handleLogoutClick}
              />
              <SavedNewsHeader isLoggedin={isLoggedin} savedNews={savedNews} />
              {savedNews !== null && (
                <Main
                  savedCards={savedNews}
                  onShowMore={handleShowMoreButton}
                  onCardDelete={handleCardDelete}
                />
              )}
            </ProtectedRoute>
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
        serverError={serverError}
        values={values}
        errors={errors}
        isValid={isValid}
        onFormChange={handleFormChange}
        resetForm={resetForm}
      />
      <SignUp
        isOpen={isSignUpOpen}
        onClose={closeAllPopups}
        onSignup={handleSignUpSubmit}
        redirectText={popupRedirectText}
        handleFormSwitch={handleFormSwitch}
        serverError={serverError}
        values={values}
        errors={errors}
        isValid={isValid}
        onFormChange={handleFormChange}
        resetForm={resetForm}
      />
      <ConfirmationTooltip
        isOpen={isTooltipOpen}
        onClose={closeAllPopups}
        onClick={handleSingInClick}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
