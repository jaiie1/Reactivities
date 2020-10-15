import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

interface Iprops{
  openCreateForm: () => void;
}



const Navbar : React.FC<Iprops> = ({openCreateForm}) => {
  return (    
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header><img src="assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
        Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
            <Button onClick={openCreateForm} positive content ='Create Activity'></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
