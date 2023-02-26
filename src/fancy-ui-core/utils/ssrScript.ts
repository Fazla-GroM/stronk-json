import { DARK_THEME_VALUE, LIGHT_THEME_VALUE, THEME_ATTR_NAME } from '../consts'

type TSSRScriptOptions = {
    storageKey: string
    initialMode: 'light' | 'dark' | 'system'
}

const localStorageScript = (options: TSSRScriptOptions) => {
    return `(function () {
        try {
            var themeMode = localStorage.getItem("${options.storageKey}");
            var resolvedTheme;

            if (!themeMode) {
                themeMode = "${options.initialMode}";
                localStorage.setItem("${options.storageKey}",themeMode);
            }
            
            if (themeMode === 'system') {
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                resolvedTheme = mql.matches ? "${DARK_THEME_VALUE}" : "${LIGHT_THEME_VALUE}";
            } else {
                resolvedTheme = themeMode;
            }
            document.documentElement.setAttribute("${THEME_ATTR_NAME}", resolvedTheme);
        } catch (e) {
            console.warn('[FancyUI-SSRThemeScript]:', e);
        }
    })()`
}

const ssrScript = (options: TSSRScriptOptions) => {
    return localStorageScript(options)
}

export { ssrScript }
