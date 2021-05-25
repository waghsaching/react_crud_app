import React from 'react';
import {
  Grid,
  Segment,
  Table,
  Icon,
  Button
} from 'semantic-ui-react';
import { DataService } from '../services/DataServiece';
import {Link} from 'react-router-dom';
export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
        this.dataService = new DataService();
    }
    delete(id){
        this.dataService.deleteUser(id);
        this.setState({});
    }
    render(){
        let users = this.dataService.getUsers();
        return(
             <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={2} >
                            </Grid.Column>
                            <Grid.Column width={12} >
                                <Button as={Link} to='/create' primary style={{ float: 'right' }}>
                                    Add
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={2} >
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={2} >
                            </Grid.Column>
                            <Grid.Column width={12} >
                                <Table celled>
                                    <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>First Name</Table.HeaderCell>
                                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Actions</Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {
                                            users.map((i)=>{
                                                return(<Table.Row>
                                                    <Table.Cell>{i.firstName}</Table.Cell>
                                                    <Table.Cell>{i.lastName}</Table.Cell>
                                                    <Table.Cell>{i.email}</Table.Cell>
                                                    <Table.Cell>{i.phone}</Table.Cell>
                                                    <Table.Cell>{i.status}</Table.Cell>
                                                    <Table.Cell>
                                                        <Button icon onClick={this.delete.bind(this,i.id)}>
                                                            <Icon name='trash' />
                                                        </Button>
                                                        <Button icon as={Link} to={'/details/'+i.id}>
                                                            <Icon name='pencil' />
                                                        </Button>
                                                    </Table.Cell>
                                                </Table.Row>)
                                            })
                                        }
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                            <Grid.Column width={2} >
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}