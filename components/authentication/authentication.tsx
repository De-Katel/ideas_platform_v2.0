import AuthForm from "../auth/auth"
import RegistrationForm from '../registration/registration'
import { useState } from "react"

import styles from './authentication.module.scss'

const Authentication = (): React.ReactElement => {

    const [isRegistration, setIsRegistration] = useState(false);

    const handleClick = (): void => setIsRegistration((prev) => !prev)

    return (
        < div className={styles.authentication}>
            {isRegistration
                ?
                < >
                    <RegistrationForm />
                    <button onClick={handleClick} >назад</button>
                </>
                :
                < >
                    <AuthForm />
                    <span>или</span>
                    <button onClick={handleClick} >Зарегестрироваться</button>
                </>
            }

        </div >
    )

}

export default Authentication