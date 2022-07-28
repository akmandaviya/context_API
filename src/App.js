import React, { createContext } from 'react'
import ChildA from './ChildA'

const Name = createContext();
const Place = createContext();

const App = () => {
  return (
    <div>

      <Name.Provider value={'AbdulKarim'}>
        <Place.Provider value={'Gujarat'}>
          <ChildA />
        </Place.Provider>
      </Name.Provider> 

    </div>

  )
}

export default App
export {Name, Place};


// Steps for passing data through context API:
// -> create context (what we want to pass) -> export it under default, then only it can be imported
// -> provide (that passes the data) -> takes a value to pass
// -> conusmer ( that uses the data) -> takes a callback function 