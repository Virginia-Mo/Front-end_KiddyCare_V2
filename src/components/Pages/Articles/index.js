import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillFolder } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { getArticles } from '../../../actions/articles';
import SecondHeader from '../../SecondHeader'
import './style.scss'

function ArticlesPage() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getArticles());
    }, [dispatch]);
  
  const articles = useSelector((state) => state.articles.articles);
  return (
    <>
    <SecondHeader mainTitle='Our Blog' />
    <main>
    <section className="blogcontent">
            <h3 className="content__subtitle content__subtitle--border">Latest Blog</h3>
            <h2 className="content__title content__title--size">Latest articles from our blog</h2>
            
     <div className="article__container">
{
    articles && (
        articles.map((article) => (
            <article className="blogarticle" key={article.id}>
                <div className="article__text">
               <div className="article__img">
               <img src={article.main_img} alt="blog1" className="blogarticle__image" />

               </div> 
                <h3 className="blogarticle__title">{article.maintitle}</h3>
                <p className="blogarticle__details-page">
                    <AiFillFolder alt="folder icon" class="blogarticle__img" />
                    <span className="webdesign">{article.tag.name}</span>
                    <FaComments alt="comment icon" class="blogarticle__img" />
                    <span className="webdesign">{article.comments.length}</span>                  
            </p>
                <p className="blogarticle__description">{article.introduction}</p>
                <Link to={`/articles/${article.id}`} className="joinclass__btn joinclass__btn--center">Read More</Link>
                </div>
            </article>

       ))
        
     )}  
     </div>
     </section>
     </main>
     </>
  );
}

export default ArticlesPage;
