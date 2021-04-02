import styles from './CategoryItem.module.scss'
const CategoryItem=(props)=>{
    const{category}=props
    return(
        <li className={styles.category}>
                  <div className={styles.category__wrapper}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${category.imageUrl})` }}
                    />

                    <div className={styles.content}>
                      <div className={styles.title}>{category.title}</div>
                      <div className="u-uppercase">shop now</div>
                    </div>
                  </div>
                </li>
    )
}
export default CategoryItem;