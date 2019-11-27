import React from 'react'
import './App.css';
import { ListOfCards } from './components/ListOfCards'
import { Form } from './components/Form'
import { StateProvider } from './state'
import { initialState, reducer } from './state/reducer'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <ListOfCards></ListOfCards>
        <br/>
        <Form />
      </div>
    </StateProvider>
  )
}

export default App;
