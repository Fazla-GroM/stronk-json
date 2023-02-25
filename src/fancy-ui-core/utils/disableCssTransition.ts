import { DISABLE_CSS_TRANSITION } from '../consts'

const disableTransition = () => {
    const documentNode = document
    const styleNode = documentNode.createElement('style')
    const textNode = documentNode.createTextNode(DISABLE_CSS_TRANSITION)

    styleNode.appendChild(textNode)

    documentNode.head.appendChild(styleNode)

    return () => {
        // force a reflow
        ;(() => window.getComputedStyle(document.body))()

        // remove style node on next tick
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                documentNode.head.removeChild(styleNode)
            })
        })
    }
}

export { disableTransition }
