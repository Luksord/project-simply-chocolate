import css from './Comments.module.css';
import VictoriaDobrzhanska from '../../assets/images/Victoria-Dobrzhanska-avatar.png';
import NataliaSus from '../../assets/images/Natalia-Sus-avatar.png';
import DaniloNottingham from '../../assets/images/Danilo-Nottingham-avatar.png';
import IrinaTydnyuk from '../../assets/images/Irina-Tydnyuk-avatar.png';

interface CommentProps {
  avatar: string;
  name: string;
  comment: string;
}

const comments: CommentProps[] = [
  {
    avatar: VictoriaDobrzhanska,
    name: 'Victoria Dobrzhanska',
    comment:
      'I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.',
  },
  {
    avatar: NataliaSus,
    name: 'Natalia Sus',
    comment:
      'The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and just right on the sweetness level.',
  },
  {
    avatar: DaniloNottingham,
    name: 'Danilo Nottingham',
    comment:
      'This is delicious. It so rich and flavorful you don’t need to use as many. I love topping an apple with almond butter and these chips for a snack.',
  },
  {
    avatar: IrinaTydnyuk,
    name: 'Irina Tydnyuk',
    comment:
      'This is simply the best chocolate around, and I’m just thrilled to support a local company Best local chocolate – world class.',
  },
];

export const Comments = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        <span className={css.highlight}>Chocolate</span> is loved
      </h2>
      <ul className={css.commentsList}>
        {comments.map(({ avatar, name, comment }, index) => (
          <li key={index} className={css.listItem}>
            <div className={css.commentContainer}>
              <picture>
                <img
                  src={avatar}
                  alt={`${name}'s avatar`}
                  className={css.avatar}
                  loading="lazy"
                />
              </picture>
              <h3 className={css.name}>{name}</h3>
              <p className={css.comment}>{comment}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className={css.button}>Buy now</button>
    </section>
  );
};
