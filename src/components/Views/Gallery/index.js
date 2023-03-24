/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// components
import SecondHeader from '../../SecondHeader';
// actions
import { getGallery, saveNewGallery } from '../../../actions/gallery';

import 'animate.css'
import './style.scss'

function GalleryPage() {
    let id  = ""
    const dispatch = useDispatch();
    useEffect(() => {
      console.log("TEST")
      dispatch(getGallery());
    }, [dispatch]);
  
   
    const gallery = useSelector((state) => state.gallery.gallery);
    const newGallery = useSelector((state) => state.gallery.filteredGallery);

    // const filteredGallery = gallery.filter((data) => (data.category === id))
    // console.log(filteredGallery)
    const handleClick = (event) => { 
        id = event.target.id
        const filteredGallery = gallery.filter((data) => (data.category === id))
        console.log(id)
        dispatch(saveNewGallery(filteredGallery))
    }
    const handleAll = () => {
        const array = gallery
        dispatch(saveNewGallery(array))
    }
  return (
      <>
      <SecondHeader mainTitle='Gallery' />
    <main>
    <section className="gallerylist">
            <h3 className="content__subtitle content__subtitle--border">Our gallery</h3>
            <h2 className="content__title content__title--center">Our Kids School Gallery</h2>
            <div className="gallery__container" />
        </section>
    <section className="gallery__buttonsbox">
        <button type='button' className="joinclass__btn joinclass__btn--gallery" id="all" onClick={handleAll}>All</button>
        <button type='button' className="joinclass__btn joinclass__btn--gallery" id="Playing" onClick={handleClick}>Playing</button>
        <button type='button' className="joinclass__btn joinclass__btn--gallery" id="Drawing" onClick={handleClick}>Drawing</button>
        <button type='button' className="joinclass__btn joinclass__btn--gallery" id="Reading" onClick={handleClick}>Reading</button>
    </section>
    <section className="photos__container"> 
        <div id="galleryphotos" className="test"> 
        { newGallery !== "" && (
            newGallery.map((data) => (
            <Zoom key={data.id}>
                <img 
                src={data.img} 
                alt={data.name} 
                className="gallery-img animate__animated animate__fadeIn" />
            </Zoom>
            ))
         ) }
        { (gallery && newGallery === "") && (
            gallery.map((data) => (
            <Zoom key={data.id}>
                <img 
                src={data.img} 
                alt={data.name} 
                className="gallery-img animate__animated animate__zoomIn" />
            </Zoom>
            ))
         ) }
        
        </div>
    </section>
    </main>
    </>
  );
}

export default GalleryPage;
