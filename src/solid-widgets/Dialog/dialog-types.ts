import { Accessor, JSX, ParentComponent } from 'solid-js'

export type TDialogRootProps = {
    isOpen?: boolean | Accessor<boolean>
    initialOpen?: boolean | Accessor<boolean>
    onChange?: (value: boolean) => void
}

export type TDialogRoot = ParentComponent<TDialogRootProps>

export type TDialogContext = {
    handleOpen: () => void
    handleClose: () => void
    handleCancel: JSX.EventHandler<HTMLDialogElement, Event>
}

export type TDialogProviderProps = TDialogContext

export type TDialogProvider = ParentComponent<TDialogProviderProps>
