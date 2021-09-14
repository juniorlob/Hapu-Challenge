import { VoidFunctionComponent } from 'react'

export type HomeProps = {
    currentExample: string
}

type StoreExampleProps = {
    loaded: boolean
    currentExample: string
    currentExamples?: Array<number | string>
    total: number
    pages: number
    currentPage: 1
    error: Record<string, unknown>
    success: string
}

export type HomeContainerProps = {
    storeExample: StoreExampleProps
    exampleRequest: any
}
