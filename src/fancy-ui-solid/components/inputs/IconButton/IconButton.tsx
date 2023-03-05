import { Component, ComponentProps, mergeProps, splitProps } from 'solid-js'

import { iconButtonStyleProps, TIconButtonStyleProps, TSprinkles } from '~/fancy-ui-core'
import type { MakeRequired } from '~/fancy-ui-solid/types'

import { Box } from '../../surfaces'

export type TIconButtonProps = Omit<ComponentProps<'button'>, 'color'> &
    TIconButtonStyleProps & {
        sprinkles?: TSprinkles
    }

export type TIconButton = Component<TIconButtonProps>

const STYLE_PROPS_KEYS = ['color', 'size', 'shape', 'variant'] as const

const SPRINKLES_PROPS_KEY = ['sprinkles'] as const

const IconButton: TIconButton = props => {
    const defaultProps = mergeProps(
        {
            type: 'button',
            variant: 'solid',
            color: 'brand',
            size: 'md',
            shape: 'rounded',
            fullWidth: false
        } as MakeRequired<TIconButtonProps, 'color' | 'variant' | 'size' | 'shape' | 'type'>,
        props
    )

    const [styleProps, sprinklesProps, elementProps] = splitProps(defaultProps, STYLE_PROPS_KEYS, SPRINKLES_PROPS_KEY)

    return <Box as="button" {...elementProps} {...iconButtonStyleProps(styleProps, sprinklesProps.sprinkles)} />
}

export { IconButton, iconButtonStyleProps }
