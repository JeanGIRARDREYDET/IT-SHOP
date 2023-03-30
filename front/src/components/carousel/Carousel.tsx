import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import React, { Component } from "react";
import Style from './Carousel.module.css'

import Slider from "react-slick";
// simport Styles from 'Carousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';

type Props = {
  productCarrousel:IProduct,
  slides : number,
  autoplay: boolean,
  arrows:boolean
} 
const Carrousel = ({productCarrousel,slides,autoplay}:Props)=>  {
    // Définition du chemin du produit
    const image_url="/src/assets/products/"+productCarrousel._id+"/"

    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: slides,
      slidesToScroll: 1,
      autoplay:autoplay,
      autoplaySpeed: 1000,
      centerMode: true,
      vertical: false,
      arrows: false,
      pauseOnFocus : true,
      swipe:false
    }; 
    return ( 
        <Slider className={Style.slider}   {...settings}>
        {
          //src/assets/products/${product._id}/
          productCarrousel && productCarrousel.images && productCarrousel.images.map((image:string, index: number) => (
            <img  key={"CarImg_"+index} src={image_url+image} alt={productCarrousel.name+ "_" + index} className={Style.ImageCaroussel}/>
         )) }
        </Slider>
    );
  }
export default Carrousel