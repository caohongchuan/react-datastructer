import React, { Component } from 'react';
import logo from './common/logo.svg';
import './common/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DrawerUndocked from './common/DrawerUndocked';
import {HashRouter as Router,Route} from 'react-router-dom'
import HeapContainer from './heap/HeapContainer'
import ListContainer from './list/ListContainer'
import BstContainer from './bst/BstContainer'
import TTTreeContainer from './tttree/TTTreeContainer'
import QueueContainer from './queue/QueueContainer'
import StackContainer from './stack/StackContainer'
import PQContainer from './heapQueue/HeapContainer'
import HashContainer from './hash/HashContainer'
import Welcome from './welcome/Welcome';
import WelcomeGame from './welcome/WelcomeGame';
import BSTGame from './games/bstgame';
import TTTreeGame from './games/tttreegame';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './common/common.css';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <Router>
          <div className="App">
            
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <DrawerUndocked className="myDrawer" colored={true} title="打开导航栏"/>
            </div>
       
            <Route exact path="/" component={Welcome}/>
            <Route path="/heap" component={HeapContainer}/>
            <Route path="/list" component={ListContainer}/>
            <Route path="/bst" component={BstContainer}/>
            <Route path="/tttree" component={TTTreeContainer}/>
            <Route path="/queue" component={QueueContainer}/>
            <Route path="/stack" component={StackContainer}/>
            <Route path="/priorityqueue" component={PQContainer}/>
            <Route path="/game" component={WelcomeGame}/>
            <Route path="/gamebst" component={BSTGame}/>
            <Route path="/gametttree" component={TTTreeGame}/>
            <Route path="/hashtable" component={HashContainer}/>
            

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
