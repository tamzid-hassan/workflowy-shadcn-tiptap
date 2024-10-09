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

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { CheckIcon } from "lucide-react"
import { useState } from "react"

function ToggleCompletedMenu() {

    const [isHovering, setIsHovering] = useState(false)
    const [isChecked, setIsChecked] = useState(false)


    return (
        <DropdownMenu open={isHovering}>
            <DropdownMenuTrigger asChild>
                <CheckIcon
                    onMouseOver={() => setIsHovering(!isHovering)}
                    strokeWidth={1.5}
                    className={`navLinks ${isChecked ? "text-accent" : "text-neutral-500"}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent onMouseLeave={() => setIsHovering(!isHovering)} className="w-40 mt-2 mr-2">
                <DropdownMenuGroup>
                    <DropdownMenuItem className="focus:bg-background focus:text-foreground">
                        <div className="flex items-center space-x-1">
                            <Switch
                                id="show-completed"
                                size="sm"
                                checked={isChecked}
                                onCheckedChange={() => setIsChecked(!isChecked)}
                            />
                            <Label htmlFor="show-completed" className="text-xs">Show Completed</Label>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ToggleCompletedMenu