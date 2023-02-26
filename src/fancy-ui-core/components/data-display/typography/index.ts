import { makeSprinklesVariantProps, type TLookupVariants } from '../../../utils'

const typographyStyleProps = makeSprinklesVariantProps({
    base: {
        boxSizing: 'border-box',
        padding: 'none',
        margin: 'none'
    },
    variants: {
        color: {
            neutralHighContrast: {
                color: 'neutral12'
            },
            neutralLowContrast: {
                color: 'neutral11'
            },
            brandHighContrast: {
                color: 'brand12'
            },
            brandLowContrast: {
                color: 'brand11'
            },
            successHighContrast: {
                color: 'success12'
            },
            successLowContrast: {
                color: 'success11'
            },
            dangerHighContrast: {
                color: 'danger12'
            },
            dangerLowContrast: {
                color: 'danger11'
            },
            warningHighContrast: {
                color: 'warning12'
            },
            warningLowContrast: {
                color: 'warning11'
            },
            infoHighContrast: {
                color: 'info12'
            },
            infoLowContrast: {
                color: 'info11'
            }
        },
        level: {
            h1: {
                fontFamily: 'heading',
                fontSize: 'xl5',
                fontWeight: 'semiBold',
                letterSpacing: 'sm',
                lineHeight: 'xs'
            },
            h2: {
                fontFamily: 'heading',
                fontSize: 'xl4',
                fontWeight: 'semiBold',
                letterSpacing: 'sm',
                lineHeight: 'xs'
            },
            h3: {
                fontFamily: 'heading',
                fontSize: 'xl3',
                fontWeight: 'medium',
                lineHeight: 'xs'
            },
            h4: {
                fontFamily: 'heading',
                fontSize: 'xl2',
                fontWeight: 'medium',
                lineHeight: 'md'
            },
            h5: {
                fontFamily: 'heading',
                fontSize: 'xl',
                fontWeight: 'medium',
                lineHeight: 'md'
            },
            h6: {
                fontFamily: 'heading',
                fontSize: 'lg',
                fontWeight: 'medium',
                lineHeight: 'md'
            },
            body1: {
                fontFamily: 'body',
                fontSize: 'md',
                fontWeight: 'regular',
                lineHeight: 'md'
            },
            body2: {
                fontFamily: 'body',
                fontSize: 'sm',
                fontWeight: 'regular',
                lineHeight: 'md'
            },
            body3: {
                fontFamily: 'body',
                fontSize: 'xs',
                fontWeight: 'regular',
                lineHeight: 'md'
            },
            body4: {
                fontFamily: 'body',
                fontSize: 'xs2',
                fontWeight: 'regular',
                lineHeight: 'md'
            },
            body5: {
                fontFamily: 'body',
                fontSize: 'xs3',
                fontWeight: 'regular',
                lineHeight: 'md'
            }
        }
    }
})

export type TTypographyStyleProps = TLookupVariants<typeof typographyStyleProps>

export { typographyStyleProps }
