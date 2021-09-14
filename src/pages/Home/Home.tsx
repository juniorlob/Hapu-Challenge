import { HomeProps } from './Home.interface'

const Home = ({ currentExample }: HomeProps): JSX.Element => (
    <div>{currentExample}</div>
)

export default Home
