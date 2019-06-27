// import React from 'react';
// import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // F1
      contact: {
        name: '',
        email: '',
        password: '',
        // F2
        address_l1: '',
        address_l2: '',
        city: '',
        state: '',
        zip: '',
        // F3
        ccard: '',
        exp_date: '',
        bill_zip: '',
        f2_show: false,
        f3_show: false
      },
      count: 0
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    console.log('Testing, testing, 1, 2, 3....');
  }

  onHandleSubmit(e) {
    e.preventDefault();
    var count = ++this.state.count;
    if (count === 1) { // conditionally render to form2

    } else if (count === 2) { // conditionally render to form3

    } else { // post data and render back to form 1

    }
    this.setState({
      count: count
    })
  }

  onHandleChange(e, propertyName) {
    const updateContact = this.state.contact;
    // console.log(`${propertyName}:`, e.target.value);
    updateContact[propertyName] = e.target.value;
    this.setState({
      contact: updateContact
    })
  }

  render() {
    return (
      <div>
        REACT AAAAAAAAAAAAAAAAAAAAAAPPP
        <form onSubmit={this.onHandleSubmit}>
          <p>Name: <input name="name" onChange={(e)=>this.onHandleChange(e, 'name')} 
          value={this.state.contact.name}
            ></input></p>

          <p>E-mail: <input name="email" onChange={(e)=>this.onHandleChange(e, 'email')} 
          value={this.state.contact.email}
            ></input></p>

          <p>Password: <input name="password" type="password" onChange={(e)=>this.onHandleChange(e, 'password')} 
          value={this.state.contact.password}
            ></input></p>

          <button>Next</button>
        </form>
      </div>
    )
  }
}

// // stateless component F1
// const formOne = () => {
//   return (
//     <form>
//       <p>Name: <input></input></p>
//       <p>E-mail: <input></input></p>
//       <p>Password: <input></input></p>
//       <button>Next</button>
//     </form>
//   )
// }
// // stateless component F2
// const formTwo = () => {
//   return (
//     <div>
//       <form>
//         <p>Address1: <input name="address_l1"></input></p>
//         <p>Address2: <input name="address_l2"></input></p>
//         <p>City: <input name="city"></input></p>
//         <p>State: <input name="state"></input></p>
//         <p>Zip: <input name="zip"></input></p>
//         <button>Next</button>
//       </form>
//     </div>
//   )
// }

// //stateless component F3
// const formThree = () => {
//   return (
//     <div>
//       <form>
//         <p>Credit Card: <input name="ccard"></input></p>
//         <p>Expiration Date: <input name="exp_date"></input></p>
//         <p>Billing Zipcode: <input name="bill_zip"></input></p>
//         <button>Next</button>
//       </form>
//     </div>

//   )
// }
ReactDOM.render(<App />, document.getElementById('app'));