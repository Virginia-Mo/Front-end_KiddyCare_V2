/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../actions/articles';
// components
import ArticleCard from '../../ArticleCard/ArticleCard';
import SecondHeader from '../../SecondHeader'
import SearchBar from '../../SearchBar';
import './style.scss'

function ArticlesPage() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getArticles());
    }, [dispatch]);
  
  const articles = useSelector((state) => state.articles.articles);
  const value = useSelector((state) => state.formFields.search);

  const newArray = articles.filter((test) =>(test.maintitle.toLowerCase().includes(value) || test.tag.name.toLowerCase().includes(value)))

  return (
    <>
    <SecondHeader mainTitle='Our Blog' />
    <main>
    <section className="blogcontent">
    <SearchBar />
            <h3 className="content__subtitle content__subtitle--border">Latest Blog</h3>
            <h2 className="content__title content__title--size">Latest articles from our blog</h2>
            
     <div className="article__container">
    {
       newArray && (
        newArray.map((article) => (
            <ArticleCard {...article} key={article.id}/>
       ))
       )
     }
{
    (newArray.length === 0) && (
        articles.map((article) => (
            <ArticleCard {...article} key={article.id}/>
       ))
     )
 }  
      
     </div>
     </section>
     </main>
     </>
  );
}

export default ArticlesPage;
