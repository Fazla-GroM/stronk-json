import { usePrefersDark } from '@solid-primitives/media'
import { createStorageSignal } from '@solid-primitives/storage'
import { Accessor, createMemo } from 'solid-js'

export type TResolvedColorMode = 'light' | 'dark'

export type TColorMode = TResolvedColorMode | 'system'

export type TUseColorModeOptions = {
    storageKey: string
    initialMode?: TColorMode
}

export type TUseColorModeReturnType = {
    colorMode: Accessor<TColorMode>
    resolvedColorMode: Accessor<TResolvedColorMode>
    isDark: Accessor<boolean>
    toggleColorMode: (themeMode?: TColorMode) => void
}

const MODE_MAP: Record<TColorMode, TColorMode> = {
    light: 'system',
    system: 'dark',
    dark: 'light'
}

const useColorMode = (options: TUseColorModeOptions): TUseColorModeReturnType => {
    const prefersDark = usePrefersDark()

    const initialMode = () => {
        return options.initialMode || 'system'
    }

    const [colorMode, setColorMode] = createStorageSignal<TColorMode>(options.storageKey, initialMode(), { sync: true })

    const resolvedColorMode: Accessor<TResolvedColorMode> = createMemo(() => {
        if (!colorMode() || colorMode() === 'system') {
            return prefersDark() ? 'dark' : 'light'
        }

        return colorMode() as TResolvedColorMode
    })

    const toggleColorMode = (mode?: TColorMode) => {
        if (mode) {
            setColorMode(mode)
        } else {
            setColorMode(prev => {
                if (!prev) {
                    return MODE_MAP['system']
                }

                return MODE_MAP[prev]
            })
        }
    }

    return {
        toggleColorMode,
        resolvedColorMode,
        isDark() {
            return resolvedColorMode() === 'dark'
        },
        colorMode() {
            return !colorMode() ? initialMode() : (colorMode() as TColorMode)
        }
    }
}

export { useColorMode }
