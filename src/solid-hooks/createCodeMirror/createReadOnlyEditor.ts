import { EditorView } from '@codemirror/view'
import { Accessor, createEffect, on, untrack } from 'solid-js'

import { createCompartmentExtension } from './createCompartmentExtension'

const getReadOnlyExtensions = (readOnly: boolean) => {
    return readOnly ? EditorView.editable.of(false) : []
}

const createReadOnlyEditor = (view: Accessor<EditorView>, readOnly: Accessor<boolean>) => {
    const localReadOnly = readOnly ? untrack(readOnly) : false

    const reconfigure = createCompartmentExtension(getReadOnlyExtensions(localReadOnly), view)

    createEffect(on(readOnly, readOnly => reconfigure(getReadOnlyExtensions(readOnly))))
}

export { createReadOnlyEditor }
