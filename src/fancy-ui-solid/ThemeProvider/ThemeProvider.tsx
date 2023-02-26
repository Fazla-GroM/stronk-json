import { createContext, createEffect, mergeProps, ParentComponent, useContext } from 'solid-js'

import { disableCSSTransition, THEME_ATTR_NAME } from '~/fancy-ui-core'
import { TColorMode, TUseColorModeReturnType, useColorMode } from '~/solid-hooks'

import { MakeRequired } from '../types'

type TThemeContext = TUseColorModeReturnType

type TThemeProviderProps = {
    storageKey: string
    initialMode?: TColorMode
}

type TThemeProvider = ParentComponent<TThemeProviderProps>

const ThemeContext = createContext<TThemeContext>()

const ThemeProvider: TThemeProvider = props => {
    const defaultProps = mergeProps(
        { initialMode: 'system' } as MakeRequired<TThemeProviderProps, 'initialMode'>,
        props
    )
    const themeContext = useColorMode({ storageKey: defaultProps.storageKey, initialMode: defaultProps.initialMode })

    createEffect(() => {
        const enableCssTransition = disableCSSTransition()
        const documentElement = document.documentElement

        console.log(themeContext.resolvedColorMode())

        documentElement.setAttribute(THEME_ATTR_NAME, themeContext.resolvedColorMode())

        enableCssTransition()
    })

    return <ThemeContext.Provider value={themeContext}>{defaultProps.children}</ThemeContext.Provider>
}

const useTheme = () => {
    const themeContext = useContext(ThemeContext)

    if (!themeContext) {
        throw new Error("[useTheme]: 'useTheme' must be used within 'ThemeProvider'!")
    }

    return themeContext
}

export { ThemeProvider, useTheme }
