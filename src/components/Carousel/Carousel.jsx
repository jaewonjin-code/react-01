import { useState } from "react";
import { galleryImages } from "./imgData";
import style from "./Carousel.module.css";

export default function Carousel() {
  // let index = 0;
  const [index, setIndex] = useState(0);

  function handleNext() {
    // index += 1;
    // setIndex(index + 1);

    // index는 0부터 시작하기 때문
    if (index === galleryImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  }

  function handlePrevious() {
    if (index === 0) {
      setIndex(galleryImages.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log(index);
  }

  let slide = galleryImages[index];

  return (
    <section className={style.wrapper}>
      <h2>
        <i>{slide.name}</i> by {slide.artist}
      </h2>
      <h3>
        ({index + 1} of {galleryImages.length})
        <img src={slide.url} alt={slide.alt} />
        <p>{slide.description}</p>
      </h3>
      <p>
        <button className={style.button} onClick={handlePrevious}>
          Previous
        </button>
        <button className={style.button} onClick={handleNext}>
          Next
        </button>
      </p>
    </section>
  );
}
