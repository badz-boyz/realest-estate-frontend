import styles from './EmblaCarouselButtons.module.css';
import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback(() => {
    setPrevBtnDisabled(!emblaApi?.canScrollPrev());
    setNextBtnDisabled(!emblaApi?.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ onClick, disabled }) => (
  <button
    className={`${styles.embla__button} ${styles['embla__button--prev']}`} // Note the syntax for hyphenated class names
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    <svg className={styles.embla__button__svg} viewBox="0 0 532 532">
      {/* SVG path */}
    </svg>
  </button>
);

export const NextButton = ({ onClick, disabled }) => (
  <button
    className={`${styles.embla__button} ${styles['embla__button--next']}`} // Note the syntax for hyphenated class names
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    <svg className={styles.embla__button__svg} viewBox="0 0 532 532">
      {/* SVG path */}
    </svg>
  </button>
);

