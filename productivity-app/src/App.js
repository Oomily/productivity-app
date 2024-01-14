import WeatherWindow from './WeatherWindow';
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import './App.css';

function App() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                      Authorization: `Bearer ${user.access_token}`,
                      Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className="app-Header">
          <header>
            <h1>Personal Assistant Page</h1>
            {profile ? (
                <div className="login-bar">
                    <div className="profile-item"><img className="profile-photo" src={profile.picture} alt="profile"/></div>
                    <div className="profile-item"><h4>Profile</h4></div>
                    <br />
                    <div className="profile-item"><h4>Name: {profile.name}</h4></div>
                    <div className="profile-item"><h4>Email: {profile.email}</h4></div>
                    <div className="profile-item"><button onClick={logOut}>Log out</button></div>
                </div>
            ) : (
                <button onClick={() => login()}>Google Sign-In</button>
            )}
            </header>
            <body>
              {profile ? (
                  <div className="weather-app">
                    <WeatherWindow/>
                  </div>
              ) : (
                  <p>Please Login To Use Feature</p>
              )}
            </body>
            
        </div>
    );
}
export default App;
