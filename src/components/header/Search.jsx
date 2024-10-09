import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import SearchMenu from "./SearchMenu"
import { SearchIcon } from "lucide-react"

function Search() {

    const [inputInFocus, setInputInFocus] = useState(false)


    return (
        <div className="absolute top-0 right-0 border rounded-md bg-background">
            <div className="flex ml-1 place-items-center">
                <SearchIcon strokeWidth={1} className="size-4" />
                <Input className="" type="text" placeholder="Search" onFocus={() => setInputInFocus(true)} onBlur={() => setInputInFocus(false)} />
            </div>
            {inputInFocus && (
                <div className="px-2">
                    <SearchMenu />
                </div>
            )}
        </div>
    )
}

export default Search