import React, { Component } from 'react'
import {
  Button,
  Container, 
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{  padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item position='right'>
                    <Button as={Link} to='/' inverted={!fixed}>
                      Home
                    </Button>
                    
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }
  
