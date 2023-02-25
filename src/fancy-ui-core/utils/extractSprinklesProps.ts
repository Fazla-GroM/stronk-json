import { sprinkles, type TSprinkles } from '../styles/sprinkles.css'

type TExtractSprinklesReturnType = {
    sprinklesProps: Record<string, unknown>
    nativeProps: Record<string, unknown>
}

const extractSprinklesProps = <T extends Record<string, unknown>>(allProps: T) => {
    const splitProps: TExtractSprinklesReturnType = {
        sprinklesProps: {},
        nativeProps: {}
    }

    for (const propsKey in allProps) {
        if (sprinkles.properties.has(propsKey as keyof TSprinkles)) {
            splitProps.sprinklesProps[propsKey] = allProps[propsKey]
        } else {
            splitProps.nativeProps[propsKey] = allProps[propsKey]
        }
    }

    return splitProps
}

export { extractSprinklesProps }
