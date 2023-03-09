import { createEffect, createSignal, JSX } from 'solid-js'

import { useCombinedControlSignal } from '~/solid-hooks'

import { TDialogRoot } from './dialog-types'
import { DialogProvider } from './DialogProvider'

const DialogRoot: TDialogRoot = props => {
    const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement>()
    const [value, setValue] = useCombinedControlSignal({
        onChange: props.onChange,
        value: props.isOpen,
        initialValue: props.initialOpen || false
    })

    const handleOpen = () => {
        setValue(true)
    }

    const handleClose = () => {
        setValue(false)
    }

    const handleCancel: JSX.EventHandler<HTMLDialogElement, Event> = event => {
        event.preventDefault()

        setValue(false)
    }

    createEffect(() => {
        const dialog = dialogRef()
        const isOpen = value()

        if (dialog) {
            if (isOpen) {
                dialog.showModal()
            } else {
                dialog.close()
            }
        }
    })

    return (
        <DialogProvider handleCancel={handleCancel} handleOpen={handleOpen} handleClose={handleClose}>
            <dialog ref={setDialogRef}>Hey im a dialog</dialog>
            <button onClick={handleOpen}>OPen</button>
            <button onClick={handleClose}>Clokse</button>
        </DialogProvider>
    )
}

export { DialogRoot }
