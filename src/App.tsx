import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Buttons from "./components/TopButtons";
import MyProjects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Profile />
        <Buttons />
        <MyProjects />
      </main>
    </div>
  );
}

export default App;
