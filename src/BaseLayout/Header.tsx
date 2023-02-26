import { createSignal, Match, onMount, Switch } from 'solid-js'

import { Box, IconButton, useTheme } from '~/fancy-ui-solid'
import { DarkThemeIcon, LightThemeIcon, SystemThemeIcon } from '~/Icons'

const ToggleThemeButton = () => {
    const [mounted, setMounted] = createSignal(false)
    const { toggleColorMode, colorMode } = useTheme()

    onMount(() => {
        setMounted(true)
    })

    return (
        <IconButton size="sm" color="brand" variant="outlined" onClick={() => toggleColorMode()}>
            <Switch>
                <Match when={!mounted() || colorMode() === 'system'}>
                    <SystemThemeIcon size="sm" />
                </Match>
                <Match when={colorMode() === 'dark'}>
                    <DarkThemeIcon size="sm" />
                </Match>
                <Match when={colorMode() === 'light'}>
                    <LightThemeIcon size="sm" />
                </Match>
            </Switch>
        </IconButton>
    )
}

const Header = () => {
    return (
        <Box
            backgroundColor="surface"
            height="xl7"
            width="full"
            flexShrink="0"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            paddingX="xl"
            borderBottomColor="divider"
            borderBottomStyle="solid"
            borderBottomWidth="sm"
        >
            <ToggleThemeButton />
        </Box>
    )
}

export { Header }
