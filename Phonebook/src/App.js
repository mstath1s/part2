import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filters from './components/Filters'
import PersonForm from './components/PersonForm'
import axios from 'axios'

// const promise = axios.get('http://localhost:3001/persons')

// promise.then(response => {
//   console.log(response)
// })
// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   console.log(notes)
// })


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState('')

  const hook =() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  console.log('render', persons.length, 'persons')

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