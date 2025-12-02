import css from './Review.module.css';

export const Review = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`${css.modal} ${isOpen ? css.show : ''}`}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>
        <h2 className={css.title}>
          leave a review about{' '}
          <span className={css.highlight}>our chocolate</span>
        </h2>
        <form className={css.formContainer}>
          <input className={css.input} name="name" placeholder="Name" />
          <input
            className={css.input}
            name="email"
            placeholder="Enter your email"
          />
          <input
            className={css.input}
            name="phone"
            placeholder="Phone number"
          />
          <textarea
            className={css.textarea}
            name="review"
            placeholder="Enter text"
          ></textarea>
          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
