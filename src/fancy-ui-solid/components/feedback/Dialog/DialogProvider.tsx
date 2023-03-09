import { createContext } from 'solid-js'

const DialogContext = createContext()

const DialogProvider = () => {
    return <DialogContext.Provider>{props.children}</DialogContext.Provider>
}

export { DialogProvider }
