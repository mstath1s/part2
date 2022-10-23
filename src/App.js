import './App.css';
import Note from './components/Note'

const Header = ({ courseHeader }) => { return (<h1>{courseHeader.name}</h1>) }


const Course = ({ course }) => (
  <div>
    <Header courseHeader={course} />
    <ul>
      <p>{course.parts.map(part =>
        <li key={part.id}>
          {part.name}{': '}
          {part.exercises}
        </li>)}
      </p>
    </ul>
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 78,
        id: 4
      }
    ]
  }


  return <Course course={course} />
}
export default App
