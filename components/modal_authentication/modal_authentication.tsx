import { Button, Modal } from 'antd';
import { useAppSelector, useAppDispatch } from '../../storage/hooks'
import AuthForm from "../auth/auth"
import RegistrationForm from '../registration/registration'
import { setIsModal } from '@/storage/slises/dataSlise'
import { useState } from "react"

const ModalAuthentication = () => {
    const isModal = useAppSelector((state) => state.data.isModal);
    const dispatch = useAppDispatch();

    const [isRegistration, setIsRegistration] = useState(false);
    return (
        <Modal open={isModal}
            onOk={() => dispatch(setIsModal())}
            onCancel={() => dispatch(setIsModal())}
            footer={null}
        >
            {isRegistration
                ?
                <RegistrationForm />
                :
                <AuthForm />
            }
        </Modal>
        // null
    )

}

export default ModalAuthentication