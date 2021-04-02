//COMPONENT
import SignIn from "./Components/sign-in/SignIn.components"
import SignUp from "./Components/sign-up/SignUp.component"
//STYLES
import styles from "./Auth.module.scss"
const Auth = () => {
    return (
        <div className={styles.container}>
            <SignIn/>
            <SignUp/>
            
        </div>
    )
}

export default Auth
