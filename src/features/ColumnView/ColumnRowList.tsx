import { ParentComponent } from 'solid-js'

import { Box } from '~/fancy-ui-solid'

type TColumnRowList = ParentComponent

const ColumnRowList: TColumnRowList = props => {
    return (
        <Box as="ul" listStyle="none" width="full" height="full" overflowX="hidden" overflowY="auto">
            {props.children}
        </Box>
    )
}

export { ColumnRowList }
