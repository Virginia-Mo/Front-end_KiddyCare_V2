import { Route, Routes } from "react-router-dom"
import "./App.css"
import "../../styles/index.scss"
import WelcomePage from "../WelcomePage"
import AboutPage from "../Views/AboutUs"
import Footer from "../Footer"
import ClassesPage from "../Views/Classes"
import TeachersPage from "../Views/Teachers"
import GalleryPage from "../Views/Gallery"
import ArticlesPage from "../Views/Articles"
import SingleProductPage from "../Views/SingleArticle"
import ArticlesByTag from "../Views/ArticlesByTags"
import ContactPage from "../Views/Contact"
import LoginPage from "../Login"
import WelcomeAdmin from "../BackOffice/WelcomePage"
import MessageAdmin from "../BackOffice/Message"
import ClassRequestAdmin from "../BackOffice/ClassBooking"
import NewsletterRequestAdmin from "../BackOffice/Newsletter"
import ArticlesAdmin from "../BackOffice/Articles"
import CommentsAdmin from "../BackOffice/Comments"
import ArticleForm from "../BackOffice/Articles/ArticleForm"
import SingleArticleAdmin from "../BackOffice/Articles/SingleArticleAdmin"

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
        <Route path="/tag/:id" element={<ArticlesByTag />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<WelcomeAdmin />} />
        <Route path="/admin/message" element={<MessageAdmin />} />
        <Route path="/admin/classrequest" element={<ClassRequestAdmin />} />
        <Route path="/admin/newsletterrequest" element={<NewsletterRequestAdmin />} />
        <Route path="/admin/articles" element={<ArticlesAdmin />} />
        <Route path="/admin/article/:id" element={<SingleArticleAdmin />} />
        <Route path="/admin/createarticle" element={<ArticleForm />} />
        <Route path="/admin/comments" element={<CommentsAdmin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
