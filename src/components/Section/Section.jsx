import s from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
};
