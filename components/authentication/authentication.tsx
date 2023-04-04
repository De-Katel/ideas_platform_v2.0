import AuthForm from "../auth/auth"
import RegistrationForm from '../registration/registration'
import { useState } from "react"

import styles from './authentication.module.scss'

const Authentication = () => {

    const [isRegistration, setIsRegistration] = useState(false);
    return (
        < div className={styles.authentication}>
            {isRegistration
                ? < >
                    <RegistrationForm />
                    <button onClick={() => setIsRegistration(false)} >назад</button> </>
                : < >
                    <AuthForm />
                    <span>или</span>
                    <button onClick={() => setIsRegistration(true)} >Зарегестрироваться</button> </>
            }

        </div>
    )

}

export default Authentication