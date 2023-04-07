import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from '../../storage/hooks'
import { fetchUserLogin } from '../../storage/slises/dataSlise'

import styles from './auht.module.scss'

interface IAuhtFormData {
    email: string
    password: string

}

const AuthForm = (): React.ReactElement => {

    const dispatch = useAppDispatch();

    const { register, formState: { isValid }, reset, handleSubmit } = useForm<IAuhtFormData>({ mode: 'onBlur' });

    const fetchToUserAuth: SubmitHandler<IAuhtFormData> = (data) => {
        dispatch(fetchUserLogin([data.password, data.email]))
        // reset();
        console.log(data);

    }

    return (
        <div className={styles.auht}>
            <h1 className={styles.qwe}>Войти</h1>
            <form onSubmit={handleSubmit(fetchToUserAuth)}>
                <input type='email' placeholder='Email' {...register("email", { required: true })} />
                <input type='password' placeholder='Пароль' {...register("password", { required: true })} />
                <input type="submit" value={'Продолжить'} disabled={!isValid} />
            </form>
        </div>
    )
}

export default AuthForm 