import { DARK_THEME_VALUE, LIGHT_THEME_VALUE, THEME_ATTR_NAME } from '../consts'
import type { TThemeProviderInitialMode } from '../ThemeProvider'

type TSSRScriptParams = {
    storageKey: string
    initialMode?: TThemeProviderInitialMode
}

const localStorageScript = ({ storageKey, initialMode = 'system' }: TSSRScriptParams) => {
    return `(function () {
        try {
            var themeMode = JSON.parse(localStorage.getItem("${storageKey}"))
            var resolvedTheme

            if (!themeMode) {
                themeMode = "${initialMode}"
                localStorage.setItem("${storageKey}", JSON.stringify(themeMode))
            }
            
            if (themeMode === 'system') {
                const mql = window.matchMedia('(prefers-color-scheme: dark)')
                resolvedTheme = mql.matches ? "${DARK_THEME_VALUE}" : "${LIGHT_THEME_VALUE}"
            } else {
                resolvedTheme = themeMode
            }
            document.documentElement.setAttribute("${THEME_ATTR_NAME}", resolvedTheme)
        } catch (e) {
            console.warn('[Defungo-SSRThemeScript]:', e)
        }
    })()`
}

const ssrScript = (params: TSSRScriptParams) => {
    return localStorageScript(params)
}

export { ssrScript }
