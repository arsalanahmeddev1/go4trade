import {Routes, Route} from 'react-router-dom'  
// import './styles/index.css'
import Layout from './Layouts/Layout'
import {Home} from './pages';
function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Layout>
  )
}

export default App
