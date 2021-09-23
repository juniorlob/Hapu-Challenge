import { render, screen } from '@testing-library/react';

import Button from './Button';

const MockedComponent = () => <div>MockedChild</div>;

describe('<Button /> render', () => {
    it('Should render correctly', () => {
        render(
            <Button>
                <MockedComponent />
            </Button>
        );
        expect(screen.getByText('MockedChild')).toBeInTheDocument();
    });
});
