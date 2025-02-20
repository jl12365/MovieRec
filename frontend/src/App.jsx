import './App.css'
import Card from './components/Card'

function App() {
  return (

    <>
    
    <Card movie={{title: "Alice Borderland", release_date: "2024"}} />
    <Card movie={{title: "Interstellar", release_date: "2023"}} />
    <Card movie={{title: "Cinderella", release_date: "2022"}} />

    </>
  )
}

export default App
