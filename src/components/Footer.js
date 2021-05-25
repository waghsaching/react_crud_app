import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react';
export class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                 <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Dr. Shaun Murphy, a surgical resident with autism.  
                            </p>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}