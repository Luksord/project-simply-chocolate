import css from './HowItsMade.module.css';

export const HowItsMade = () => {
  return (
    <div className={css.section}>
      <h2 className={css.title}>
        How it's <span className={css.highlight}>made</span> ?
      </h2>
      <div className={css.flexbox}>
        <iframe
          className={css.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oWjlmi9bbQA"
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className={css.container}>
          <h3 className={css.text}>
            Try our chocolates today and discover the perfect balance of flavor
          </h3>
          <ul className={css.stepsList}>
            <li className={css.listItem}>
              Heat the milk in a saucepan without bringing it to a boil. Add
              sugar and cocoa powder.
            </li>
            <li className={css.listItem}>
              At the same time, prepare a water bath. Melt the butter on it.
            </li>
            <li className={css.listItem}>
              "Mix" the milk mixture and already liquid butter. Mix thoroughly
              with a silicone spatula so that the mass becomes uniform and
              silky.
            </li>
            <li className={css.listItem}>
              Heat the mixture over low heat, letting it barely boil.
            </li>
            <li className={css.listItem}>
              Pour the chocolate into special containers (can be replaced with
              ice molds). Allow to cool and harden.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
