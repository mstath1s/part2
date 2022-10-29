import { useState } from 'react'

const Output = ({ filtered, full, searchField }) => {
  console.log(filtered.length)

   if (searchField.length === 0)
   {
    return (
    full.map(
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
 return (
  filtered.map(
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
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState('')


  const addName = (event) => {
    //prevent submitting html forms
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const isThere = persons.some(n => n.name === newName)
    if (isThere === false) {

      setPersons(persons.concat(nameObject))
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
    setNewNumber('')

  }

  const searchField = (event) => {
    //event.preventDefault()
    // const filteredPersons = persons.filter(n => n.name.includes(newFilter))
    //console.log(`${newFilter} is already added to`)

  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    //  searchField(event)
    const filteredPersons = persons.filter(p => {
      // console.log(p.name)
      return p.name.toLowerCase().includes(event.target.value.toLowerCase())
    }
    )
    setFilteredPersons(filteredPersons)

    //console.log(`${filteredPersons.length} is already added to`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={newFilter}
            onChange={handleFilter} />
        </div>
        <div>

        </div>
      </form>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      {<Output filtered={filteredPersons} full={persons} searchField={newFilter}/>}

      
    </div >
  )
}

export default App