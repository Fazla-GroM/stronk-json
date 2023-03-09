import { createContext, useContext } from 'solid-js'

import { TDialogContext, TDialogProvider } from './dialog-types'

const DialogContext = createContext<TDialogContext>()

const DialogProvider: TDialogProvider = props => {
    const context: TDialogContext = {
        handleOpen() {
            props.handleOpen()
        },
        handleClose() {
            props.handleClose()
        },
        handleCancel(event) {
            props.handleCancel(event)
        }
    }

    return <DialogContext.Provider value={context}>{props.children}</DialogContext.Provider>
}

const useDialogContext = () => {
    const context = useContext(DialogContext)

    if (!context) {
        throw new Error('[useDialogContext]: useDialogContext should be used  inside DialogProvider')
    }

    return context
}

export { DialogProvider, useDialogContext }
