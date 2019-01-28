import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
// import DrawerComponent from '../Drawer';
import AppBarComponent from '../AppBar';

class Test extends Component {
  render() {

    return (
      <div>
        <AppBarComponent></AppBarComponent>
        {/* <DrawerComponent></DrawerComponent> */}
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default Test;
