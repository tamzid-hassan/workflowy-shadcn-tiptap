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

import { ListIcon, Heading1Icon, Heading2Icon, PilcrowIcon, CodeSquareIcon, TextQuoteIcon, PanelsLeftBottom } from "lucide-react"

function ItemTypePickerMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <ListIcon strokeWidth={1.5} className="navLinks" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 mt-2 mr-2">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <ListIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Bullets</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Heading1Icon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Heading 1</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Heading2Icon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Heading 2</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <PilcrowIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Paragraph</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <PanelsLeftBottom className="size-4" strokeWidth={1} />
                        <p className="ml-2">Board</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <TextQuoteIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Qoute</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CodeSquareIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Code Block</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ItemTypePickerMenu