// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Strike from '@tiptap/extension-strike'

// define your extension array
const extensions = [
    StarterKit.configure({
        heading: {
            levels: [1, 2, 3],
            HTMLAttributes: {
                class: ""
            }
        },
        paragraph: {
            HTMLAttributes: {
                class: ""
            }
        }
    }),
    Strike
]

const content = '<h1>Untitled</h1>'

const TiptapEditor = () => {
    const editor = useEditor({
        extensions,
        content,
        // place the cursor in the editor after initialization
        autofocus: true,
        // make the text editable (but that’s the default anyway)
        editable: true,
        // disable the loading of the default CSS (which is not much anyway)
        injectCSS: false,
    })

    return (
        <>
            <EditorContent editor={editor} />
            <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
    )
}

export default TiptapEditor
