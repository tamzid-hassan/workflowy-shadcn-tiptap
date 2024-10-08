import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, HomeIcon, MenuIcon } from "lucide-react"
import GearMenu from './GearMenu'
import ItemTypePickerMenu from './ItemTypePickerMenu'
import ToggleCompletedMenu from './ToggleCompletedMenu'
import Search from './Search'

function header() {
    return (
        <div className='flex justify-between px-4 py-2 shadow'>
            <div className='flex gap-x-4'>
                <MenuIcon strokeWidth={1} className='navLinks' />
                <ChevronLeft strokeWidth={1} className='navLinks' />
                <ChevronRight strokeWidth={1} className='navLinks' />
                <HomeIcon strokeWidth={1} className='navLinks' />
            </div>
            <div className='flex gap-x-4'>
                <div className='relative w-40 top-1'>
                    <Search />
                </div>
                <div className='flex gap-x-2'>
                    <ToggleCompletedMenu />
                    <ItemTypePickerMenu />
                    <GearMenu />
                </div>
            </div>
        </div>
    )
}

export default header