import { ParentComponent } from 'solid-js'

import { Box } from '~/fancy-ui-solid'

type TColumnList = ParentComponent

const ColumnList: TColumnList = props => {
    return (
        <Box
            as="ul"
            listStyle="none"
            width="full"
            height="full"
            overflowX="auto"
            overflowY="hidden"
            display="grid"
            gridAutoFlow="column"
            gridAutoColumns="max-content"
        >
            {props.children}
        </Box>
    )
}

export { ColumnList }
