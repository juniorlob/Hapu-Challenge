import Button from '../Button';
import Container from '../Container';
import { NoticesItemsProps } from './Notices.interface';
import { Notice, NoticesWrapper } from './Notices.style';

const Notices = ({ noticesItems }: NoticesItemsProps): JSX.Element => {
    const nI = noticesItems;

    return (
        <NoticesWrapper>
            <Container maxW={{ xs: 20, sm: 30, md: 48, lg: 62, xl: 60 }}>
                <Notice>
                    <img
                        width="56"
                        height="56"
                        src={nI.img.urlImg}
                        alt={nI.img.alt}
                    />
                    <div>
                        <Button link to={nI.noticeLink.link}>
                            {nI.noticeLink.text}
                        </Button>
                        <span>{nI.available}</span>
                    </div>
                </Notice>
            </Container>
        </NoticesWrapper>
    );
};
export default Notices;
