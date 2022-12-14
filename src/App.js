import './App.css';

// const Header = ({ courseHeader }) => {
//   const names = courseHeader.map(c=><li key={c.id}>c.name</li>)
//    return (<h1>{names}</h1>) 
//   }

const TotalSum =({course}) => {
  return ( 'total of ' +
    course.parts.reduce((s, part) => {
  return s + part.exercises
}, 0)+' exercises'
  )
}

const Parts = ({course}) =>{
return(course.parts.map(m =>
<p key={m.id}>
{m.name}{': '}
{m.exercises}
</p>

)

)
}

const Course = ({course}) => {
  // const names = c=><li key={c.id}> 
  // <h2>{c.name}</h2> 
  return(
  <li key = {course.id}>
 {<Parts course = {course}/>} 
{<TotalSum course= {course}/>}
  </li>
  // return (
  // <div>  
  //   {names}
  // </div>
  // )
  )
}
const Courses = ({ courses }) => {

  const names = courses.map(c=><ul key={c.id}> 
  <h2>{c.name}</h2> 
    {<Course course = {c}/>} 
   </ul>)

  return (
  <div>  
    {names}
  </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}
export default App
