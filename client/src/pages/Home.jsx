import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NoteEditor from '../components/NoteEditor'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <Sidebar />
        <NoteEditor />
      </div>
    </div>
  )
}

export default Home
