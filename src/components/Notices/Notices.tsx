import Button from '../Button'
import Container from '../Container'
import { NoticesItemsProps } from './Notices.interface'
import { Notice, NoticesWrapper } from './Notices.style'

const Notices = ({ noticesItems }: NoticesItemsProps): JSX.Element => {
    const nI = noticesItems

    return (
        <NoticesWrapper>
            <Container maxW={{ xs: 10, sm: 10, md: 10, lg: 40, xl: 60 }}>
                <Notice>
                    <img src={nI.img.urlImg} alt={nI.img.alt} />
                    <p>
                        <Button link to={nI.noticeLink.link}>
                            {nI.noticeLink.text}
                        </Button>
                        <span>{nI.available}</span>
                    </p>
                </Notice>
            </Container>
        </NoticesWrapper>
    )
}
export default Notices
