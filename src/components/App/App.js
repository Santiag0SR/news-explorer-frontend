import logo from "../../logo.svg";
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
      <Navigation />
      <Header />
      <Main />
      <About />
      <Footer />
      <NavigationDark />
      <SavedNewsHeader />
      <SavedNews />
      <PopupWithForm isOpen={true} />
    </>
  );
}

export default App;
