import React, { Component } from 'react';
import FlexView from 'react-flexview';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <FlexView hAlignContent='center'  className="App">
        <FlexView column height={500} hAlignContent='center' className="App-header">
	    <FlexView vAlignContent='center' grow={2}>
          	<img src={logo} className="App-logo" alt="logo" />
            </FlexView>
	    <FlexView shrink>
          	<p>
            	Edit <code>src/App.js</code> and save to reload.
          	</p>
	    </FlexView>
	    <FlexView vAlignContent='center' grow={1}>
          	<form method="POST" action="https://reqres.in/api/login/">
	    		email:<br/>
  			<input type="text" name="email" value="test@mail.com"/><br/>
  			pass:<br/>
			<input type="password" name="password" value="test123"/><br/><br/>
			<input type="submit" value="Submit"/>
	    	</form>
	    </FlexView>
        </FlexView>
      </FlexView>
    );
  }
}

export default App;
