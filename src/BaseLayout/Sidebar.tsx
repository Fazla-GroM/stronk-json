import { Box } from '~/fancy-ui-solid'

import { SidebarAdditionalActions } from './SidebarAdditionalActions'
import { SidebarNav } from './SidebarNav'

const Sidebar = () => {
    return (
        <Box
            backgroundColor="surface"
            width="xl7"
            height="full"
            borderRightColor="divider"
            borderRightStyle="solid"
            borderRightWidth="sm"
            paddingY="xs"
            flexShrink="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
        >
            <SidebarNav />
            <SidebarAdditionalActions />
        </Box>
    )
}

export { Sidebar }
