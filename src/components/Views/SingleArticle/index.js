import { Link, useParams } from 'react-router-dom';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillFolder } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
// components
import CommentsForm from '../../CommentsForm';
import SecondHeader from '../../SecondHeader';
// actions
import { getArticles, saveSingleArticle } from '../../../actions/articles';
import { getTags } from '../../../actions/tags';
import { findItem } from '../../../selectors/getItemById';
import './style.scss'

function SingleProductPage() {
    const { slug } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
        dispatch(getTags());
      }, [dispatch]);
     
    const articles = useSelector((state) => state.articles.articles);
    const tags = useSelector((state) => state.tags.tags);

    const singleArticle =  useSelector(() => (
            findItem(articles, slug)
        ));
    dispatch(saveSingleArticle(singleArticle))
    const {comments} = singleArticle
    const recentPost = articles.slice(0,3)

  return (
    <><SecondHeader mainTitle={ singleArticle.maintitle} />
    <main>
<div className='bigcontainer'>
<div className="blogdetail__container">
<section className="blogcontent">
    <h3 className="content__subtitle">BLOG DETAIL PAGE</h3>

    <h2 className="content__title content__title--size left">{ singleArticle.maintitle  } </h2>
<div className="article__container">
    <article className="blogarticle--page">
            <p className="blogarticle__details-page">
                <AiFillFolder alt="folder icon" className="blogarticle__img" /><span className="webdesign">{singleArticle.tag.name}</span>
                 <FaComments alt="comment icon" className="blogarticle__img" /><span className="webdesign">{comments.length}</span>                   
        </p>
        <img src={singleArticle.main_img} alt="blog1" className="blogarticle__image--detail1" />

        <p className="blogarticle__description-page">{singleArticle.introduction}</p>

    </article>

    <article className="blogarticle--page">
     <h3 className="blogarticle__title blogarticle__title-page">{singleArticle.title1}</h3>
        <img src={singleArticle.img1} alt="blog2" className="blogarticle__image--detail2" />

        <p className="blogarticle__description-page">{singleArticle.description1}</p>
    </article>
    
    <article className="blogarticle--page">
        <h3 className="blogarticle__title blogarticle__title-page">{singleArticle.title2}</h3>
           <img src={singleArticle.img2} alt="blog2" className="blogarticle__image--detail3" />

           <p className="blogarticle__description-page">{singleArticle.description2}</p>
       </article>
</div>
</section>
    <section className="comments">
    {  (comments.length <=1) && (
             <h2 className="content__title content__title--size"> {comments.length} Comment </h2>
        )
    }
    {  (comments.length > 1) && (
             <h2 className="content__title content__title--size"> {comments.length} Comments </h2>
        )
    }
    {  comments && (
        comments.map((comment) => (
                <div className="comment--detail" key={comment.id}>
           <div className="div__usercomment">
            <strong className="comment--writer bold">{comment.name}</strong>
            <em className="datetime"> {comment.createdAt}</em>
            <p className="comment--p">{comment.message}</p>
            </div>
        </div>
            ))
        )
    }
    </section> 
   <CommentsForm />
 </div>
 <aside>  
    <div className="blog__author">
        <img src={singleArticle.author_img} alt="blog-author-img" className="blog__author-img" />
        <h2 className="blogarticle__title blogarticle__title--author">{singleArticle.authorname}</h2>

        <p className="blog__author--p">{singleArticle.authorjob} </p>
    </div>
<section className="categories">
    <h2 className="content__title">Categories</h2>
    <ul>
    { tags && (
        tags.map((tag) => (
            <li className="list-elem" key={tag.id}>
            <Link to={`/tag/${tag.id}`} class="categories__links">{tag.name}
            <span className="numberCat">{tag.article.length}</span>
            </Link></li>
        ))
    )}
    </ul>
</section>
<section className="recent__post">
    <h2 className="content__title content__title--size">Recent Post</h2>
   {recentPost && (
       recentPost.map((post) => (
    <article className="blogarticle blogarticle--post" key={post.id}>
        <div className="recentarticle__img"><img src={post.main_img} alt="blog3" className="blogarticle__image--post" /></div>
        <Link to={`/articles/${post.id}`} class="link_blog">
            <h3 className="blogarticle__title">{post.maintitle}</h3>
       </Link>
    </article>
       ))
   )}
</section> 
 </aside> 
</div>
    </main>
    </>
  );
}

export default SingleProductPage;
