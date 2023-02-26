import { ParentComponent } from 'solid-js'
import { A, useMatch } from 'solid-start'

import { Box, iconButtonStyleProps } from '~/fancy-ui-solid'
import { ColumnViewIcon, GraphViewIcon, TreeViewIcon } from '~/Icons'

type TSidebarNavLinkProps = {
    href: string
}

type TSidebarNavLink = ParentComponent<TSidebarNavLinkProps>

const SidebarNavLink: TSidebarNavLink = props => {
    const match = useMatch(() => props.href)

    return (
        <Box
            as={A}
            href={props.href}
            {...iconButtonStyleProps({
                size: 'md',
                shape: 'rounded',
                variant: match() ? 'solid' : 'soft',
                color: match() ? 'brand' : 'neutral'
            })}
        >
            {props.children}
        </Box>
    )
}

const SidebarNav = () => {
    return (
        <Box as="nav" display="flex" flexDirection="column" alignItems="center" gap="xs">
            <SidebarNavLink href="/">
                <GraphViewIcon size="md" />
            </SidebarNavLink>
            <SidebarNavLink href="/column">
                <ColumnViewIcon size="md" />
            </SidebarNavLink>
            <SidebarNavLink href="/tree">
                <TreeViewIcon size="md" />
            </SidebarNavLink>
        </Box>
    )
}

export { SidebarNav }
