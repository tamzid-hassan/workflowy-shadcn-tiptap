import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LinkIcon } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

function LinkPopUp({ editor }) {

    const [textInput, setTextInput] = useState("")
    const [linkInput, setLinkInput] = useState("")

    // To manage OPEN state of the dialog box
    const [dialogOpen, setDialogOpen] = useState(false)


    // Getting the editor instance and retriving the the text value from selection
    const { view, state } = editor
    const { from, to } = view.state.selection
    const selectionText = state.doc.textBetween(from, to, '')

    // Getting the editor instance and retriving the the previous Link value from selection
    const previousUrl = editor.getAttributes('link').href


    // Handling Setting Link Input
    const setLink = useCallback(() => {
        const url = linkInput


        // cancelled
        if (url === null) {
            setDialogOpen(!dialogOpen)
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            setDialogOpen(!dialogOpen)
            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()

        //close dialog popover
        setDialogOpen(!dialogOpen)

    }, [editor, linkInput, dialogOpen])

    const resetLink = useCallback(() => {

        editor.chain().focus().extendMarkRange('link').unsetLink().run()

        //close dialog popover
        setDialogOpen(!dialogOpen)

        return

    }, [editor, dialogOpen])


    //Setting the retrieved selectionText as text input value
    useEffect(() => {
        if (!selectionText) {
            setTextInput("")
            return
        }

        setTextInput(selectionText)
    }, [selectionText])

    //Setting the retrieved selectionText as text input value
    useEffect(() => {
        if (!previousUrl) {
            setLinkInput("")
            return
        }

        setLinkInput(previousUrl)
    }, [previousUrl])


    return (
        <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
            <DialogTrigger asChild>
                <LinkIcon
                    className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('link') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`} />
            </DialogTrigger>
            <DialogContent className="max-w-[75%] rounded-md sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Link</DialogTitle>
                    <DialogDescription>
                        Make changes to your link here. Click Apply when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                            Text
                        </Label>
                        <Input
                            id="name"
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            className="col-span-3" />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="username" className="text-right">
                            Link
                        </Label>
                        <Input
                            id="username"
                            value={linkInput}
                            onChange={(e) => setLinkInput(e.target.value)}
                            className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="destructive" onClick={() => setDialogOpen(!dialogOpen)}>Cancel</Button>
                    <Button variant="secondary" onClick={resetLink}>Reset</Button>
                    <Button variant="accent" onClick={setLink}>Apply</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default LinkPopUp