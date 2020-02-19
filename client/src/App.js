import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar.js';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store.js';

import { loadUser } from './actions/authActions';

import { Container } from 'reactstrap';

class App extends Component {

  componentDidMount() {
    console.log(store.auth, localStorage.getItem('token'));
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </Provider>
    );
  }
  
}

export default App;
