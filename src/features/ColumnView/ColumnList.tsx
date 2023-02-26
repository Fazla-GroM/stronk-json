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
            style={{
                display: 'grid',
                'grid-auto-flow': 'column',
                'grid-auto-columns': '320px'
            }}
        >
            {props.children}
        </Box>
    )
}

export { ColumnList }
