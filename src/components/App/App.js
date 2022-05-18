import logo from "../../logo.svg";
import "./App.css";
import Navigation from "../Navigation/navigation";
import Header from "../Header/header";
import Main from "../Main/main";
import About from "../About/about";
import Footer from "../Footer/footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main />
      <About />
      <Footer />
    </>
  );
}

export default App;
