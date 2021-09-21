export interface HomeProps {
    currentExample: string;
}

export interface StoreExampleProps {
    loaded: boolean;
    currentExample: string;
    currentExamples?: Array<number | string>;
    total: number;
    pages: number;
    currentPage: 1;
    error: Record<string, unknown>;
    success: string;
}

export interface HomeContainerProps {
    storeExample: StoreExampleProps;
    exampleRequest: any;
}
