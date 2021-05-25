import React from 'react';
import {
  Grid,
  Segment,
  Button,
  Input,
  Select
} from 'semantic-ui-react';
import { DataService } from '../services/DataServiece';
import {Link} from 'react-router-dom';
const statusOption = [{
    key: 'Active', value: 'Active', text: 'Active' 
},{
    key: 'InActive', value: 'InActive', text: 'InActive' 
}]
export class Create extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            status:'',
            isDetailsPage: false
        }
        this.dataService = new DataService();
        this.state.users = this.dataService.getUsers();
        this.state.id = (this.state.users.length+1);
        if ( props.match.params &&  props.match.params.id ) {
            let user  = this.dataService.getUser(props.match.params.id);
            this.state.id = user.id;
            this.state.firstName = user.firstName;
            this.state.lastName = user.lastName;
            this.state.email = user.email;
            this.state.phone = user.phone;
            this.state.status = user.status;
            this.state.isDetailsPage = true;
        }
    }
    add(){
        let users = this.state.users;
        users.push({
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email:this.state.email,
            phone:this.state.phone,
            status:this.state.status
        });
        this.dataService.updateUsers(users);
        this.props.history.push('/');
    }
    update(){
        let users = this.state.users;
        let index = users.findIndex((i)=>i.id == this.state.id);
        users[index] = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email:this.state.email,
            phone:this.state.phone,
            status:this.state.status
        };
        this.dataService.updateUsers(users);
        this.props.history.push('/');
    }
    render(){
        let users = this.dataService.getUsers();
        let btnDisable = false;
        if (
            this.state.firstName == '' ||
            this.state.lastName == '' ||
            this.state.email == '' ||
            this.state.phone == '' ||
            this.state.status == ''
        ){
            btnDisable = true;
        }
        return(
             <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={2} >
                            </Grid.Column>
                            <Grid.Column width={12} >
                                <Button as={Link} to='/' primary style={{ float: 'right' }}>
                                    Back
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={2} >
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={2} >
                            </Grid.Column>
                            <Grid.Column width={12} >
                                <Input fluid value={this.state.firstName} style={{margin:'15px 0px'}} onChange={(e)=>this.setState({firstName:e.target.value})} placeholder='First Name' />
                                <Input fluid value={this.state.lastName} style={{margin:'15px 0px'}} onChange={(e)=>this.setState({lastName:e.target.value})} placeholder='Last Name' />
                                <Input fluid value={this.state.email} style={{margin:'15px 0px'}} onChange={(e)=>this.setState({email:e.target.value})} placeholder='Email' />
                                <Input fluid value={this.state.phone} style={{margin:'15px 0px'}} onChange={(e)=>this.setState({phone:e.target.value})} placeholder='Phone Number' />
                                <Select fluid value={this.state.status} placeholder='Status' onChange={(e,v)=>this.setState({status:v.value})} options={statusOption} />
                            </Grid.Column>
                            <Grid.Column width={2} >
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={2} >
                            </Grid.Column>
                            <Grid.Column width={12} >
                                {
                                    !this.state.isDetailsPage &&
                                    <Button primary disabled={btnDisable} onClick={this.add.bind(this)}>
                                        Add 
                                    </Button>
                                }
                                {
                                    this.state.isDetailsPage &&
                                    <Button primary disabled={btnDisable} onClick={this.update.bind(this)}>
                                        Update 
                                    </Button>
                                }
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