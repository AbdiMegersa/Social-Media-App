import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './component/Header'
// import PostSummary from './posts/PostSummary'
import {Routes, Route} from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import HomeScreen from './screens/HomeScreen'
import SignupScreen from './screens/SignupScreen'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'


function App() {


  return (
    <Container fluid className="App p-0 d-flex flex-column">
      <Header />
      <main>
        <Container className="mt-3">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/message" element={<h1>message</h1>} />
            <Route path="/notification" element={<h1>Notification</h1>} />
            
          </Routes>
        </Container>
      </main>
    </Container>
  )
}

export default App
