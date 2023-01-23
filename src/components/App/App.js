import { Route, Routes } from "react-router-dom"
import "./App.css"
import "../../styles/index.scss"
import WelcomePage from "../WelcomePage"
import AboutPage from "../Pages/AboutUs"
import Footer from "../Footer"
import ClassesPage from "../Pages/Classes"
import TeachersPage from "../Pages/Teachers"
import GalleryPage from "../Pages/Gallery"
import ArticlesPage from "../Pages/Articles"
import SingleProductPage from "../Pages/SingleArticle"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/articles/:slug" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
