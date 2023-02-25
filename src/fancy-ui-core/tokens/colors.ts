import {
    amber,
    amberDark,
    blue,
    blueDark,
    green,
    greenDark,
    mauve,
    mauveDark,
    red,
    redDark,
    violet,
    violetDark
} from '@radix-ui/colors'

import { remapRadixColors } from '../utils'

const commonColors = {
    white: '#ffffff',
    black: '#000000'
}

const neutralColors = remapRadixColors(mauve)

const neutralDarkColors = remapRadixColors(mauveDark)

const brandColors = remapRadixColors(violet)

const brandDarkColors = remapRadixColors(violetDark)

const successColors = remapRadixColors(green)

const successDarkColors = remapRadixColors(greenDark)

const dangerColors = remapRadixColors(red)

const dangerDarkColors = remapRadixColors(redDark)

const warningColors = remapRadixColors(amber)

const warningDarkColors = remapRadixColors(amberDark)

const infoColors = remapRadixColors(blue)

const infoDarkColors = remapRadixColors(blueDark)

export { commonColors }

export { neutralColors, neutralDarkColors }

export { brandColors, brandDarkColors }

export { successColors, successDarkColors }

export { dangerColors, dangerDarkColors }

export { warningColors, warningDarkColors }

export { infoColors, infoDarkColors }
