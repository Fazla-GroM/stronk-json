import { JSX, mergeProps, splitProps } from 'solid-js'

import { TTypographyStyleProps, typographyStyleProps } from '~/fancy-ui-core'
import { MakeRequired, TComponentPropsWithOverrideAndSprinkles, TElementType } from '~/fancy-ui-solid/types'

import { Box } from '../../surfaces'

type TTypographyProps<T extends TElementType> = TComponentPropsWithOverrideAndSprinkles<T, TTypographyStyleProps> & {
    as?: T
    children?: JSX.Element
}

const LOCAL_PROPS_KEYS = ['as'] as const

const SPRINKLES_PROPS_KEY = ['sprinkles'] as const

const TYPOGRAPHY_PROPS_KEYS = ['variant', 'color'] as const

function Typography<T extends TElementType = 'p'>(props: TTypographyProps<T>) {
    const defaultProps = mergeProps(
        { as: 'p', variant: 'body1', color: 'neutralHighContrast' } as MakeRequired<TTypographyProps<T>, 'as'>,
        props
    )

    const [localProps, styleProps, sprinklesProps, restProps] = splitProps(
        defaultProps,
        LOCAL_PROPS_KEYS,
        TYPOGRAPHY_PROPS_KEYS,
        SPRINKLES_PROPS_KEY
    )

    return (
        <Box as={localProps.as} {...typographyStyleProps(styleProps, sprinklesProps.sprinkles)} {...restProps}>
            {defaultProps.children}
        </Box>
    )
}

export { Typography }
