import { useState, useRef, useEffect } from 'react';
import css from './Comments.module.css';
import { Review } from '../../components/Review/Review';
import { comments } from '../../utils/commentsData';

export const Comments = () => {
  const [isReviewOpen, setReviewOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const list = listRef.current;
    const item = list.children[activeIndex] as HTMLElement;
    if (item) {
      const offset =
        item.offsetLeft - (list.clientWidth / 2 - item.clientWidth / 2);
      list.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <section className={css.section}>
      <h2 className={css.title}>
        <span className={css.highlight}>Chocolate</span> is loved
      </h2>

      <ul className={css.commentsList} ref={listRef}>
        {comments.map(({ avatar, name, comment }, index) => (
          <li key={index} className={css.listItem}>
            <div
              className={`${css.commentContainer} ${
                index === activeIndex ? css.active : ''
              }`}
            >
              <img
                src={avatar}
                alt={`${name}'s avatar`}
                className={css.avatar}
                loading="lazy"
              />
              <h3 className={css.name}>{name}</h3>
              <p className={css.comment}>{comment}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={css.sliderContainer}>
        {comments.map((_, index) => (
          <button
            key={index}
            className={`${css.slider} ${
              activeIndex === index ? css.active : ''
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <button className={css.button} onClick={() => setReviewOpen(true)}>
        Leave a review
      </button>
      <Review isOpen={isReviewOpen} onClose={() => setReviewOpen(false)} />
    </section>
  );
};
