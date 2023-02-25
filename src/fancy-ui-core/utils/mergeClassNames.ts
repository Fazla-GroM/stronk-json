const mergeClassNames = (...classNames: Array<string | undefined>): string | undefined => {
    if (!classNames.length) {
        return undefined
    }

    const classNameStack: Array<string> = []

    for (let index = 0; index < classNames.length; index += 1) {
        const maybeTrimmedClassName = classNames[index] && classNames[index]?.trim()

        if (maybeTrimmedClassName) {
            classNameStack.push(maybeTrimmedClassName)
        }
    }

    return classNameStack.length ? classNameStack.join(' ') : undefined
}

export { mergeClassNames }
