import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:false,
            username: '',
            password: '',
        };
        if(this.status){
            this.props.history.push('/home');
        }
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }
    handleSubmit=()=>{

        const params = new URLSearchParams();
        params.append('username',this.state.username);
        params.append('password',this.state.password);
        this.setState({status:true})

        // axios.post('http://localhost:3010/api/login',params)
        //   .then(response =>{
        //       console.log(response);
        //       this.setState({status:true})
        //     alert(response.statusText);
        //   })
        //   .catch(error=>{
        //       console.log(this.state.status);
        //       if(error){
        //         alert("Worng username or Password")
        //       }
        //   });   
    }

    handleUsernameChange(event){
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password:event.target.value});
    }

    render() {

        if(this.state.status){
            this.props.history.push('/home');
        }
        return (
            <div className="form_wrapper"  style={{
                background: '#f7f7f7',
                boxShadow: '1px 1px 10px rgba(0,0,0,0.25)'
            }}>
                <div className="login_title">
                    <h2>Softwarica</h2>
                </div>
                
                <form id="login_form">
                    <TextField
                        value = {this.state.username}
                        className="input-form"
                        label="Username"
                        id="mui-theme-provider-standard-input"
                        onChange = {this.handleUsernameChange}
                    />
                     <TextField
                        
                        className="input-form"
                        type="password"
                        label="Password"
                        id="mui-theme-provider-standard-input"
                        onChange = {this.handlePasswordChange}
                        />
                    
                    <Button className='buttonLogin'
                        variant = 'contained'
                        margin = '40px'
                        text='Log In'
                        bck = '#1fa736'
                        onClick={this.handleSubmit}
                        style={{
                            background: '#1fa736',
                            color: '#fff',
                            margin: '40px',
                            padding: '10px 30px',
                            fontSize: '1em',
                            position: 'relative',
                            borderRadius:'50px'
                        }}
                    >
                        Log In
                        </Button>

                    
                    
                
                </form>
                
            </div>
        );
    }
}

export default LoginForm;