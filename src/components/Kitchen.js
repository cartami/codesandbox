import Oven from "../components/Oven"
import Sink from "../components/Sink"


function Kitchen(props) {

    return (
        <>
            <div className={props.className}>
                    <Oven title="Oven" className="bg-orange-600" headerClassName={props.headerClassName}/>
                    <Sink title="Sink" className="bg-orange-900" headerClassName={props.headerClassName}/>
                    <h1 className={props.headerClassName}>{props.title}</h1>
            </div>
        </>
    )
}

export default Kitchen