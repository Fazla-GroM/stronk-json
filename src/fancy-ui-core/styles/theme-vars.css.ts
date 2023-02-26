import { createGlobalThemeContract } from '@vanilla-extract/css'

const themeVars = createGlobalThemeContract({
    colors: {
        common: {
            black: 'colors-common-black',
            white: 'colors-common-white'
        },
        neutral: {
            1: 'colors-neutral-1',
            2: 'colors-neutral-2',
            3: 'colors-neutral-3',
            4: 'colors-neutral-4',
            5: 'colors-neutral-5',
            6: 'colors-neutral-6',
            7: 'colors-neutral-7',
            8: 'colors-neutral-8',
            9: 'colors-neutral-9',
            10: 'colors-neutral-10',
            11: 'colors-neutral-11',
            12: 'colors-neutral-12'
        },
        brand: {
            1: 'colors-brand-1',
            2: 'colors-brand-2',
            3: 'colors-brand-3',
            4: 'colors-brand-4',
            5: 'colors-brand-5',
            6: 'colors-brand-6',
            7: 'colors-brand-7',
            8: 'colors-brand-8',
            9: 'colors-brand-9',
            10: 'colors-brand-10',
            11: 'colors-brand-11',
            12: 'colors-brand-12'
        },
        success: {
            1: 'colors-success-1',
            2: 'colors-success-2',
            3: 'colors-success-3',
            4: 'colors-success-4',
            5: 'colors-success-5',
            6: 'colors-success-6',
            7: 'colors-success-7',
            8: 'colors-success-8',
            9: 'colors-success-9',
            10: 'colors-success-10',
            11: 'colors-success-11',
            12: 'colors-success-12'
        },
        danger: {
            1: 'colors-danger-1',
            2: 'colors-danger-2',
            3: 'colors-danger-3',
            4: 'colors-danger-4',
            5: 'colors-danger-5',
            6: 'colors-danger-6',
            7: 'colors-danger-7',
            8: 'colors-danger-8',
            9: 'colors-danger-9',
            10: 'colors-danger-10',
            11: 'colors-danger-11',
            12: 'colors-danger-12'
        },
        warning: {
            1: 'colors-warning-1',
            2: 'colors-warning-2',
            3: 'colors-warning-3',
            4: 'colors-warning-4',
            5: 'colors-warning-5',
            6: 'colors-warning-6',
            7: 'colors-warning-7',
            8: 'colors-warning-8',
            9: 'colors-warning-9',
            10: 'colors-warning-10',
            11: 'colors-warning-11',
            12: 'colors-warning-12'
        },
        info: {
            1: 'colors-info-1',
            2: 'colors-info-2',
            3: 'colors-info-3',
            4: 'colors-info-4',
            5: 'colors-info-5',
            6: 'colors-info-6',
            7: 'colors-info-7',
            8: 'colors-info-8',
            9: 'colors-info-9',
            10: 'colors-info-10',
            11: 'colors-info-11',
            12: 'colors-info-12'
        },
        layout: {
            body: 'colors-layout-body',
            surface: 'colors-layout-surface',
            divider: 'colors-layout-divider'
        }
    },
    fonts: {
        family: {
            heading: 'fonts-family-heading',
            body: 'fonts-family-body',
            code: 'fonts-family-code'
        },
        size: {
            xs3: 'fonts-size-xs3',
            xs2: 'fonts-size-xs2',
            xs: 'fonts-size-xs',
            sm: 'fonts-size-sm',
            md: 'fonts-size-md',
            lg: 'fonts-size-lg',
            xl: 'fonts-size-xl',
            xl2: 'fonts-size-xl2',
            xl3: 'fonts-size-xl3',
            xl4: 'fonts-size-xl4',
            xl5: 'fonts-size-xl5',
            xl6: 'fonts-size-xl6',
            xl7: 'fonts-size-xl7'
        },
        weight: {
            regular: 'fonts-weight-regular',
            medium: 'fonts-weight-medium',
            semiBold: 'fonts-weight-semiBold',
            bold: 'fonts-weight-bold'
        },
        lineHeight: {
            none: 'fonts-lineHeight-none',
            xs: 'fonts-lineHeight-xs',
            sm: 'fonts-lineHeight-sm',
            md: 'fonts-lineHeight-md',
            lg: 'fonts-lineHeight-lg',
            xl: 'fonts-lineHeight-xl'
        },
        letterSpacing: {
            xs: 'fonts-letterSpacing-xs',
            sm: 'fonts-letterSpacing-sm',
            md: 'fonts-letterSpacing-md',
            lg: 'fonts-letterSpacing-lg',
            xl: 'fonts-letterSpacing-xl'
        }
    },
    sizes: {
        xs6: 'sizes-xs6',
        xs5: 'sizes-xs5',
        xs4: 'sizes-xs4',
        xs3: 'sizes-xs3',
        xs2: 'sizes-xs2',
        xs: 'sizes-xs',
        sm: 'sizes-sm',
        md: 'sizes-md',
        lg: 'sizes-lg',
        xl: 'sizes-xl',
        xl2: 'sizes-xl2',
        xl3: 'sizes-xl3',
        xl4: 'sizes-xl4',
        xl5: 'sizes-xl5',
        xl6: 'sizes-xl6',
        xl7: 'sizes-xl7',
        xl8: 'sizes-xl8',
        xl9: 'sizes-xl9', //80px
        xl10: 'sizes-xl10', //96px
        xl11: 'sizes-xl11', //112px
        xl12: 'sizes-xl12', //128px
        xl13: 'sizes-xl13', //144px
        xl14: 'sizes-xl14', //160px
        xl15: 'sizes-xl15', //176px
        xl16: 'sizes-xl16', //192px
        xl17: 'sizes-xl17', //208
        xl18: 'sizes-xl18', //224
        xl19: 'sizes-xl19', //240
        xl20: 'sizes-xl20', //256
        xl21: 'sizes-xl21', //288
        xl22: 'sizes-xl22' //320
    },
    spaces: {
        xs6: 'spaces-xs6',
        xs5: 'spaces-xs5',
        xs4: 'spaces-xs4',
        xs3: 'spaces-xs3',
        xs2: 'spaces-xs2',
        xs: 'spaces-xs',
        sm: 'spaces-sm',
        md: 'spaces-md',
        lg: 'spaces-lg',
        xl: 'spaces-xl',
        xl2: 'spaces-xl2',
        xl3: 'spaces-xl3',
        xl4: 'spaces-xl4',
        xl5: 'spaces-xl5',
        xl6: 'spaces-xl6',
        xl7: 'spaces-xl7',
        xl8: 'spaces-xl8',
        xl9: 'spaces-xl9', //80px
        xl10: 'spaces-xl10', //96px
        xl11: 'spaces-xl11', //112px
        xl12: 'spaces-xl12', //128px
        xl13: 'spaces-xl13', //144px
        xl14: 'spaces-xl14', //160px
        xl15: 'spaces-xl15', //176px
        xl16: 'spaces-xl16', //192px
        xl17: 'spaces-xl17', //208
        xl18: 'spaces-xl18', //224
        xl19: 'spaces-xl19', //240
        xl20: 'spaces-xl20', //256
        xl21: 'spaces-xl21', //288
        xl22: 'spaces-xl22' //320
    },
    strokeWidths: {
        sm: 'strokeWidths-sm',
        md: 'strokeWidths-md',
        lg: 'strokeWidths-lg'
    },
    shadows: {
        xs: 'shadows-xs',
        sm: 'shadows-sm',
        md: 'shadows-md',
        lg: 'shadows-lg',
        xl: 'shadows-xl',
        xl2: 'shadows-xl2'
    },
    radii: {
        none: 'radii-none',
        xs: 'radii-xs',
        sm: 'radii-sm',
        md: 'radii-md',
        lg: 'radii-lg',
        xl: 'radii-xl',
        circular: 'radii-circular'
    },
    zIndices: {
        xs: 'zIndices-xs',
        sm: 'zIndices-sm',
        md: 'zIndices-md',
        lg: 'zIndices-lg',
        xl: 'zIndices-xl'
    },
    transitions: {
        timing: {
            accelerateMax: 'transitions-timing-accelerateMax',
            accelerateMid: 'transitions-timing-accelerateMid',
            accelerateMin: 'transitions-timing-accelerateMin',
            decelerateMax: 'transitions-timing-decelerateMax',
            decelerateMid: 'transitions-timing-decelerateMid',
            decelerateMin: 'transitions-timing-decelerateMin',
            easeMax: 'transitions-timing-easeMax',
            ease: 'transitions-timing-ease',
            linear: 'transitions-timing-linear'
        },
        duration: {
            fastest: 'transitions-duration-fastest',
            faster: 'transitions-duration-faster',
            fast: 'transitions-duration-fast',
            normal: 'transitions-duration-normal',
            slow: 'transitions-duration-slow',
            slower: 'transitions-duration-slower',
            slowest: 'transitions-duration-slowest'
        },
        property: {
            none: 'transitions-property-none',
            all: 'transitions-property-all',
            common: 'transitions-property-common',
            colors: 'transitions-property-colors',
            opacity: 'transitions-property-opacity',
            shadow: 'transitions-property-shadow',
            transform: 'transitions-property-transform'
        }
    }
})

export { themeVars }
