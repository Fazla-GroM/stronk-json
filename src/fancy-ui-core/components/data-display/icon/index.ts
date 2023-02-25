import { makeSprinklesVariantProps, type TLookupVariants } from '../../../utils'

const iconStyleProps = makeSprinklesVariantProps({
    base: {
        userSelect: 'none',
        width: 'em',
        height: 'em',
        display: 'inline-block',
        fill: 'currentColor',
        color: 'inherit'
    },
    variants: {
        size: {
            sm: { fontSize: 'xl' },
            md: { fontSize: 'xl2' },
            lg: { fontSize: 'xl3' }
        }
    }
})

export type TIconStyleProps = TLookupVariants<typeof iconStyleProps>

export { iconStyleProps }
