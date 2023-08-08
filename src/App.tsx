import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Buttons from "./components/TopButtons";
import MyProjects from "./components/Projects";
import Skills from "./components/Skills";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <Profile />
        <Buttons />
        <MyProjects />
        <Skills />
        <BlogPosts />
      </main>
    </div>
  );
}

export default App;
