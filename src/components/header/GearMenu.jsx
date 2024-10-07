import { Button } from "@/components/ui/button"
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

import { DotsVerticalIcon, GearIcon, ExitIcon, ExclamationTriangleIcon, InfoCircledIcon, TrashIcon, DownloadIcon, LineHeightIcon, TextAlignMiddleIcon, FileIcon, Share2Icon, SymbolIcon, ReloadIcon, ResetIcon } from "@radix-ui/react-icons"


function GearMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DotsVerticalIcon variant="outline" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <ResetIcon className="size-4" />

                        <p className="ml-2">Undo</p>
                        <DropdownMenuShortcut>ctrl+z</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ReloadIcon className="size-4" />
                        <p className="ml-2">Redo</p>
                        <DropdownMenuShortcut>ctrl+y</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SymbolIcon className="size-4" />
                        <p className="ml-2">Save</p>
                        <DropdownMenuShortcut>ctrl+s</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <p className="ml-3 text-xs text-neutral-500">Autosaved 25 seconds ago</p>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <LineHeightIcon className="size-4" />
                        <p className="ml-2">Expand All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <TextAlignMiddleIcon className="size-4" />
                        <p className="ml-2">Collapse All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FileIcon className="size-4" />
                        <p className="ml-2">Print</p>
                        <DropdownMenuShortcut>ctrl+p</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Share2Icon className="size-4" />
                        <p className="ml-2">Export All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DownloadIcon className="size-4" />
                        <p className="ml-2">Download Files</p>
                    </DropdownMenuItem>
                    {/* <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <GearIcon className="size-4" />
                        <p className="ml-2">Settings</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <InfoCircledIcon className="size-4" />
                        <p className="ml-2">Help</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ExclamationTriangleIcon className="size-4" />
                        <p className="ml-2">Report a problem</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <TrashIcon className="size-4" />
                        <p className="ml-2">Trash</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <ExitIcon className="size-4" />
                    <p className="ml-2">Logout</p>
                    <DropdownMenuShortcut>ctrl+q</DropdownMenuShortcut>
                </DropdownMenuItem>
                <p className="ml-3 text-xs text-neutral-500">xyz@gmail.com</p>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GearMenu