import { Accessor, createSignal, untrack } from 'solid-js'

const resolveValueOrAccessor = <T>(valueOrAccessor: T | Accessor<T>): T => {
    if (valueOrAccessor instanceof Function) {
        return valueOrAccessor()
    }

    return valueOrAccessor
}

type TUseCombinedControlSignalProps<T> = {
    value?: T | Accessor<T>
    initialValue: T | Accessor<T>
    onChange?: (value: T) => void
}

type TUseCombinedControlSignalSetter<T> = (prev: T) => T

type TUseCombinedControlSignalNextStateOrSetter<T> = TUseCombinedControlSignalSetter<T> | T

const useCombinedControlSignal = <T>(props: TUseCombinedControlSignalProps<T>) => {
    const [innerValue, setInnerValue] = createSignal<T>(resolveValueOrAccessor(props.initialValue))

    const isControlled = () => {
        return resolveValueOrAccessor(props.value) !== undefined && !!props.onChange
    }

    const value = (): T => {
        if (resolveValueOrAccessor(props.value) && isControlled()) {
            return resolveValueOrAccessor(props.value) as T
        }

        return innerValue()
    }

    const setValue = (nextStateOrSetter: TUseCombinedControlSignalNextStateOrSetter<T>) => {
        untrack(() => {
            const nextValue = () => {
                return nextStateOrSetter instanceof Function ? nextStateOrSetter(value()) : nextStateOrSetter
            }

            const shouldChange = !Object.is(nextValue(), value())

            if (shouldChange) {
                if (!isControlled()) {
                    setInnerValue(nextValue)
                }

                if (props.onChange) {
                    props.onChange(nextValue())
                }
            }
        })
    }

    return [value, setValue] as const
}

export { useCombinedControlSignal }
