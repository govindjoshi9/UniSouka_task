import './App.css'
import BlogProject from './components/BlogProject';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from './components/Hero';
import Team from './components/Team';

export default function App() {

  return (
    <div className="app">
      <Header/>

      <main>
        <Hero/>
        <Features />
        <Team />
        <BlogProject/>
      </main>

      <Footer/>
    </div>
  );
}
