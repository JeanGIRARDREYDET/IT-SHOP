import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import React, { Component } from "react";
import Slider from "react-slick";
// simport Styles from 'Carousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';

type Props = {
  product:IProduct,
  slides : number,
  autoplay: boolean,
  arrows:boolean
}
const Carrousel = ({product,slides,autoplay}:Props)=>  {
    // Définition du chemin du produit
    const image_url="/src/assets/products/"+product._id+"/"

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
    
       
        <Slider {...settings}>

        {
          //src/assets/products/${product._id}/
        product.images.map((image:string, index: number) => (
   
            <img  key={index} src={image_url+image} alt={product.name+ "_" + index} style={{height:"50%",width:"50%" }}/>
       
         )) }

        </Slider>
      
    );
  }
export default Carrousel