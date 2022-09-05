import React from 'react';
import"./Slides.css"
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function Slides() {
  return (
    <MDBCarousel showIndicators keyboard showControls fade className="ms-1" carousel-dark>
      <MDBCarouselItem
        className='w-100 d-block size'
        itemId={1}
        src='https://www.ifbeastwood.com/wp-content/uploads/2021/12/001-1.jpg'
        alt='...'
        data-mdb-interval="2000"
      >
        <h1 className="head">Eastwood, because lands are forever</h1>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.ifbeastwood.com/wp-content/uploads/2021/12/002-1.jpg'
        alt='...'
      >
        <h1 className="head">Nested in the urban Hoskote, Eastwood is a prestigious plotted development Project</h1>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.ifbeastwood.com/wp-content/uploads/2021/12/003-1.jpg'
        alt='...'
      >
        <h1 className="head">Away from the city,Eastwood is the new urban oasis, with a 200 acre reserve forest.</h1>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.ifbeastwood.com/wp-content/uploads/2021/12/001-1.jpg'
        alt='...'
      >
        <h1 className="head">Enjoy the bliss of populated calmness with 300+ family neighborhood</h1>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.ifbeastwood.com/wp-content/uploads/2021/12/003-1.jpg'
        alt='...'
      >
        <h1 className="head">Touted to be one of the planned corporations of Bengaluru, the future Hoskote is an investor's delight and a resident's dream.</h1>
      </MDBCarouselItem>
      <MDBIcon fas icon="angle-right" />
    </MDBCarousel>
  );
}