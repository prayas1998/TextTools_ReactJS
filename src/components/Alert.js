import React from 'react'

function Alert(props) {

    // Capitalize first letter if using the first method.
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
             {/* <strong> {capitalize(props.alert.type)} </strong> : {props.alert.msg} */}
             {/* <strong> {props.alert.msg} </strong>  */}
              <strong>{props.alert.msg}</strong>
        </div>
    )
}

export default Alert
