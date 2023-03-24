/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiFillFolder } from "react-icons/ai";
import { FaComments } from "react-icons/fa";

function ArticleCard({id, main_img, maintitle, tag, comments, introduction }) {

  return (
    <article className="blogarticle" key={id}>
    <div className="article__text">
   <div className="article__img">
   <img src={main_img} alt="blog1" className="blogarticle__image" />

   </div> 
    <h3 className="blogarticle__title">{maintitle}</h3>
    <p className="blogarticle__details-page">
   
        <AiFillFolder alt="folder icon" class="blogarticle__img" />
        <span className="webdesign">{tag.name}</span>
        <FaComments alt="comment icon" class="blogarticle__img" />
        <span className="webdesign">{comments.length}</span>                  
</p>
    <p className="blogarticle__description">{introduction}</p>
    <Link to={`/articles/${id}`} className="joinclass__btn joinclass__btn--center">Read More</Link>
    </div>
</article>
  );
}

ArticleCard.propTypes = {
    id: PropTypes.number.isRequired,
    main_img: PropTypes.string.isRequired,
    maintitle: PropTypes.string.isRequired,
    tag: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    introduction: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
          name : PropTypes.string.isRequired,
        })
      ).isRequired,
}

export default ArticleCard;
