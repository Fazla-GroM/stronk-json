import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete'
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands'
import { json, jsonParseLinter } from '@codemirror/lang-json'
import {
    bracketMatching,
    defaultHighlightStyle,
    foldGutter,
    foldKeymap,
    HighlightStyle,
    indentOnInput,
    syntaxHighlighting
} from '@codemirror/language'
import { linter, lintKeymap } from '@codemirror/lint'
import { EditorState, Extension } from '@codemirror/state'
import {
    crosshairCursor,
    drawSelection,
    dropCursor,
    EditorView,
    highlightActiveLine,
    highlightActiveLineGutter,
    highlightSpecialChars,
    keymap,
    lineNumbers,
    rectangularSelection
} from '@codemirror/view'
import { tags as t } from '@lezer/highlight'

import { themeVars } from '~/fancy-ui-solid'

const stronkJsonHighlightStyle = HighlightStyle.define([
    { tag: t.keyword, color: themeVars.colors.info[11] },
    { tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName], color: themeVars.colors.brand[11] }, // property
    // { tag: [t.function(t.variableName), t.labelName], color: malibu },
    // { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: whiskey },
    // { tag: [t.definition(t.name), t.separator], color: ivory },
    {
        tag: [t.typeName, t.className, t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
        color: themeVars.colors.info[11]
    },
    // { tag: [t.operator, t.operatorKeyword, t.url, t.escape, t.regexp, t.link, t.special(t.string)], color: cyan },
    // { tag: [t.meta, t.comment], color: stone },
    // { tag: t.strong, fontWeight: 'bold' },
    // { tag: t.emphasis, fontStyle: 'italic' },
    // { tag: t.strikethrough, textDecoration: 'line-through' },
    // { tag: t.link, color: stone, textDecoration: 'underline' },
    // { tag: t.heading, fontWeight: 'bold', color: coral },
    { tag: [t.atom, t.bool, t.special(t.variableName)], color: themeVars.colors.info[11] }, //bool
    { tag: [t.processingInstruction, t.string, t.inserted], color: themeVars.colors.success[11] }, //string
    { tag: t.invalid, color: themeVars.colors.info[11] }
])

const stronkJsonTheme = EditorView.theme({
    '&': {
        color: themeVars.colors.neutral[11],
        background: themeVars.colors.layout.body,

        width: '100%',
        height: '100%'
    },
    '.cm-content': {
        caretColor: themeVars.colors.neutral[11]
    },
    '&.cm-focused .cm-cursor': {
        borderLeftColor: themeVars.colors.neutral[11]
    },
    '&.cm-focused': {
        outline: 'none'
    },
    '.cm-scroller': {
        fontFamily: themeVars.fonts.family.code,
        fontSize: themeVars.fonts.size.xs,
        fontWeight: themeVars.fonts.weight.bold,
        overscrollBehavior: 'none'
    },
    '.cm-gutters': {
        backgroundColor: themeVars.colors.neutral[1],
        color: themeVars.colors.neutral[11],
        border: 'none'
    },
    '.cm-activeLineGutter': {
        backgroundColor: themeVars.colors.neutral[3],
        color: themeVars.colors.neutral[12]
    },
    '.cm-activeLine': {
        backgroundColor: themeVars.colors.neutral[3]
    },
    '.cm-foldPlaceholder': {
        backgroundColor: themeVars.colors.neutral[9],
        border: 'none'
    },
    '&.cm-focused .cm-selectionBackground, ::selection': {
        backgroundColor: themeVars.colors.neutral[5]
        // caretColor: 'red'
    },
    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
        backgroundColor: themeVars.colors.neutral[9],
        outline: 'none'
    }
})

// (The superfluous function calls around the list of extensions work
// around current limitations in tree-shaking software.)

/// This is an extension value that just pulls together a number of
/// extensions that you might want in a basic editor. It is meant as a
/// convenient helper to quickly set up CodeMirror without installing
/// and importing a lot of separate packages.
///
/// Specifically, it includes...
///
///  - [the default command bindings](#commands.defaultKeymap)
///  - [line numbers](#view.lineNumbers)
///  - [special character highlighting](#view.highlightSpecialChars)
///  - [the undo history](#commands.history)
///  - [a fold gutter](#language.foldGutter)
///  - [custom selection drawing](#view.drawSelection)
///  - [drop cursor](#view.dropCursor)
///  - [multiple selections](#state.EditorState^allowMultipleSelections)
///  - [reindentation on input](#language.indentOnInput)
///  - [the default highlight style](#language.defaultHighlightStyle) (as fallback)
///  - [bracket matching](#language.bracketMatching)
///  - [bracket closing](#autocomplete.closeBrackets)
///  - [autocompletion](#autocomplete.autocompletion)
///  - [rectangular selection](#view.rectangularSelection) and [crosshair cursor](#view.crosshairCursor)
///  - [active line highlighting](#view.highlightActiveLine)
///  - [active line gutter highlighting](#view.highlightActiveLineGutter)
///  - [selection match highlighting](#search.highlightSelectionMatches)
///  - [search](#search.searchKeymap)
///  - [linting](#lint.lintKeymap)
///
/// (You'll probably want to add some language package to your setup
/// too.)
///
/// This extension does not allow customization. The idea is that,
/// once you decide you want to configure your editor more precisely,
/// you take this package's source (which is just a bunch of imports
/// and an array literal), copy it into your own code, and adjust it
/// as desired.
// export const basicSetup: Extension = (() => [
//     lineNumbers(),
//     highlightActiveLineGutter(),
//     highlightSpecialChars(),
//     history(),
//     foldGutter(),
//     drawSelection(),
//     dropCursor(),
//     EditorState.allowMultipleSelections.of(true),
//     indentOnInput(),
//     syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
//     bracketMatching(),
//     closeBrackets(),
//     autocompletion(),
//     rectangularSelection(),
//     crosshairCursor(),
//     highlightActiveLine(),
//     // highlightSelectionMatches(),
//     keymap.of([
//         ...closeBracketsKeymap,
//         ...defaultKeymap,
//         // ...searchKeymap,
//         ...historyKeymap,
//         ...foldKeymap,
//         ...completionKeymap,
//         ...lintKeymap
//     ])
// ])()
const stronkJsonCodemirrorSetup = (): Extension => {
    return [
        json(),
        linter(jsonParseLinter()),
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        history(),
        foldGutter(),
        drawSelection(),
        dropCursor(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        bracketMatching(),
        closeBrackets(),
        autocompletion(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        // highlightSelectionMatches(),
        keymap.of([
            ...closeBracketsKeymap,
            ...defaultKeymap,
            // ...searchKeymap,
            ...historyKeymap,
            ...foldKeymap,
            ...completionKeymap,
            ...lintKeymap
        ]),
        stronkJsonTheme,
        syntaxHighlighting(stronkJsonHighlightStyle)
    ]
}

export { stronkJsonCodemirrorSetup }
