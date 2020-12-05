import { React, useState } from 'react';

//styles
import '../Styles/Carousel.scss';

//svgs
import { ReactComponent as Right } from '../Assets/right-arrow.svg';
import { ReactComponent as Left } from '../Assets/left-arrow.svg';

function Carousel() {
  const [update, setUpdate] = useState(2);

  let decrement = update - 1;
  let increment = update + 1;

  return (
    <section className="carousel-container">
      <div className="prev">
        <img
          src={`https://picsum.photos/500/700?random=${decrement}`}
          alt="model-1"
        />
      </div>
      <div className="next">
        <img
          src={`https://picsum.photos/500/700?random=${increment}`}
          alt="model-1"
        />
      </div>
      <div className="current">
        <Left className="left" onClick={LeftFn} />
        <img
          src={`https://picsum.photos/500/700?random=${update}`}
          alt="model-1"
        />
        <Right className="right" onClick={RightFn} />
      </div>
    </section>
  );

  function RightFn() {
    setUpdate(update - 1);
  }
  function LeftFn() {
    setUpdate(update + 1);
  }
}

export default Carousel;
