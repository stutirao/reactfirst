import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
   this.state = { items: [], text: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
     }));
  }
  myChangeHandler = (event) => {
    this.setState({text: event.target.value});
  }
  render() {
    return (
    	<div>
    	<h3>To Do</h3>
        <TodoList items={this.state.items} />
      <form onSubmit={this.mySubmitHandler}>
      <h1>{this.state.text}</h1>
      <p>Enter your task</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));