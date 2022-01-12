

function LivingRoom(props) {
    
    return (
        <>
            <div className={props.className}>
                <h1 className={props.headerClassName}>{props.title}</h1>
            </div>
        </>
    )
}

export default LivingRoom