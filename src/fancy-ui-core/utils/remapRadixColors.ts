type TColorKeys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

const remapRadixColors = <T extends Record<string, string>>(radixPallete: T): Record<TColorKeys, string> => {
    return Object.values(radixPallete).reduce<Record<TColorKeys, string>>((acc, token, index) => {
        acc[(index + 1) as TColorKeys] = token

        return acc
    }, {} as Record<TColorKeys, string>)
}

export { remapRadixColors }
