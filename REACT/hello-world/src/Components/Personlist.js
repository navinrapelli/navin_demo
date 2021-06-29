import React from 'react'
import Person1 from './Person'

function Personlist() {
    const Person=[
        {
            id:1,
            name:"Navin",
            skill:"java"

        },
        {
            id:2,
            name:"Pavan",
            skill:"C"

        },
        {
            id:3,
            name:"Asha",
            skill:"Python"

        },

    ]

    const Personlist1=Person.map(person=><Person1 key={person.id} person={person}/>)
                                         //<h2> i am { person.name} my skill s are { person.skill}</h2>
    return (
        <div>
                 {Personlist1}
        </div>
    )
}

export default Personlist
