import { createSignal, Match, onMount, Switch } from 'solid-js'

import { Box, IconButton, Typography, useTheme } from '~/fancy-ui-solid'
import { DarkThemeIcon, LightThemeIcon, ObjectIcon, SystemThemeIcon } from '~/Icons'

const Logo = () => {
    return (
        <Box display="flex" alignItems="center" userSelect="none">
            <Box color="brand11" width="xl7" height="full" display="flex" alignItems="center" justifyContent="center">
                <ObjectIcon size="lg" />
            </Box>
            <Typography as="h1" variant="h4">
                Stronk JSON
            </Typography>
        </Box>
    )
}

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
            as="header"
            backgroundColor="surface"
            height="xl7"
            width="full"
            flexShrink="0"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingRight="xl"
            borderBottomColor="divider"
            borderBottomStyle="solid"
            borderBottomWidth="sm"
        >
            <Logo />
            <ToggleThemeButton />
        </Box>
    )
}

export { Header }
