import React, {Component} from 'react';

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personName:"",
            personAge:""
        }
    }

    valueAssignHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        if(name == 'personName' ) {
        this.setState({
            personName: value
        })
        } else {
            this.setState({ personAge: value })   
            }
        }

        statePassing = () => {
            let state = {...this.state}
            this.props.submitHandler(state);

        }


        render() {
            return (
                <div>
                    <input type = 'input' onChange = {this.valueAssignHandler} name= 'personName'
                    value = {this.state.personName} placeholder = 'Type person name here,..' />

                    <input type = 'number' onChange = {this.valueAssignHandler} name= 'personAge'
                    value = {this.state.personAge} placeholder = 'Type person age here,..' />
                    <button onClick = {this.statePassing} type = 'button'>SUBMIT</button>
                </div>
            )
        }
}

    export default AddPerson;
