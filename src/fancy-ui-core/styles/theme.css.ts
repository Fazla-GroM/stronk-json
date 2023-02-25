import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

import { THEME_ATTR_SELECTOR_DARK, THEME_ATTR_SELECTOR_LIGHT } from '../consts'
import {
    brandColors,
    brandDarkColors,
    commonColors,
    dangerColors,
    dangerDarkColors,
    fontFamily,
    fontSize,
    fontWeight,
    infoColors,
    infoDarkColors,
    letterSpacing,
    lineHeight,
    neutralColors,
    neutralDarkColors,
    radii,
    shadows,
    sizes,
    spaces,
    strokeWidths,
    successColors,
    successDarkColors,
    transitionsDuration,
    transitionsProperty,
    transitionsTiming,
    warningColors,
    warningDarkColors,
    zIndices
} from '../tokens'
import { themeVars } from './theme-vars.css'

createGlobalTheme(':root', themeVars, {
    colors: {
        common: commonColors,
        neutral: neutralColors,
        brand: brandColors,
        success: successColors,
        danger: dangerColors,
        warning: warningColors,
        info: infoColors,
        layout: {
            body: themeVars.colors.neutral[2],
            surface: themeVars.colors.neutral[1],
            divider: themeVars.colors.neutral[6]
        }
    },
    fonts: {
        family: fontFamily,
        size: fontSize,
        weight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing
    },
    spaces: spaces,
    sizes: sizes,
    strokeWidths: strokeWidths,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
    transitions: {
        timing: transitionsTiming,
        duration: transitionsDuration,
        property: transitionsProperty
    }
})

createGlobalTheme(THEME_ATTR_SELECTOR_LIGHT, themeVars.colors, {
    common: commonColors,
    neutral: neutralColors,
    brand: brandColors,
    success: successColors,
    danger: dangerColors,
    warning: warningColors,
    info: infoColors,
    layout: {
        body: themeVars.colors.neutral[2],
        surface: themeVars.colors.neutral[1],
        divider: themeVars.colors.neutral[6]
    }
})

createGlobalTheme(THEME_ATTR_SELECTOR_DARK, themeVars.colors, {
    common: commonColors,
    neutral: neutralDarkColors,
    brand: brandDarkColors,
    success: successDarkColors,
    danger: dangerDarkColors,
    warning: warningDarkColors,
    info: infoDarkColors,
    layout: {
        body: themeVars.colors.neutral[1],
        surface: themeVars.colors.neutral[2],
        divider: themeVars.colors.neutral[6]
    }
})

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0
})

globalStyle('html, body, #__next, #root', {
    height: '100%'
})

globalStyle('body', {
    overscrollBehavior: 'none',
    fontFamily: themeVars.fonts.family.body,
    fontSize: themeVars.fonts.size.md,
    lineHeight: themeVars.fonts.lineHeight.md,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: themeVars.colors.layout.body
})

globalStyle('#__next, #root', {
    isolation: 'isolate'
})

globalStyle(THEME_ATTR_SELECTOR_LIGHT, {
    colorScheme: 'light'
})

globalStyle(THEME_ATTR_SELECTOR_DARK, {
    colorScheme: 'dark'
})
