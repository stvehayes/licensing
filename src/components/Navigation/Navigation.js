import {
    CommandPaletteIcon,
    CopilotIcon,
    GitPullRequestIcon,
    InboxIcon,
    MarkGithubIcon,
    ThreeBarsIcon,
    SearchIcon,
} from '@primer/octicons-react'
import { Avatar, Box, Heading, IconButton, TextInput } from '@primer/react'

export function Navigation() {
    const src = 'https://avatars.githubusercontent.com/u/13389614?v=4'
    const style = {
        color: 'fg.muted',
    }

    return (
        <Box
            sx={{
                display: 'flex',
                bg: 'canvas.subtle',
                borderBottom: '1px solid',
                borderColor: 'border.default',
                p: 3,
                justifyContent: 'space-between',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: '3',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    sx={style}
                    icon={ThreeBarsIcon}
                    aria-label="Open menu"
                />
                <MarkGithubIcon size={32} />
                <Heading
                    sx={{
                        fontSize: '1',
                    }}
                >
                    Avocado Corp.
                </Heading>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '2',
                    alignItems: 'center',
                }}
            >
                <TextInput
                    leadingVisual={SearchIcon}
                    trailingVisual={CommandPaletteIcon}
                    aria-label="Search"
                    name="search"
                    placeholder="Type / to search"
                    sx={{
                        bg: 'canvas.subtle',
                        color: 'fg.muted',
                        display: ['none', 'flex'],
                    }}
                />
                <IconButton
                    sx={style}
                    icon={GitPullRequestIcon}
                    aria-label="Open pull requests"
                />
                <IconButton
                    sx={style}
                    icon={InboxIcon}
                    aria-label="Open inbox"
                />
                <IconButton
                    sx={style}
                    icon={CopilotIcon}
                    aria-label="Open Copilot"
                />
                <Avatar size={32} src={src} />
            </Box>
        </Box>
    )
}
