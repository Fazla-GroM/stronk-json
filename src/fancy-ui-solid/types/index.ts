import type { Component, ComponentProps, JSX } from 'solid-js'

import type { TSprinkles } from '~/fancy-ui-core'

export type MakeRequired<Type, Key extends keyof Type> = Type & {
    [Property in Key]-?: Type[Property]
}

export type TElementType = keyof JSX.IntrinsicElements | Component<any>

export type TComponentPropsWithOverride<E extends TElementType, S> = Omit<ComponentProps<E>, keyof S> & S

export type TComponentPropsWithOverrideAndSprinkles<E extends TElementType, S> = TComponentPropsWithOverride<E, S> & {
    sprinkles?: TSprinkles
}
