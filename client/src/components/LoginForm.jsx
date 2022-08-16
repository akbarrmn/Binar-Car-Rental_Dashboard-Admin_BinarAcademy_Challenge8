import React, { useEffect } from "react";
import { TextField,Button, Paper, Grid, Typography, Box} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Data } from '../App';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function LoginForm() {
    // Login social account
    const google = () => {
        window.open("https://chapter7backend.herokuapp.com/auth/google", "_self")
    }

    const github = () => {
        window.open("https://chapter7backend.herokuapp.com/auth/github", "_self")
    }

    const facebook = () => {
        window.open("https://chapter7backend.herokuapp.com/auth/facebook", "_self")
    }

    // Register
    const [register, setRegister] = React.useState(false);

    const handleRegist = ()=>{
        setRegister(true)
    } 

    const handleCreate = async (e) =>{
        e.preventDefault()
        try {
           await addDoc(collection(db, "users"), {
             username: 'user@gmail.com',
             password: 'akbar123',
             isAdmin: false
          })
        } catch (err) {
          console.log(err);
        }
      }

    // JWT
    const navigate = useNavigate()
    const { user, setUser } = React.useContext(Data);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        // api request
        await axios.post("https://chapter7backend.herokuapp.com/auth/api/login", { username, password }, 
        ).then(user =>{
            setUser(user.data)
            localStorage.setItem("token", user.data.token)
        })
        } catch (err) {
        console.log(err);
        }       
    }
    useEffect(() => {
        if (!user){
            const token = localStorage.getItem('token');
            if (token !== null) {
                axios.get("https://chapter7backend.herokuapp.com/auth/api/protected", {
                    headers: {
                        Authorization: token,
                    }
                }).then(res => {
                    setUser(res.data)
                }).catch(err => {
                    console.log(err);
                    navigate('/login')
                })
            }
        }
    }, [])
    return(
        <div className="LoginForm">
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    >
                    <Paper elevation={24}>
                        <Grid container style={{ padding:'2rem' }}>
                            <Grid item xs={12}>
                                <img src='/images/carLogo.png' alt="logo" style={{ width:'100%' }} />
                            </Grid>
                            {!register ?
                            <>
                                <Grid item xs={12}>
                                <h2 style={{ marginTop: '2rem' }}>Welcome, Admin BCR</h2>
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-basic" 
                                    label="Username" 
                                    variant="outlined"
                                    role="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-password-input" 
                                    label="Password" 
                                    type="password" 
                                    autoComplete="current-password"
                                    role="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <Link to='/dashboard'>
                                        <Button 
                                            style={{marginTop: '1rem', width: '100%'}} 
                                            variant="contained"
                                            type='submit'
                                            onClick={handleSubmit}
                                            >Sign in
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6" component="h6" 
                                        sx={{ textAlign:'center', borderBottom:'1px solid #000', lineHeight:'0.1em', margin:'30px 0 20px' }}>
                                        <Box component="span" sx={{ background:'#fff', padding:'0 10px' }}>or </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: '1rem', textAlign:'center'}}>
                                    <Box
                                        component="img"
                                        sx={{ height:'3rem', cursor:'pointer' }}
                                        alt="The house from the offer."
                                        src="/images/icon/google.png"
                                        onClick={google}
                                    />
                                    <Box
                                        component="img"
                                        sx={{ height:'3rem', cursor:'pointer',marginLeft:'2rem' }}
                                        alt="The house from the offer."
                                        src="/images/icon/github.png"
                                        onClick={github}
                                    />
                                    <Box
                                        component="img"
                                        sx={{ height:'3rem', cursor:'pointer',marginLeft:'2rem' }}
                                        alt="The house from the offer."
                                        src="/images/icon/facebook.png"
                                        onClick={facebook}
                                    />
                                </Grid>
                                <Grid item xs={12} style={{marginTop: '2rem'}}>
                                <Typography variant="h6" component="h6" sx={{ fontSize:'1.3rem' }}> 
                                    Dont have an account ?
                                    <Box 
                                    component="span" 
                                    sx={{ ml:1, color:'blue', cursor:'pointer' }}
                                    onClick={handleRegist}
                                    >Sign up</Box>
                                </Typography>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid item xs={12}>
                                <h2 style={{ marginTop: '2rem' }}>Welcome, Admin BCR</h2>
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-basic" 
                                    label="Username" 
                                    variant="outlined"
                                    role="username"
                                />
                                <TextField 
                                    style={{marginTop: '1rem', width: '100%'}} 
                                    id="outlined-password-input" 
                                    label="Password" 
                                    type="password" 
                                    autoComplete="current-password"
                                    role="password"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <Link to='/dashboard'>
                                        <Button 
                                            onClick={handleCreate}
                                            style={{marginTop: '1rem', width: '100%'}} 
                                            variant="contained">Register
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: '2rem'}}>
                                    <Typography variant="h6" component="h6" sx={{ fontSize:'1.3rem' }}> 
                                        Already have account ?
                                        <Box component="span" sx={{ ml:1, color:'blue', cursor:'pointer' }}>Sign in</Box>
                                    </Typography>
                                </Grid>
                            </>
                            }
                        </Grid>
                    </Paper>
                </Box>
        </div>
    )
}

export default LoginForm;