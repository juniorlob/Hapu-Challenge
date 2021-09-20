import ReactMarkdown from 'react-markdown'
import { FeatureContainerProps } from './FeatureSection.interface'
import { FpWrapper } from './FeatureSection.style'

const FeatureSection = ({
    title,
    paragraph,
    cta,
    img,
}: FeatureContainerProps): JSX.Element => (
    <FpWrapper>
        <h2>{title}</h2>
        <ReactMarkdown>{paragraph}</ReactMarkdown>
        <a href={cta.link}>{cta.text}</a>
        <img src={img?.url} alt={img?.alt} />
    </FpWrapper>
)

export default FeatureSection
