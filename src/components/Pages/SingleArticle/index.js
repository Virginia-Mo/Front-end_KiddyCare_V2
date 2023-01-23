
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../actions/articles';
import { findItem } from '../../../selectors/getItemById';
import SecondHeader from '../../SecondHeader';
import './style.scss'

function SingleProductPage() {
    const { slug } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles());
      }, [dispatch]);
    
    const articles = useSelector((state) => state.articles.articles);

    const singleArticle =  useSelector(() => (
            findItem(articles, slug)
        ));
        console.log(singleArticle)

    const {comments} = singleArticle
    console.log(comments)

  return (
    <><SecondHeader mainTitle='Article' />
    <main>
<div className='bigcontainer'>
<div className="blogdetail__container">
<section className="blogcontent">
    <h3 className="content__subtitle">BLOG DETAIL PAGE</h3>

    <h2 className="content__title content__title--size left">{ singleArticle.maintitle  } </h2>
<div className="article__container">
    <article className="blogarticle--page">
            <p className="blogarticle__details-page">
                <img src="../img/folder.png" alt="folder icon" className="blogarticle__img" /><span className="webdesign">{singleArticle.tag.name}</span>
                 <img src="../img/bubble-chat.png" alt="comment icon" className="blogarticle__img" /><span className="webdesign">{comments.length}</span>                   
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
    {
         (comments.length <=1) && (
             <h2 className="content__title content__title--size"> {comments.length} Comment </h2>
        )
    }
    {
        (comments.length > 1) && (
             <h2 className="content__title content__title--size"> {comments.length} Comments </h2>
        )
    }
    {
        comments && (
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
    <section className="blog__messageform">
    <div className="contact__formcontainer">
        <h3 className="content__title contact__title ">Leave a comment</h3>
        <form action="" className="contact__form--blog " method="POST">
            <label className="label" htmlFor="name">Name *
            <input type="text" id="name" name="name" className="contactform__input" required />
            </label>
            <label className="label" htmlFor="email">Email *
            <input type="email" id="email" name="email" className="contactform__input" required />
            </label>
            <label className="label" htmlFor="comment__message">Message *
            <textarea name="comment__message" id="contact__message" cols="10" rows="10" className="contactform__input contact__message" required />
            </label>
            <button type="submit" className="contact__btn contact__btn--comment ">Leave a comment</button>
        </form>
    </div>
    </section>
 </div>
 <aside>  
 
<div className="blog__author">
<img src={singleArticle.author_img} alt="blog-author-img" className="blog__author-img" />
<h2 className="blogarticle__title blogarticle__title--author">{singleArticle.authorname}</h2>

<p className="blog__author--p">{singleArticle.authorjob} </p>
</div>


{/* <section class="categories">
<h2 class="content__title">Categories</h2>
<ul><% for (const tag of tags){}
<li class="list-elem"><a href="/tag/{tag.id}" class="categories__links">{tag.name}<span class="numberCat">{tag.article.length}</span></a></li>
<% }}
</ul>

</section>
<section class="recent__post">
    <h2 class="content__title content__title--size">Recent Post</h2>
    <% for (const article of articles){}
    <article class="blogarticle blogarticle--post">
        <div class="recentarticle__img"><img src="../uploads/{article.main_img}" alt="blog3" class="blogarticle__image--post"></div>
        <a href="/blogdetails/{article.id}" class="link_blog">
            <h3 class="blogarticle__title">{article.maintitle}</h3>
       </a>
    </article>
<%}}
</section> */}
 </aside> 
</div>
    </main>
    </>
  );
}

export default SingleProductPage;
