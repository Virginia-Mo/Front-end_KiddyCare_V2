/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import ArticleCard from '../../ArticleCard/ArticleCard';
import Header from '../../MainHeader';
import { getArticles } from '../../../actions/articles';
import './style.scss'

function ArticlesByTag() {
  const { id } = useParams()
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getArticles())
    }, [dispatch] );

  const articles =  useSelector((state) => state.articles.articles)
  const ArticlesByTags = articles.filter(tag => tag.tag_id === +id)
  return (
    <>
    <Header />
    <main>
     <section className="blogcontent">
 {
  (ArticlesByTags.length >= 1) && (        
    <>
    <h2 className="content__title content__title--size">{ArticlesByTags[0].tag.name}</h2>
    <div className="article__container">
    {         
      ArticlesByTags.map((data) => (
                <ArticleCard {...data} key={data.id} />
              ))
    }
              </div></>
    )}  
  {
    (ArticlesByTags.length === 0) && (
      <h2 className="content__title content__title--size">No article found in this category</h2>
    )
  }
    </section> 
     </main>
     </>
  );
}

export default ArticlesByTag;
