const LIGHT_THEME_VALUE = 'light'
const DARK_THEME_VALUE = 'dark'
const THEME_ATTR_NAME = 'data-theme'
const THEME_ATTR_SELECTOR_LIGHT = `[${THEME_ATTR_NAME}=${LIGHT_THEME_VALUE}]`
const THEME_ATTR_SELECTOR_DARK = `[${THEME_ATTR_NAME}=${DARK_THEME_VALUE}]`
const DISABLE_CSS_TRANSITION =
    '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'

export {
    DARK_THEME_VALUE,
    DISABLE_CSS_TRANSITION,
    LIGHT_THEME_VALUE,
    THEME_ATTR_NAME,
    THEME_ATTR_SELECTOR_DARK,
    THEME_ATTR_SELECTOR_LIGHT
}
