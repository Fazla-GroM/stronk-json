import { Box, IconButton } from '~/fancy-ui-solid'
import { DownloadFileIcon, UploadFileIcon } from '~/Icons'

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
            <IconButton size="md" variant="plain" color="neutral">
                <UploadFileIcon size="md" />
            </IconButton>
            <IconButton size="md" variant="plain" color="neutral">
                <DownloadFileIcon size="md" />
            </IconButton>
        </Box>
    )
}

export { SidebarAdditionalActions }
