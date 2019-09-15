import React from 'react'

import FPageTitle from './title'

import { Content } from './styles'

const FContent = ({ children }) => {
    return <Content>{children}</Content>
}

export default FContent

export { FPageTitle }