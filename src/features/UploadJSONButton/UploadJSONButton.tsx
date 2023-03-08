import { IconButton } from '~/fancy-ui-solid'
import { UploadFileIcon } from '~/Icons'

const UploadJSONButton = () => {
    return (
        <IconButton size="md" variant="plain" color="neutral">
            <UploadFileIcon size="md" />
        </IconButton>
    )
}

export { UploadJSONButton }
