import { useForm, SubmitHandler } from "react-hook-form";

import styles from './auht.module.scss'

interface IAuhtFormData {
    userName: string
    password: string

}

const AuthForm = () => {
    const { register, formState: { isValid }, reset, handleSubmit } = useForm<IAuhtFormData>({ mode: 'onBlur' });

    const fetchToUserAuth: SubmitHandler<IAuhtFormData> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className={styles.auht}>
            <h1 className={styles.qwe}>Войти</h1>
            <form onSubmit={handleSubmit(fetchToUserAuth)}>
                <input placeholder='Имя пользователя' {...register("userName", { required: true })} />
                <input placeholder='Пароль' {...register("password", { required: true })} />
                <input type="submit" value={'Продолжить'} disabled={!isValid} />
            </form>
        </div>
    )
}

export default AuthForm 