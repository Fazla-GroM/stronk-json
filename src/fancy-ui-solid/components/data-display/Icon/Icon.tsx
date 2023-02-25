import { Component, ComponentProps, JSX, mergeProps, splitProps } from 'solid-js'

import { iconStyleProps, TIconStyleProps, TSprinkles } from '~/fancy-ui-core'
import { MakeRequired } from '~/fancy-ui-solid/types'

import { Box } from '../../surfaces'

type TCreateIconOptions = {
    svg: JSX.Element
    viewBox: string
}

type TIconProps = Omit<ComponentProps<'svg'>, keyof TSprinkles> &
    TIconStyleProps & {
        sprinkles?: TSprinkles
    }

type TIcon = Component<TIconProps>

const STYLE_PROPS_KEYS = ['size'] as const

const SPRINKLES_PROPS_KEY = ['sprinkles'] as const

const createIcon = (options: TCreateIconOptions) => {
    const Icon: TIcon = props => {
        const defaultProps = mergeProps(
            { 'aria-hidden': true, size: 'md', viewBox: options.viewBox, children: options.svg } as MakeRequired<
                TIconProps,
                'aria-hidden' | 'size' | 'viewBox' | 'children'
            >,
            props
        )

        const [styleProps, sprinklesProps, elementProps] = splitProps(
            defaultProps,
            STYLE_PROPS_KEYS,
            SPRINKLES_PROPS_KEY
        )

        return <Box as="svg" {...iconStyleProps(styleProps)} {...sprinklesProps} {...elementProps} />
    }

    return Icon
}

export { createIcon }
