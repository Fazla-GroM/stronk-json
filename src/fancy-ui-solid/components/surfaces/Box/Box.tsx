import { Component, ComponentProps, JSX, mergeProps, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import type { TSprinkles } from '~/fancy-ui-core'
import { mergeClassNames, sprinkles } from '~/fancy-ui-core'
import type { MakeRequired } from '~/fancy-ui-solid/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TElementType = keyof JSX.IntrinsicElements | Component<any>

export type TSprinklesBoxProps<T extends TElementType> = TSprinkles & {
    class?: string
    baseClass?: string
    as?: T
    children?: JSX.Element
}

export type TBoxProps<T extends TElementType> = Omit<ComponentProps<T>, keyof TSprinklesBoxProps<T>> &
    TSprinklesBoxProps<T>

const SPRINKLES_PROPS_KEYS = Array.from(sprinkles.properties)

const LOCAL_PROPS_KEYS = ['as', 'class', 'baseClass'] as const

function Box<T extends TElementType = 'div'>(props: TBoxProps<T>) {
    const defaultProps = mergeProps({ as: 'div' } as MakeRequired<TBoxProps<T>, 'as'>, props)

    const [localProps, sprinklesProps, restProps] = splitProps(defaultProps, LOCAL_PROPS_KEYS, SPRINKLES_PROPS_KEYS)

    const className = () => {
        return mergeClassNames(localProps.baseClass, sprinkles(sprinklesProps), localProps.class)
    }

    return <Dynamic component={localProps.as as TElementType} class={className()} {...restProps} />
}

export { Box }
