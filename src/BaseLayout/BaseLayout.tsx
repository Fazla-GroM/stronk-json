import { ParentComponent } from 'solid-js'

import { Box } from '~/fancy-ui-solid'

import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

const BaseLayout: ParentComponent = props => {
    return (
        <Box width="full" height="full" display="flex" flexDirection="column">
            <Header />
            <Box width="full" height="full" display="flex" overflow="hidden">
                <Sidebar />
                <Box as="main" width="full" height="full" overflow="hidden">
                    {props.children}
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}

export { BaseLayout }
