import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useAppSelector } from '@/storage/hooks';

const Home = () => {

    const router = useRouter();
    const token = useAppSelector(state => state.data.token);

    useEffect(() => {
        if (!token) {
            router.push('/')
        }
    })

    return (
        <h1>Home</h1>
    )
}
export default Home