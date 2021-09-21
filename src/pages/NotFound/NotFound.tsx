import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { HapuIcon } from '../../components/Icons/HapuIcon';
import { NotFoundWrapper } from './NotFound.style';

const NotFound = (): JSX.Element => (
    <NotFoundWrapper>
        <p>404. That’s an error.</p>

        <Link to="/">
            <HapuIcon h={60} w="auto" color="primary" />
        </Link>
        <Button size="md">to home</Button>
    </NotFoundWrapper>
);

export default NotFound;
