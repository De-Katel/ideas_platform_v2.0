import { useRouter } from 'next/router';
import { useAppSelector } from '@/storage/hooks';

const Home = () => {

    const token = useAppSelector(state => state.data.token);

    return (
        token ? <h1>Home</h1> : <span>...loading</span>
    )
}
export default Home