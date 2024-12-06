"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface Props {
  containerStyles:string;
  btnStyles:string;
  iconStyles?:string;
}

export const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}:Props) => {
  const swiper = useSwiper()
  return <div className={containerStyles}>
    <button className={btnStyles} onClick={() => swiper.slidePrev()}>
      <PiCaretLeftBold className={iconStyles} />
    </button>
    <button className={btnStyles} onClick={() => swiper.slideNext()}>
      <PiCaretRightBold className={iconStyles} />
    </button>
  </div>;
};
