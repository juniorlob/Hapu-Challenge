export interface HomeProps {
    storeNews: any;
    handleCreateNews: any;
}

export interface StoreNewsProps {
    loaded: boolean;
    currentNews: any;
    currentPage: 1;
    error: Record<string, unknown>;
    success: string;
}

export interface HomeContainerProps {
    storeNews: any;
    createNewsRequest: any;
}
