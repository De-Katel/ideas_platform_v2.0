import { useForm, SubmitHandler } from "react-hook-form";

import styles from './registration.module.scss'

interface IRegFormData {
    userName: string
    password: string
    email:string

}

const RegistrationForm = () => {

    const { register, formState: { isValid }, reset, handleSubmit } = useForm<IRegFormData>({ mode: 'onBlur' });

    const fetchToRegistrationAccount: SubmitHandler<IRegFormData> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className={styles.registration}>
            <h1>Зарегистрироваться</h1>
            <form onSubmit={handleSubmit(fetchToRegistrationAccount)}>
                <input placeholder='Имя пользователя' {...register("userName", { required: true })} />
                <input placeholder='Пароль' {...register("password", { required: true })} />
                <input type={'email'} placeholder='email' {...register("email", { required: true })} />
                <input type="submit" value={'Зарегистрироваться'} disabled={!isValid} />
            </form>
        </div>
    )
}

export default RegistrationForm 