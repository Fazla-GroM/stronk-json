const transitionsTiming = {
    accelerateMax: 'cubic-bezier(1,0,1,1)',
    accelerateMid: 'cubic-bezier(0.7,0,1,0.5)',
    accelerateMin: 'cubic-bezier(0.8,0,1,1)',
    decelerateMax: 'cubic-bezier(0,0,0,1)',
    decelerateMid: 'cubic-bezier(0.1,0.9,0.2,1)',
    decelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
    easeMax: 'cubic-bezier(0.8,0,0.1,1)',
    ease: 'cubic-bezier(0.33,0,0.67,1)',
    linear: 'cubic-bezier(0,0,1,1)'
}

const transitionsDuration = {
    fastest: '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    slowest: '500ms'
}

const transitionsProperty = {
    none: 'none',
    all: 'all',
    common: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
}

export { transitionsDuration, transitionsProperty, transitionsTiming }
