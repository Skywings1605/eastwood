import React from 'react';
import"./Slides.css"
import banner from "./Images/banner.png"
import banner1 from "./Images/banner2.png"
import banner2 from "./Images/banner3.png"
import banner3 from "./Images/banner4.png"
import gate from "./Images/gate.png"
// import plot from "./Images/plot.png"
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Slides() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleIndicators"
      data-mdb-slide-to="3"
      aria-label="Slide 1"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="3000">
      <img src={banner} class="d-block w-100" alt="Wild Landscape"/>
    </div>
    <div class="carousel-item" data-mdb-interval="3000">
      <img src={banner1} class="d-block w-100" alt="Camera"/>
    </div>
    <div class="carousel-item" data-mdb-interval="3000">
      <img src={banner2} class="d-block w-100" alt="Exotic Fruits"/>
    </div>
    <div class="carousel-item" data-mdb-interval="3000">
      <img src={banner3} class="d-block w-100" alt="Camera"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="prev">
  <img style={{width: "30px"}} src={"https://cdn-icons-png.flaticon.com/512/2985/2985162.png"} alt="" />
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleIndicators" data-mdb-slide="next">
  <img style={{width: "30px"}} src={"https://cdn-icons-png.flaticon.com/512/1549/1549454.png"} alt="" />
  </button>
</div>
  );
}
