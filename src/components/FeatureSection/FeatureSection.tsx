import ReactMarkdown from 'react-markdown'
import { FeaturesSectionProps } from './FeatureSection.interface'
import {
    FeatureContainer,
    FeatureSectionBtn,
    FeatureSectionWrapper,
} from './FeatureSection.style'

const FeatureSection = ({
    title,
    paragraph,
    cta,
    img,
    imgOrder,
    columns,
}: FeaturesSectionProps): JSX.Element => (
    <FeatureContainer>
        <FeatureSectionWrapper
            columns={columns}
            imgOrder={imgOrder}
            hasImg={img !== undefined}
        >
            <div>
                <h2>
                    <ReactMarkdown>{title}</ReactMarkdown>
                </h2>
                <ReactMarkdown>{paragraph}</ReactMarkdown>
                <FeatureSectionBtn columns={columns} link to={cta.link}>
                    {cta.text}
                </FeatureSectionBtn>
            </div>
            {img && <img src={img.url} alt={img.alt} />}
        </FeatureSectionWrapper>
    </FeatureContainer>
)

export default FeatureSection
