import { Component, mergeProps } from 'solid-js'

import { ssrScript } from '~/fancy-ui-core'
import { TColorMode } from '~/solid-hooks'

import { MakeRequired } from '../types'

type TThemeSSRScriptProps = {
    storageKey: string
    initialMode: TColorMode
}

type TThemeSSRScript = Component<TThemeSSRScriptProps>

const ThemeSSRScript: TThemeSSRScript = props => {
    const defaultProps = mergeProps(
        { initialMode: 'system' } as MakeRequired<TThemeSSRScriptProps, 'initialMode'>,
        props
    )

    // eslint-disable-next-line solid/no-innerhtml
    return <script id="fancy-ui-theme-script" innerHTML={ssrScript(defaultProps)} />
}

export { ThemeSSRScript }
