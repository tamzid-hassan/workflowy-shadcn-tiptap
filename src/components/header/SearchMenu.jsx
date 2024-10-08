import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlobeIcon, HashIcon, AtSignIcon, CalendarDaysIcon, RotateCcwIcon, UsersIcon, EllipsisIcon } from "lucide-react"
import { useState } from "react";
import { Button } from "../ui/button";

function SearchMenu() {

    const [activeTab, setActiveTab] = useState("");

    return (
        <>
            <Tabs defaultValue={activeTab} value={activeTab} className="w-full">
                <TabsList className="gap-x-2">
                    <TabsTrigger value="tab1" onMouseEnter={() => setActiveTab("tab1")}>
                        <GlobeIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab2" onMouseEnter={() => setActiveTab("tab2")}>
                        <HashIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab3" onMouseEnter={() => setActiveTab("tab3")}>
                        <AtSignIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab4" onMouseEnter={() => setActiveTab("tab4")}>
                        <CalendarDaysIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab5" onMouseEnter={() => setActiveTab("tab5")}>
                        <RotateCcwIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab6" onMouseEnter={() => setActiveTab("tab6")}>
                        <UsersIcon className="size-3" />
                    </TabsTrigger>
                    <TabsTrigger value="tab7" onMouseEnter={() => setActiveTab("tab7")}>
                        <EllipsisIcon className="size-3" />
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="py-1">
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </TabsContent>
                <TabsContent value="tab2" className="py-1">
                    <Button variant="accent" size="link">#copy</Button>
                </TabsContent>
                <TabsContent value="tab3" className="py-1">
                    <Button variant="accent" size="link">@mentioned:</Button>
                </TabsContent>
                <TabsContent value="tab4" className="py-1">
                    <div className="space-x-1 space-y-1">
                        <Button variant="accent" size="link">date:</Button>
                        <Button variant="accent" size="link">date-before:</Button>
                        <Button variant="accent" size="link">date-after:</Button>
                        <Button variant="accent" size="link">today</Button>
                        <Button variant="accent" size="link">tomorrow</Button>
                        <Button variant="accent" size="link">yesterday</Button>
                        <Button variant="accent" size="link">this week</Button>
                        <Button variant="accent" size="link">next week</Button>
                    </div>
                </TabsContent>
                <TabsContent value="tab5" className="py-1">
                    <div className="space-x-1 space-y-1">
                        <Button variant="accent" size="link">changed:</Button>
                        <Button variant="accent" size="link">created:</Button>
                    </div>
                </TabsContent>
                <TabsContent value="tab6" className="py-1">
                    <div className="space-x-1 space-y-1">
                        <Button variant="accent" size="link">me:</Button>
                        <Button variant="accent" size="link">others:</Button>
                    </div>
                </TabsContent>
                <TabsContent value="tab7" className="py-1">
                    <div className="space-x-1 space-y-1">
                        <Button variant="accent" size="link">is:</Button>
                        <Button variant="accent" size="link">has:</Button>
                        <Button variant="accent" size="link">text:</Button>
                        <Button variant="accent" size="link">highlight:</Button>
                    </div>
                </TabsContent>
            </Tabs>
        </>
    )
}

export default SearchMenu