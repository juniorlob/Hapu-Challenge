import Hero from '../../components/Hero'
import { HomeProps } from './Home.interface'

const Home = ({ currentExample }: HomeProps): JSX.Element => {
    console.log(currentExample)
    return <Hero />
}

export default Home
