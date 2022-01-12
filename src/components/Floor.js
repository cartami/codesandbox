import React from "react";
import Bedroom from "../components/Bedroom"
import Kitchen from "../components/Kitchen"
import Bath from "./Bath"
import LivingRoom from "../components/LivingRoom"


function Floor(props) {

    return (
        <div className="grid grid-rows-[2fr_1fr] w-full h-screen content">
            <div className="grid grid-rows-[2fr_1fr] grid-cols-[2fr_2fr_1fr]">
                <Bedroom className="bg-teal-900" headerClassName={props.headerClassName} title="Bedroom " bedNum={1} />
                <Kitchen className="bg-orange-400 row-start-1 row-end-3 grid grid-rows-[1fr_5fr] grid-cols-[1fr_1fr]"headerClassName={props.headerClassName} title="Kitchen" />
                <Bath className="bg-green-500 row-start-2 col-start-1" headerClassName={props.headerClassName} size="Full"title=" Bath" />
                <LivingRoom className="bg-orange-200 col-start-2 row-start-1 row-end-3" headerClassName={props.headerClassName} title="Living Room" />
            </div>
            <div className="grid grid-cols-[2fr_1fr_2fr]">
                <Bedroom className="bg-teal-900" headerClassName={props.headerClassName} title="Bedroom " bedNum={2}/>
                <Bath className="bg-green-500" headerClassName={props.headerClassName} size="Half"title=" Bath" />
                <Bedroom className="bg-teal-900" headerClassName={props.headerClassName} title="Bedroom " bedNum={3}/>
            </div>

        </div>
    )
}

export default Floor

