
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

import { EllipsisVerticalIcon, SettingsIcon, RotateCwIcon, LogOutIcon, BugIcon, InfoIcon, TrashIcon, DownloadIcon, Maximize2Icon, ChevronsDownUpIcon, FileIcon, Share2Icon, SaveIcon, RefreshCcwIcon } from "lucide-react"


function GearMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EllipsisVerticalIcon strokeWidth={1.2} className="navLinks" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 mr-2">
                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator /> */}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <RefreshCcwIcon className="size-4" strokeWidth={1} />

                        <p className="ml-2">Undo</p>
                        <DropdownMenuShortcut>Ctrl+Z</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <RotateCwIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Redo</p>
                        <DropdownMenuShortcut>Ctrl+Y</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SaveIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Save</p>
                        <DropdownMenuShortcut>Ctrl+S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <p className="ml-3 text-xs text-neutral-500">Autosaved 25 seconds ago</p>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Maximize2Icon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Expand All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <ChevronsDownUpIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Collapse All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FileIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Print</p>
                        <DropdownMenuShortcut>Ctrl+P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Share2Icon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Export All</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DownloadIcon className="size-4" strokeWidth={1} />
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
                        <SettingsIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Settings</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <InfoIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Help</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BugIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Report a problem</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <TrashIcon className="size-4" strokeWidth={1} />
                        <p className="ml-2">Trash</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOutIcon className="size-4" strokeWidth={1} />
                    <p className="ml-2">Logout</p>
                    <DropdownMenuShortcut>Ctrl+Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                <p className="ml-3 text-xs text-neutral-500">xyz@gmail.com</p>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GearMenu