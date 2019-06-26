// import React from 'react';
// import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // F1
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
    };
  }

  componentDidMount() {
    console.log('Testing, testing, 1, 2, 3....');
    setTimeout(() =>
      ReactDOM.render(formOne(), document.getElementById('app')), 2000);
  }

  
  render() {
    return (
      <div>
        REACT AAAAAAAAAAAAAAAAAAAAAAPPP
      </div>
    )
  }
}

// stateless component F1
const formOne = () => {
  return (
    <form>
      <p>Name: <input></input></p>
      <p>E-mail: <input></input></p>
      <p>Password: <input></input></p>
      <button>Next</button>
    </form>
  )
}
// stateless component F2
const formTwo = () => {
  return (
    <div>
      <p>Address: <input></input></p>
      <p>Address: <input></input></p>
      <p>City: <input></input></p>
      <p>State: <input></input></p>
      <p>Zip: <input></input></p>
      <button>Next</button>
    </div>
  )
}

//stateless component F3
const formThree = () => {
  return (
    <div>
      <p>Credit Card: <input></input></p>
      <p>Expiration Date: <input></input></p>
      <p>Billing Zipcode: <input></input></p>
      <button>Next</button>

    </div>

  )
}
ReactDOM.render(<App />, document.getElementById('app'));