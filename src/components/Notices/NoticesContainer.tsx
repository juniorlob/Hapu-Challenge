import Notices from './Notices';

const NoticesContainer = (): JSX.Element => {
    const items = [
        {
            img: {
                urlImg: '/sarah-picture.png',
                alt: `Sarah's`,
            },
            noticeLink: {
                text: 'Sarah’s day care available now in North Sydney',
                link: '#',
            },
            available: 'Wednesday, Thursday, Friday - 7:30 - 5:30',
        },
    ];
    const randomContent = Math.floor(Math.random() * items.length);
    return <Notices noticesItems={items[randomContent]} />;
};

export default NoticesContainer;
