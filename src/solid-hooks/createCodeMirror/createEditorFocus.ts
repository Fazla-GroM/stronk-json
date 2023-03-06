import { EditorView, ViewUpdate } from '@codemirror/view'
import { Accessor, createSignal } from 'solid-js'

import { createCompartmentExtension } from './createCompartmentExtension'

const createEditorFocus = (view: Accessor<EditorView>, onFocusChange?: (focused: boolean, vu: ViewUpdate) => void) => {
    const [focused, $setFocused] = createSignal(view()?.hasFocus ?? false)

    const focusListener = EditorView.updateListener.of(viewUpdate => {
        if (viewUpdate.focusChanged) {
            const focused = viewUpdate.view.hasFocus
            $setFocused(focused)
            onFocusChange?.(focused, viewUpdate)
        }
    })

    void createCompartmentExtension(focusListener, view)

    return {
        focused,
        setFocused(focused: boolean) {
            $setFocused(focused)
            if (focused) {
                view()?.focus()
            }
        }
    }
}

export { createEditorFocus }
