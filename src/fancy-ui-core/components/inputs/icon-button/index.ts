import { makeSprinklesVariantProps, TLookupVariants } from '../../../utils'

const iconButtonStyleProps = makeSprinklesVariantProps({
    base: {
        appearance: 'none',
        userSelect: 'none',
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'fit',
        cursor: 'pointer',
        fontFamily: 'body',
        fontWeight: 'bold',
        transitionProperty: 'colors',
        transitionTimingFunction: 'ease',
        transitionDuration: 'faster',
        lineHeight: 'none',
        position: 'relative'
    },
    variants: {
        size: {
            sm: {
                height: 'xl4',
                width: 'xl4',
                fontSize: 'sm'
            },
            md: {
                height: 'xl5',
                width: 'xl5',
                fontSize: 'sm'
            },
            lg: {
                height: 'xl6',
                width: 'xl6',
                fontSize: 'md'
            }
        },
        shape: {
            none: {
                borderRadius: 'none'
            },
            rounded: {
                borderRadius: 'sm'
            },
            circular: {
                borderRadius: 'circular'
            }
        },
        color: {
            neutral: {},
            brand: {},
            success: {},
            danger: {},
            warning: {},
            info: {}
        },
        variant: {
            solid: {
                borderStyle: 'none'
            },
            soft: {
                borderStyle: 'none'
            },
            outlined: {
                borderStyle: 'solid',
                borderWidth: 'sm'
            },
            plain: {
                borderStyle: 'none'
            }
        }
    },
    compoundVariants: [
        //solid
        {
            variants: {
                variant: 'solid',
                color: 'neutral'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'neutral9',
                    hover: 'neutral10',
                    focusVisible: 'neutral10',
                    active: 'neutral11'
                }
            }
        },
        {
            variants: {
                variant: 'solid',
                color: 'brand'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'brand9',
                    hover: 'brand10',
                    focusVisible: 'brand10',
                    active: 'brand11'
                }
            }
        },
        {
            variants: {
                variant: 'solid',
                color: 'success'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'success9',
                    hover: 'success10',
                    focusVisible: 'success10',
                    active: 'success11'
                }
            }
        },
        {
            variants: {
                variant: 'solid',
                color: 'danger'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'danger9',
                    hover: 'danger10',
                    focusVisible: 'danger10',
                    active: 'danger11'
                }
            }
        },
        {
            variants: {
                variant: 'solid',
                color: 'warning'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'warning9',
                    hover: 'warning10',
                    focusVisible: 'warning10',
                    active: 'warning11'
                }
            }
        },
        {
            variants: {
                variant: 'solid',
                color: 'info'
            },
            sprinkles: {
                color: 'white',
                backgroundColor: {
                    base: 'info9',
                    hover: 'info10',
                    focusVisible: 'info10',
                    active: 'info11'
                }
            }
        },
        //soft
        {
            variants: {
                variant: 'soft',
                color: 'neutral'
            },
            sprinkles: {
                color: 'neutral11',
                backgroundColor: {
                    base: 'neutral4',
                    hover: 'neutral5',
                    focusVisible: 'neutral5',
                    active: 'neutral6'
                }
            }
        },
        {
            variants: {
                variant: 'soft',
                color: 'brand'
            },
            sprinkles: {
                color: 'brand11',
                backgroundColor: {
                    base: 'brand4',
                    hover: 'brand5',
                    focusVisible: 'brand5',
                    active: 'brand6'
                }
            }
        },
        {
            variants: {
                variant: 'soft',
                color: 'success'
            },
            sprinkles: {
                color: 'success11',
                backgroundColor: {
                    base: 'success4',
                    hover: 'success5',
                    focusVisible: 'success5',
                    active: 'success6'
                }
            }
        },
        {
            variants: {
                variant: 'soft',
                color: 'danger'
            },
            sprinkles: {
                color: 'danger11',
                backgroundColor: {
                    base: 'danger4',
                    hover: 'danger5',
                    focusVisible: 'danger5',
                    active: 'danger6'
                }
            }
        },
        {
            variants: {
                variant: 'soft',
                color: 'warning'
            },
            sprinkles: {
                color: 'warning11',
                backgroundColor: {
                    base: 'warning4',
                    hover: 'warning5',
                    focusVisible: 'warning5',
                    active: 'warning6'
                }
            }
        },
        {
            variants: {
                variant: 'soft',
                color: 'info'
            },
            sprinkles: {
                color: 'info11',
                backgroundColor: {
                    base: 'info4',
                    hover: 'info5',
                    focusVisible: 'info5',
                    active: 'info6'
                }
            }
        },
        //outlined
        {
            variants: {
                variant: 'outlined',
                color: 'neutral'
            },
            sprinkles: {
                color: 'neutral11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'neutral3',
                    focusVisible: 'neutral3'
                },
                borderColor: {
                    base: 'neutral7',
                    hover: 'neutral8',
                    focusVisible: 'neutral8',
                    active: 'neutral9'
                }
            }
        },
        {
            variants: {
                variant: 'outlined',
                color: 'brand'
            },
            sprinkles: {
                color: 'brand11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'brand3',
                    focusVisible: 'brand3'
                },
                borderColor: {
                    base: 'brand7',
                    hover: 'brand8',
                    focusVisible: 'brand8',
                    active: 'brand9'
                }
            }
        },
        {
            variants: {
                variant: 'outlined',
                color: 'success'
            },
            sprinkles: {
                color: 'success11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'success3',
                    focusVisible: 'success3'
                },
                borderColor: {
                    base: 'success7',
                    hover: 'success8',
                    focusVisible: 'success8',
                    active: 'success9'
                }
            }
        },
        {
            variants: {
                variant: 'outlined',
                color: 'danger'
            },
            sprinkles: {
                color: 'danger11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'danger3',
                    focusVisible: 'danger3'
                },
                borderColor: {
                    base: 'danger7',
                    hover: 'danger8',
                    focusVisible: 'danger8',
                    active: 'danger9'
                }
            }
        },
        {
            variants: {
                variant: 'outlined',
                color: 'warning'
            },
            sprinkles: {
                color: 'warning11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'warning3',
                    focusVisible: 'warning3'
                },
                borderColor: {
                    base: 'warning7',
                    hover: 'warning8',
                    focusVisible: 'warning8',
                    active: 'warning9'
                }
            }
        },
        {
            variants: {
                variant: 'outlined',
                color: 'info'
            },
            sprinkles: {
                color: 'info11',
                backgroundColor: {
                    base: 'transparent',
                    focusVisible: 'info3',
                    hover: 'info3'
                },
                borderColor: {
                    base: 'info7',
                    hover: 'info8',
                    focusVisible: 'info8',
                    active: 'info9'
                }
            }
        },
        //plain
        {
            variants: {
                variant: 'plain',
                color: 'neutral'
            },
            sprinkles: {
                color: 'neutral11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'neutral5',
                    focusVisible: 'neutral5',
                    active: 'neutral6'
                }
            }
        },
        {
            variants: {
                variant: 'plain',
                color: 'brand'
            },
            sprinkles: {
                color: 'brand11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'brand5',
                    focusVisible: 'brand5',
                    active: 'brand6'
                }
            }
        },
        {
            variants: {
                variant: 'plain',
                color: 'success'
            },
            sprinkles: {
                color: 'success11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'success5',
                    focusVisible: 'success5',
                    active: 'success6'
                }
            }
        },
        {
            variants: {
                variant: 'plain',
                color: 'danger'
            },
            sprinkles: {
                color: 'danger11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'danger5',
                    focusVisible: 'danger5',
                    active: 'danger6'
                }
            }
        },
        {
            variants: {
                variant: 'plain',
                color: 'warning'
            },
            sprinkles: {
                color: 'warning11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'warning5',
                    focusVisible: 'warning5',
                    active: 'warning6'
                }
            }
        },
        {
            variants: {
                variant: 'plain',
                color: 'info'
            },
            sprinkles: {
                color: 'info11',
                backgroundColor: {
                    base: 'transparent',
                    hover: 'info5',
                    focusVisible: 'info5',
                    active: 'info6'
                }
            }
        }
    ]
})

export type TIconButtonStyleProps = TLookupVariants<typeof iconButtonStyleProps>

export { iconButtonStyleProps }
