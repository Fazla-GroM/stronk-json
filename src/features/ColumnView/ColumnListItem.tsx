import { ParentComponent } from 'solid-js'

import { Box } from '~/fancy-ui-solid'

type TColumnListItem = ParentComponent

const ColumnListItem: TColumnListItem = props => {
    return (
        <Box
            as="li"
            borderRightStyle="solid"
            borderRightWidth="sm"
            borderRightColor="divider"
            width="xl22"
            overflow="hidden"
        >
            {props.children}
        </Box>
    )
}

export { ColumnListItem }
