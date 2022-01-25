import React from "react"

export default class Twowaydata extends React.Component{

    state = {
        name:"",
        items: ['Rice','Daal','Fish','Papad','Raita']
    }

    handleChange = (e) =>{
      this.setState({
          name: e.target.value
      })
    }
  
    // handleMyChange(event) {
    //     this.setState({name: event.target.value});
    //   }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
     render(){
      return(
        <div>
         <h2>Add New Item To Menu</h2>
         <h3>{this.state.name}</h3>
         <ol>
          {this.state.items.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>

         <input type="text"
           onChange={this.handleChange}
           value={this.state.name} />
         <button type="button" onClick={this.addItem}>Add</button>
        </div>
        )
     }
  }