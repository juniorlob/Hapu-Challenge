type NoticeImg = {
    urlImg: string
    alt: string
}

type NoticeLink = {
    text: string
    link: string
}

interface NoticesItemProps {
    img: NoticeImg
    noticeLink: NoticeLink
    available: string
}

export interface NoticesItemsProps {
    noticesItems: NoticesItemProps
}
