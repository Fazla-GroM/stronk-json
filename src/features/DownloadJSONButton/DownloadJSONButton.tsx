import { IconButton } from '~/fancy-ui-solid'
import { DownloadFileIcon } from '~/Icons'

const DownloadJSONButton = () => {
    return (
        <IconButton size="md" variant="plain" color="neutral">
            <DownloadFileIcon size="md" />
        </IconButton>
    )
}

export { DownloadJSONButton }
