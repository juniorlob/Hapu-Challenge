import ReactMarkdown from 'react-markdown';
import Container from '../Container';
import { FeaturesSectionProps } from './FeatureSection.interface';
import {
    FeatureSectionBtn,
    FeatureSectionWrapper,
} from './FeatureSection.style';

const FeatureSection = ({
    title,
    paragraph,
    cta,
    img,
    imgOrder,
    columns,
}: FeaturesSectionProps): JSX.Element => (
    <Container maxW={{ xs: 18, sm: 25, md: 40, lg: 47, xl: 55 }}>
        <FeatureSectionWrapper
            columns={columns}
            imgOrder={imgOrder}
            hasImg={img !== undefined}
        >
            <div>
                <ReactMarkdown components={{ p: 'h2' }}>{title}</ReactMarkdown>

                <ReactMarkdown>{paragraph}</ReactMarkdown>
                <FeatureSectionBtn columns={columns} link to={cta.link}>
                    {cta.text}
                </FeatureSectionBtn>
            </div>
            {img && <img src={img.url} alt={img.alt} />}
        </FeatureSectionWrapper>
    </Container>
);

export default FeatureSection;
