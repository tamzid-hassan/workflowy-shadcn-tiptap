import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import SearchMenu from "./SearchMenu"

function Search() {

    const [inputInFocus, setInputInFocus] = useState(false)


    return (
        <div className="absolute top-0 right-0 border rounded-md bg-background">
            <Input className="" type="text" placeholder="Search" onFocus={() => setInputInFocus(true)} onBlur={() => setInputInFocus(false)} />
            {inputInFocus && (
                <div className="px-2">
                    <SearchMenu />
                </div>
            )}
        </div>
    )
}

export default Search