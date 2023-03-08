import { Box } from '~/fancy-ui-solid'
import { DownloadJSONButton } from '~/features/DownloadJSONButton'
import { UploadJSONButton } from '~/features/UploadJSONButton'

const SidebarAdditionalActions = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="xs"
            paddingTop="xs"
            borderTopColor="divider"
            borderTopStyle="solid"
            borderTopWidth="sm"
        >
            <UploadJSONButton />
            <DownloadJSONButton />
        </Box>
    )
}

export { SidebarAdditionalActions }
