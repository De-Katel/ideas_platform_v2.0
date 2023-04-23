import { useForm, SubmitHandler } from "react-hook-form";

import styles from './registration.module.scss';

interface IRegFormData {
    nick_name: string
    email: string
    password: string

}

const RegistrationForm = (): React.ReactElement => {

    const { register, formState: { isValid }, reset, handleSubmit } = useForm<IRegFormData>({ mode: 'onBlur' });

    const fetchToRegistrationAccount: SubmitHandler<IRegFormData> = (data) => {

        fetch('http://localhost:8000/api/v1/auth/users/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
        reset();
    }

    return (
        <div className={styles.registration}>
            <h1>Зарегистрироваться</h1>
            <form onSubmit={handleSubmit(fetchToRegistrationAccount)}>
                <input placeholder='Имя пользователя' {...register("nick_name", { required: true })} />
                <input type='password' placeholder='Пароль' {...register("password", { required: true })} />
                <input type='email' placeholder='email' {...register("email", { required: true })} />
                <input type="submit" value={'Зарегистрироваться'} disabled={!isValid} />
            </form>
        </div>
    )
}

export default RegistrationForm 