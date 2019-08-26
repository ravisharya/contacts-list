import React from 'react';
import SimpleTable from './SimpleTable';
import './App.css';

const initialFormState = {
  name: '',
  address: '',
  phone: '',
  email: '',
  note: '',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialFormState,
      tableData: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = [...this.state.tableData];
    data.push({
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      note: this.state.note
    })
    this.setState({
      tableData: data
    });
  }

  handleClear() {
    this.setState({
      ...initialFormState
    });
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Enter your Personal information:</legend>
            <label>
              Name:
            </label>
            <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange} />
            <br />
            <label>
              Address
            </label>
            <br />
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleInputChange} />
            <br />
            <label>
              Phone:
            </label>
            <br />
            <input
              name="phone"
              type="phone"
              value={this.state.phone}
              onChange={this.handleInputChange} />
            <br />
            <label>
              Email
            </label>
            <br />
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
            <br />
            <label>
              Note
            </label>
            <br />
            <input
              name="note"
              type="textarea"
              value={this.state.note}
              onChange={this.handleInputChange} />
            <br />
            <input type="submit" value="Submit" className="submit" />
            <button type="button" onClick={(evt) => this.handleClear()}>Clear</button>
          </fieldset>
        </form>
        <div className="tableHeading">Details of contacts added</div>
        <SimpleTable data={this.state.tableData}></SimpleTable>
      </div>
    );
  }
}

export default App;
