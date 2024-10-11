import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { BanIcon, PaintRollerIcon } from "lucide-react"
import { Button } from "./ui/button"


function TextStylePopUp({ editor, menuPosition }) {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <PaintRollerIcon className={`size-6 p-1 rounded-md  hover:bg-secondary hover:text-foreground  ${editor.isActive('textStyle') ? 'bg-secondary text-foreground' : 'text-muted-foreground'}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{
                position: 'absolute',
                top: `${menuPosition.y}px`,
                left: `${menuPosition.x}px`,
            }}>
                <DropdownMenuGroup className="flex -space-x-2">
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <Button
                            onClick={() => editor.chain().focus().unsetColor().run()}
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:border-red-600"><BanIcon className="size-4" /></Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <Button
                            onClick={() => editor.chain().focus().setColor('#dc2626').run()}
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:border-red-600">A</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <Button
                            onClick={() => editor.chain().focus().setColor('#ea580c').run()}
                            size="sm"
                            variant="outline"
                            className="text-orange-600 hover:border-orange-600">A</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <Button
                            onClick={() => editor.chain().focus().setColor('#9333ea').run()}
                            size="sm"
                            variant="outline"
                            className="text-purple-600 hover:border-purple-600">A</Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <Button
                            onClick={() => editor.chain().focus().setColor('#2563eb').run()}
                            size="sm"
                            variant="outline"
                            className="text-blue-600 hover:border-blue-600">A</Button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default TextStylePopUp