import { FeatureContainerProps } from './FeatureSection.interface';
import FeatureSection from './FeatureSection';

const FeaturesSectionContainer = ({
    ...props
}: FeatureContainerProps): JSX.Element => <FeatureSection {...props} />;

export default FeaturesSectionContainer;
