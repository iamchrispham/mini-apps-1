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
      },
      f3_show: false,
      f2_show: false,
      f1_show: true
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.enableFormTwo = this.enableFormTwo.bind(this);
    this.enableFormThree = this.enableFormThree.bind(this);
  }

  componentDidMount() {
    console.log('Testing, testing, 1, 2, 3....');
  }

  onHandleSubmit(e) {
    e.preventDefault();
  }

  onHandleChange(e, propertyName) {
    const updateContact = this.state.contact;
    updateContact[propertyName] = e.target.value;
    this.setState({
      contact: updateContact
    })
  }

  enableFormTwo() {
    this.setState({
      f1_show: false,
      f2_show: true
    })
  }

  enableFormThree() {
    this.setState({
      f2_show: false,
      f3_show: true
    })
  }

  formOne() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <p>Name: <input name="name" onChange={(e) => this.onHandleChange(e, 'name')}
            value={this.state.contact.name}
          ></input></p>

          <p>E-mail: <input name="email" onChange={(e) => this.onHandleChange(e, 'email')}
            value={this.state.contact.email}
          ></input></p>

          <p>Password: <input name="password" type="password" onChange={(e) => this.onHandleChange(e, 'password')}
            value={this.state.contact.password}
          ></input></p>

          <button onClick={this.enableFormTwo}>Next</button>
        </form>
      </div>
    )
  }

  formTwo() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <p>Address1: <input name="address_l1" onChange={(e) => this.onHandleChange(e, 'address_l1')}
            value={this.state.contact.address_l1}
          ></input></p>
          <p>Address2: <input name="address_l2" onChange={(e) => this.onHandleChange(e, 'address_l2')}
            value={this.state.contact.address_l2}
          ></input></p>
          <p>City: <input name="city" onChange={(e) => this.onHandleChange(e, 'city')}
            value={this.state.contact.city}
          ></input></p>
          <p>State: <input name="state" onChange={(e) => this.onHandleChange(e, 'state')}
            value={this.state.contact.state}></input></p>
          <p>Zip: <input name="zip" onChange={(e) => this.onHandleChange(e, 'zip')}
            value={this.state.contact.zip}></input></p>
          <button onClick={this.enableFormThree}>Next</button>
        </form>
      </div>
    )
  }

  formThree() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <p>Credit Card: <input name="ccard" onChange={(e) => this.onHandleChange(e, 'ccard')}
            value={this.state.contact.ccard}></input></p>
          <p>Expiration Date: <input name="exp_date" onChange={(e) => this.onHandleChange(e, 'exp_date')}
            value={this.state.contact.exp_date}></input></p>
          <p>Billing Zipcode: <input name="bill_zip" onChange={(e) => this.onHandleChange(e, 'bill_zip')}
            value={this.state.contact.bill_zip}></input></p>
          <button onClick={console.log('STUFF', this.state)}>Next</button>
        </form>
      </div>
    )
  }

  render() {
    // var formOne = (
    //   <div>
    //     <form onSubmit={this.onHandleSubmit}>
    //       <p>Name: <input name="name" onChange={(e) => this.onHandleChange(e, 'name')}
    //         value={this.state.contact.name}
    //       ></input></p>

    //       <p>E-mail: <input name="email" onChange={(e) => this.onHandleChange(e, 'email')}
    //         value={this.state.contact.email}
    //       ></input></p>

    //       <p>Password: <input name="password" type="password" onChange={(e) => this.onHandleChange(e, 'password')}
    //         value={this.state.contact.password}
    //       ></input></p>

    //       <button onClick={this.enableFormTwo}>Next</button>
    //     </form>
    //   </div>
    // );

    return (
      <div>
        REACT AAAAAAAAAAAAAAAAAAAAAAPPP
        {this.state.f1_show ? this.formOne() : null}
        {this.state.f2_show ? this.formTwo() : null}
        {this.state.f3_show ? this.formThree() : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));