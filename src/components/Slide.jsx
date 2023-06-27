import React, { useEffect } from "react";
import "./slide.css";
import "./slide.js";
import img1 from "../components/img/img1.jpg";
import img2 from "../components/img/img2.jpg";
import img3 from "../components/img/img3.jpg";

const Slide = () => {
  const slide = (toIndex) => {
    const carouselItemArray = Array.from(
      document.querySelectorAll(".carousel_item")
    );
    const activeCarouselItem = document.querySelector(".carousel_item__active");

    //check if toIndex exceeds the number of carousel items
    // in this example carousel items have only three so array index is 0,1,2

    if (toIndex >= carouselItemArray.length) {
      toIndex = 0;
    }

    const newActiveItem = carouselItemArray[toIndex];

    //start transition
    newActiveItem.classList.add("carousel_item__pos_next");
    setTimeout(() => {
      newActiveItem.classList.add("carousel_item__next");
      activeCarouselItem.classList.add("carousel_item__next");
    }, 20);

    //remove all transition class and switch active
    newActiveItem.addEventListener("transitionend", () => {
        activeCarouselItem.className = "carousel_item"
        newActiveItem.className = "carousel_item carousel_item__active"
    },{
        once:true
    })
  };

  const getItemActiveIndex = () => {
    const carouselItemArray = Array.from(
      document.querySelectorAll(".carousel_item")
    );
    const activeCarouselItem = document.querySelector(".carousel_item__active");
    const activeCarouselItemIndex =
      carouselItemArray.indexOf(activeCarouselItem);
    return activeCarouselItemIndex;
  };

  useEffect(() => {
    getItemActiveIndex();
  }, []);

  const autoSlide = () => {
    setInterval(() => {
      slide(getItemActiveIndex() + 1);
    }, 3000);
  };

  useEffect(() => {
    autoSlide()
  })

  return (
    <div className="carousel_container">
      <div className="carousel carousel__fade">
        <div className="carousel_inner">
          <div className="carousel_item carousel_item__active">
            <img src={img1} alt="" className="carousel_img" />
          </div>
          <div className="carousel_item">
            <img src={img2} alt="" className="carousel_img" />
          </div>
          <div className="carousel_item">
            <img src={img3} alt="" className="carousel_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
