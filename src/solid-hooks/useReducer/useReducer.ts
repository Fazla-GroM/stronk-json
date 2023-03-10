import { createStore, reconcile } from 'solid-js/store'

export type TReducerState = Record<string, any>

export type TReducerAction = any

export type TReducer<S extends TReducerState, A extends TReducerAction> = (state: S, action: A) => S

const useReducer = <S extends TReducerState, T extends TReducerAction>(reducer: TReducer<S, T>, state: S) => {
    const [store, setStore] = createStore(state)

    const dispatch = (action: T) => {
        state = reducer(state, action)
        setStore(reconcile(state))
    }
    return [store, dispatch] as const
}

export { useReducer }
