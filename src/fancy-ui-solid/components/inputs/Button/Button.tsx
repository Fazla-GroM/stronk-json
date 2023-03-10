import { Component, mergeProps, splitProps } from 'solid-js'

import { buttonStyleProps, TButtonStyleProps } from '~/fancy-ui-core'
import type { MakeRequired, TComponentPropsWithOverrideAndSprinkles } from '~/fancy-ui-solid/types'

import { Box } from '../../surfaces'

export type TButtonProps = TComponentPropsWithOverrideAndSprinkles<'button', TButtonStyleProps>

export type TButton = Component<TButtonProps>

const STYLE_PROPS_KEYS = ['color', 'size', 'shape', 'variant', 'fullWidth'] as const

const SPRINKLES_PROPS_KEY = ['sprinkles'] as const

const Button: TButton = props => {
    const defaultProps = mergeProps(
        {
            type: 'button',
            variant: 'solid',
            color: 'brand',
            size: 'md',
            shape: 'rounded',
            fullWidth: false
        } as MakeRequired<TButtonProps, 'color' | 'variant' | 'size' | 'shape' | 'fullWidth' | 'type'>,
        props
    )

    const [styleProps, sprinklesProps, elementProps] = splitProps(defaultProps, STYLE_PROPS_KEYS, SPRINKLES_PROPS_KEY)

    return <Box as="button" {...elementProps} {...buttonStyleProps(styleProps, sprinklesProps.sprinkles)} />
}

export { Button }
