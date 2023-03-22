import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import React, { Component } from "react";
import Slider from "react-slick";
import Styles from 'Carousel.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IProduct } from '../../types/product';

type Props = {
  product:IProduct,
  slides : number,
  autoplay: boolean
}
const Carrousel = ({product,slides,autoplay}:Props)=>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: slides,
      slidesToScroll: 1,
      autoplay:autoplay,
      autoplaySpeed: 1000,
      centerMode: true,
      vertical: false
     
    };
    const image_url="/src/assets/products/"+product._id+"/"
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>

        {
          //src/assets/products/${product._id}/
        product.images.map((image:string, index: number) => (
         <div key={index}>
            <img src={image_url+image} alt={product.name+ "_" + index} />
          </div>
         )) }
        </Slider>
      </div>
    );
  }
export default Carrousel