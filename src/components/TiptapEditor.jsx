// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Strike from '@tiptap/extension-strike'
import Underline from '@tiptap/extension-underline'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

import { Heading1Icon, Heading2Icon, Heading3Icon, PilcrowIcon, BoldIcon, UnderlineIcon, ItalicIcon, StrikethroughIcon, Code2Icon, PaintRollerIcon, HighlighterIcon } from "lucide-react"
import LinkPopUp from './LinkPopUp'
import TextStylePopUp from './TextStylePopUp'
import { useEffect, useRef, useState } from 'react'

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
        },
        code: {
            HTMLAttributes: {
                class: "px-2 rounded border bg-muted"
            }
        }

    }),
    Underline,
    Link.configure({
        openOnClick: true,
        autolink: false,
        defaultProtocol: 'https',
        // Allow search engines to follow links(remove nofollow)
        rel: 'noopener noreferrer nofollow',
        // Remove target entirely so links open in current tab
        target: "_blank",
        HTMLAttributes: {
            class: "underline text-accent cursor-pointer"
        }
    }),
    Highlight.configure({
        multicolor: true
    }),
    Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Untitled...',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },

        emptyEditorClass: 'is-editor-empty',
    }),
    Color,
    TextStyle
]

const content = '<p></p>'


const TiptapEditor = () => {

    // Adding Reference to bubble Menu
    // to get its postion to show dropdown menu for text styling
    const bubbleMenuRef = useRef(null);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

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

    useEffect(() => {

        if (bubbleMenuRef.current) {

            const { top, left } = bubbleMenuRef.current.getBoundingClientRect();

            // Setting x and y position of the Bubble Menu
            setMenuPosition({ x: left, y: top });
        }

    }, [bubbleMenuRef]); // Update position when selection changes and bubbleMenu appears


    return (
        <>
            <EditorContent editor={editor} />
            {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}

            <BubbleMenu editor={editor} tippyOptions={{ placement: "top-end" }}>

                <div ref={bubbleMenuRef} className=' flex px-1.5 py-1 mb-2 border rounded-md shadow-lg bg-background gap-x-2'>
                    <Heading1Icon
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('heading', { level: 1 }) ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <Heading2Icon
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('heading', { level: 2 }) ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <Heading3Icon
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('heading', { level: 3 }) ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <PilcrowIcon
                        onClick={() => editor.chain().focus().clearNodes().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('paragraph') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <BoldIcon
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('bold') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <UnderlineIcon
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('underline') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <ItalicIcon
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('italic') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <StrikethroughIcon
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('strike') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <Code2Icon
                        onClick={() => editor.chain().focus().toggleCode().run()}
                        className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('code') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`}
                    />
                    <LinkPopUp editor={editor} />
                    <TextStylePopUp editor={editor} menuPosition={menuPosition} />
                </div>
            </BubbleMenu >
        </>
    )
}

export default TiptapEditor
