import React, {Component} from 'react';
import axios from 'axios';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Button,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'block',
      flexWrap: 'wrap',
      width:'100%',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    p:{
      maringTop:0,
      marginBottom:0,
      paddingTop:0,
      paddingBottom:0,
    }
  }));

const PostStudent = () =>{
  const params = new URLSearchParams();
  params.append('name', 'Rajesh');
  axios.post('http://localhost:3010/api/student',params)
  .then(function (response) {
    console.log(response);
    alert("Person Added Succesfully");
  })
  .catch(function (error) {
    console.log({error});
    alert(error.message);
  });
}


export default function AddStudent(){
    const classes = useStyles();

    const handleChange = name => event => {
      // setValues({ ...values, [name]: event.target.value });
    };

    return(
      <form className = {classes.container} noValidate autoComplete="off">
        <p className = {classes.p}>
        <TextField
          required
          id="standard-uncontrolled"
          label="Name"
          className={classes.textField}
          margin="normal"
          />
        </p>
        <p className={classes.p}>
          <TextField
          required
          id="standard-uncontrolled"
          label="Gender"
          className={classes.textField}
          margin="normal"
          />
          </p>

          <TextField
          required
          id="standard-uncontrolled"
          label="Date of Birth"
          className={classes.textField}
          margin="normal"
          />
          <br/>

          <p className = {classes.p}>
          <TextField
          required
          id="standard-uncontrolled"
          label="Address"
          className={classes.textField}
          margin="normal"
          />

          <TextField
          required
          id="standard-uncontrolled"
          label="District"
          className={classes.textField}
          margin="normal"
          />

          <TextField
          required
          id="standard-uncontrolled"
          label="Zone"
          className={classes.textField}
          margin="normal"
          />

          <TextField
          required
          id="standard-uncontrolled"
          label="Country"
          className={classes.textField}
          margin="normal"/>
          </p>

          <p className={classes.p}>
          <TextField
          required
          id="standard-uncontrolled"
          label="Phone No."
          className={classes.textField}
          margin="normal"
          />
          </p>
          <p className={classes.p}>
          <Button className='buttonLogin'
                        variant = 'contained'
                        margin = '40px'
                        text='Log In'
                        bck = '#1fa736'
                        color="#fff"
                        link="/home"
                        onClick={PostStudent}
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
                        Save
                        </Button>
          </p>

        
      </form>
    );

}
