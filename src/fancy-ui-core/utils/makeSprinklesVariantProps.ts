import type { TSprinkles } from '../styles/sprinkles.css'

type TBooleanMap<T> = T extends 'true' | 'false' ? boolean : T

type TVariantStyleDefintion = Record<string, TSprinkles>

type TVariantStyleGroup = Record<string, TVariantStyleDefintion>

type TVariantSelection<T extends TVariantStyleGroup> = {
    [K in keyof T]?: TBooleanMap<keyof T[K]>
}

type TCompoundVariant<T extends TVariantStyleGroup> = {
    variants: TVariantSelection<T>
    sprinkles: TSprinkles
}

type TVariantStylePattern<T extends TVariantStyleGroup> = {
    base?: TSprinkles
    variants?: T
    compoundVariants?: Array<TCompoundVariant<T>>
}

type TLookupFn<T extends TVariantStyleGroup> = (
    variantSelections?: TVariantSelection<T>,
    sprinklesOverride?: TSprinkles
) => TSprinkles

export type TLookupVariants<T extends TLookupFn<TVariantStyleGroup>> = Parameters<T>[0]

const makeSprinklesVariantProps = <T extends TVariantStyleGroup>({
    base,
    variants,
    compoundVariants
}: TVariantStylePattern<T>): TLookupFn<T> => {
    return (variantSelections, sprinklesOverride) => {
        let resolvedSprinklesProps: TSprinkles = base || {}

        if (variantSelections) {
            if (variants) {
                Object.keys(variantSelections).forEach(variantKey => {
                    const variantValue = variantSelections[variantKey]

                    const variantProps = variants[variantKey][variantValue as string]

                    resolvedSprinklesProps = {
                        ...resolvedSprinklesProps,
                        ...variantProps
                    }
                })
            }

            if (compoundVariants?.length) {
                compoundVariants.forEach(compoundVariant => {
                    const activationVariants = compoundVariant.variants

                    const shouldApplyCompoundStyle = Object.keys(activationVariants).every(
                        activationVariantKey =>
                            activationVariants[activationVariantKey] === variantSelections[activationVariantKey]
                    )

                    if (shouldApplyCompoundStyle) {
                        resolvedSprinklesProps = {
                            ...resolvedSprinklesProps,
                            ...compoundVariant.sprinkles
                        }
                    }
                })
            }
        }

        if (sprinklesOverride) {
            resolvedSprinklesProps = {
                ...resolvedSprinklesProps,
                ...sprinklesOverride
            }
        }

        return resolvedSprinklesProps
    }
}

export { makeSprinklesVariantProps }
