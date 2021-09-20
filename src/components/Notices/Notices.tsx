import Button from '../Button'
import { NoticesItemsProps } from './Notices.interface'
import { Notice, NoticesWrapper } from './Notices.style'

const Notices = ({ noticesItems }: NoticesItemsProps): JSX.Element => (
    <NoticesWrapper>
        {noticesItems.map((n, i) => (
            <Notice key={i}>
                <img src={n.img.urlImg} alt={n.img.alt} />
                <p>
                    <Button link href={n.noticeLink.link}>
                        {n.noticeLink.text}
                    </Button>
                    <span>{n.available}</span>
                </p>
            </Notice>
        ))}
    </NoticesWrapper>
)
export default Notices
