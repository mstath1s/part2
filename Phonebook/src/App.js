import { useState } from 'react'
import Persons from './components/Persons'
import Filters from './components/Filters'
import PersonForm from './components/PersonForm'


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
    else { alert(` is already added to phonebook`) }

    setNewName('')
    setNewNumber('')
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
    const filteredPersons = persons.filter(p => {
      return p.name.toLowerCase().includes(event.target.value.toLowerCase())
    }
    )

    setFilteredPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <Filters newFilter={newFilter} handleFilter={handleFilter} />
      </form>

      <h2>Add a new</h2>
      <PersonForm addName={addName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber} />

      <h2>Numbers</h2>
      {/* Persons */}
      {<Persons filtered={filteredPersons} full={persons} searchField={newFilter} />}
    </div >
  )
}

export default App