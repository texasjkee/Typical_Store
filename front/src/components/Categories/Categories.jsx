import { Link } from "react-router-dom";
import styles from "../../styles/Categories.module.css";

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount).slice(1, 6);

  return (
    <section className={StyleSheet.section}>
      <h2>{title}</h2>
    
    <div className={styles.list}>
      {list.map(({id, name, image}) => (
        <Link to={`/categories/${id}`} key={id} className={styles.item}>
        <div 
        className={styles.image}
        style={{backgroundImage: `url(${image})`}}
        />
         <div></div> 
        </Link>
      ))}
    </div>
    </section>
  );
};

export default Categories;
