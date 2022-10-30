const Filters = ({newFilter, handleFilter})=> {
  return (<div>
    {/* filter component  */}
    filter shown with
    <input value={newFilter}
      onChange={handleFilter} />
  </div>)
}

  export default Filters