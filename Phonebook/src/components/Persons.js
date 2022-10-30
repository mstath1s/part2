const Persons = ({ filtered, full, searchField }) => {
  let temp = []
  console.log(temp.length)

  if (searchField.length === 0) {
    temp = temp.concat(full)
  }
  else {
    temp = temp.concat(filtered)
  }
  console.log('after:', temp.length)
  return (
    temp.map(
      person => {
        return (
          <ul >
            {person.name}{" "}
            {person.number}
          </ul>
        )
      })
  )
}

export default Persons