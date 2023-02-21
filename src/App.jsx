
import { useState, useEffect } from 'react';
import logo from './assets/react.svg';
import './App.css';

// import { DataStore } from '@aws-amplify/datastore';
import { Amplify, DataStore, Auth } from 'aws-amplify';

import {
  ProfileCardCollection, ProfileCard, HeroLayout1, HeroLayout4, NavBar
} from './ui-components';
import { Users } from './models';

//Use next two lines only if syncing with the cloud
import awsconfig from "./aws-exports";
import SingleComponent from './SingleComponent';
Amplify.configure(awsconfig);


function App() {

  const [user, setUser] = useState(0)

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const item = await DataStore.query(Users);
      setUser(item[0]);
    }

    fetchData()
      .catch(console.error);
  }, [])

  const saveUser = () => {
    console.log("Saving data....")

    const usersItems = [{
      "name": "Glen B.",
      "surname": "Mogane",
      "username": "@tswalano",
      "avatar": "https://avatars.githubusercontent.com/u/17822715?v=4",
      "bio": "Amazon Premium Support",
      "followers": 100,
      "following": 50
    },
    {
      "name": "Tom",
      "surname": "Preston-Werner",
      "username": "@pjhyett",
      "avatar": "https://avatars.githubusercontent.com/u/1?v=4",
      "bio": "GitHub co-founder",
      "followers": 8716,
      "following": 778
    },
    {
      "name": "P. J.",
      "surname": "WanstrHyettath",
      "username": "@pjhyett",
      "avatar": "https://avatars.githubusercontent.com/u/3?v=4",
      "bio": "GitHub co-founder",
      "followers": 981,
      "following": 514
    },
    {
      "name": "Chris",
      "surname": "Wanstrath",
      "username": "@defunkt",
      "avatar": "https://avatars.githubusercontent.com/u/2?v=4",
      "bio": "Technical Fellow",
      "followers": 419,
      "following": 543
    },
    {
      "name": "Scott",
      "surname": "Chacon",
      "username": "@scott_c",
      "avatar": "https://avatars.githubusercontent.com/u/4?v=4",
      "bio": "Technical Fellow",
      "followers": 201,
      "following": 819
    }]


    usersItems.forEach(usr => {
      DataStore.save(
        new Users(usr)
      ).then((res) => {
        console.log("Response", res);
      }).catch(err => console.error("Error occured saving data", err))
    })


  }

  const queryUsers = () => {
    DataStore.query(Users).then(res => {
      return res.forEach(async user => {
        DataStore.delete(user);
      })
    }).catch(err => console.error(err))
  }

  const signIn = () => {
    Auth.signIn("tswalano", "Tswalano@42").then(res => console.log("signed in...", res))
      .catch(err => console.error("error signing in...", err))
  }

  const signOut = () => {
    Auth.signOut().then((user) => {
      // at this time the user is logged in if no MFA required
      console.log(user);
    })
      .catch((e) => {
        console.log(e);
      });
  }





  return (
    <div className="App">
      <header className="App-header">

        <h2 style={{ color: "#ff" }}>Single Component</h2>

        {user && (<ProfileCard user={user} />)}

        <h2 style={{ color: "#ff" }}>Collection Component</h2>
        {/* <ProfileCardCollection /> */}

        <SingleComponent />

        <button onClick={() => saveUser()}>Save User</button>
      </header>
    </div >
  )
}

export default App