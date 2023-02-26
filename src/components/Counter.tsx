import './Counter.css'

import { Component, ComponentProps, JSX, splitProps } from 'solid-js'
import { createSignal } from 'solid-js'
import { Dynamic, render } from 'solid-js/web'

export default function Counter() {
    const [count, setCount] = createSignal(0)
    return <button onClick={() => setCount(count() + 1)}>Clicks: {count()}</button>
}
