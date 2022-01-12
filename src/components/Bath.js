

function Bath(props) {
    
    return (
        <>
            <div className={props.className}>
                <h1 className={props.headerClassName}>{props.size}{props.title}</h1>
            </div>
        </>
    )
}

export default Bath