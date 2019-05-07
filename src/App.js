import React, { Component } from 'react';
import './App.css';
import AddPerson from './componets/addPerson';
import PersonCmp from './componets/person'

const App = () => {


  rcvrHandler = (state) => {

    const updatedPersons = [...this.state.person,{Name:state.personName,
      Age:state.personAge}]

    
    this.setState ({
      person:updatedPersons
    })

  }


    return (
      <div className="App">
      This is a Testing app in Redux
        <AddPerson  submitHandler = {this.rcvrHandler}/>
        {
          this.state.person.map(pass => {
          return (
          <PersonCmp name = {pass.Name} age={pass.Age}/>
          )
        }) }
      </div>
    );
  
}

export default App;
