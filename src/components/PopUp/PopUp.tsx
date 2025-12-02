import css from './PopUp.module.css';

export const PopUp = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`${css.modal} ${isOpen ? css.show : ''}`}>
      <div className={css.modalContent}>
        <div className={css.imageContainer}>
          <button className={css.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className={css.formContainer}>
          <h2 className={css.title}>
            Explore our <span className={css.highlight}>new chocolate</span>{' '}
            first!
          </h2>
          <form className={css.flexbox}>
            <input
              className={css.input}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <button className={css.submitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
