import { assets } from "./assets/Assets";
import Header from "./components/Header/Header";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import MyMind from "./components/MyMind/MyMind";
import Emailme from "./components/Emailme/Emailme";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";

function App() {
  return (
    <main className="h-auto min-w-xs relative w-full px-3 pt-1">
      <Background />
      <Header />
      <Skill />
      <Contact />
      <MyMind />
      <Emailme />
      <Footer />
    </main>
  )
}

export default App;