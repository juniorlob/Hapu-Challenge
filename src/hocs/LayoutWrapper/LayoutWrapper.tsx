import { cloneElement } from 'react'
import { LayoutWrapperProps } from './LayoutWrapper.interface'

import { LayoutWrapperContainer } from './LayoutWrapper.style'

/* NOTE
	This Component mount the general page layout like Header, Footer and wraps the content of the body
	Deals with the general loading, modals and some general navigation functions
*/

const LayoutWrapper = ({ children }: LayoutWrapperProps): JSX.Element => (
    // Some logic

    // High Order Component that wraps the page layout
    <LayoutWrapperContainer>{cloneElement(children)}</LayoutWrapperContainer>
)
export default LayoutWrapper
