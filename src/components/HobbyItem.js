function HobbyList(props) {
    return (
        <li>{props.value} {props.isChecked && 'v'}</li>
    )
}

export default HobbyItem;