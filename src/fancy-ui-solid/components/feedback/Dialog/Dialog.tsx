import { createEffect, createSignal, JSX } from 'solid-js'

import { useCombinedControlSignal } from '~/solid-hooks'

const Dialog = () => {
    const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement>()
    const [value, setValue] = useCombinedControlSignal({
        initialValue: () => false
    })

    const handleOpen = () => {
        setValue(true)
    }

    const handleClose = () => {
        setValue(false)
    }

    const handleCancel: JSX.EventHandlerUnion<HTMLDialogElement, Event> = event => {
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
        <div>
            <dialog onCancel={handleCancel} ref={setDialogRef}>
                Hey im a dialog
            </dialog>
            <button onClick={handleOpen}>OPen</button>
            <button onClick={handleClose}>Clokse</button>
        </div>
    )
}

export { Dialog }
