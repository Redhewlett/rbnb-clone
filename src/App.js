import NavBar from './components/Navigation/NavBar'
import Filter from './components/Filter/Filter'
import Card from './components/Card/Card'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        <Filter />
      </header>
      <main>
        <Card />
      </main>
    </div>
  )
}

export default App
