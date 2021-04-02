import styles from './Header.module.scss'
import {ReactComponent as CrownSvg} from "src/assets/crown.svg"
import {ReactComponent as BagSvg} from "src/assets/shopping-bag.svg"
import { Link, useHistory } from 'react-router-dom'
const Header=(props)=>{
    const history=useHistory()
    const handleClick=()=>{
        history.push("/home")
    }
    return(
        <header className={styles.container}>
            <CrownSvg className="u-cursor--pointer" onClick={handleClick}/>
            <nav className={styles.nav}>
             <Link to="shop" className={styles.item}>Shop</Link>
             <Link to="contacts" className={styles.item}>Contacts</Link>
             <Link to="auth" className={styles.item}>Sign in</Link>
             <span className={styles.item}>
                 <BagSvg className={styles.bag}/>
             </span>
            </nav>
            
        </header>

    )
}
export default Header;
