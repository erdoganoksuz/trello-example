
const ListHeader = ({ onChange, val }) => {
    return <input type="text" onChange={onChange} placeholder="Write list name..." value={val} className="list-header u-full-width" />
}

export default ListHeader;