import React from 'react'
import { Name, Place } from './App'

const ChildC = () => {
    return (
        <div>
            <Name.Consumer>
                {(name) => {
                    return (
                        <Place.Consumer> 
                            {(place) => {
                            return (
                            <h1>
                                My name is {name} from {place}
                            </h1>
                            )
                        }} 
                        </Place.Consumer>
                    )
                }}
            </Name.Consumer>

        </div>
    )
}

export default ChildC
