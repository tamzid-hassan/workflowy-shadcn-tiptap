import { Button } from '../ui/button'
import { HamburgerMenuIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons"
import GearMenu from './GearMenu'

function header() {
    return (
        <div className=''>
            <div>
                <Button variant="outline" size="icon">
                    <HamburgerMenuIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <ChevronLeftIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <ChevronRightIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                    <HomeIcon className="w-4 h-4" />
                </Button>
            </div>
            <div>
                <div>

                </div>
                <div>
                    <GearMenu />
                </div>
            </div>
        </div>
    )
}

export default header