import React,{Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

class App extends Component{

  render(){
    return(
      <div className='App'>
        <Palette {...seedColors[3]} />
      </div>
    );
  }
}
export default App;
