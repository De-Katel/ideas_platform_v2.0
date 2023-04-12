import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useAppSelector } from '@/storage/hooks'

import Authentication from "@/components/authentication/authentication"

const AuthenticationPage = (): React.ReactElement => {

    const router = useRouter();
    const token = useAppSelector(state => state.data.token);

    useEffect(() => {
        if (token) {
            router.push('/home')
        }
    })

    return (
        <Authentication />
    )
}

export default AuthenticationPage 