import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number:'5541708'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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
      console.log(`${newName} is already added to phonebook`)
    }
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
  return (
    <div>
      <h2>Phonebook</h2>
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
      {
        persons.map(
          person => {
            return (
              <ul>
                {person.name}{" "}
                {person.number}
              </ul>
            )
          })
      }
    </div>
  )
}

export default App