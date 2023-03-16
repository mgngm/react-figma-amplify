
import { useState, useEffect } from 'react';
import '.././App.css';

import { Amplify, DataStore, Auth } from 'aws-amplify';

import {
  ProfileCardCollection, UsersUpdateForm
} from './ui-components';
import { Users } from './models';

function App() {

  // const [users, setUsers] = useState(0)
  const [userItem, setUserItem] = useState(undefined)

  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     const item = await DataStore.query(Users);
  //     // get all the items returned from the database
  //     setUsers(item);
  //   }

  //   // declare the async data fetching one user
  //   const fetchUser = async () => {
  //     const item = await DataStore.query(Users);

  //     // console.log(item[0])
  //     // get all the items returned from the database
  //     setUserItem(item);
  //   }

  //   fetchData()
  //     .catch(console.error);
  //   fetchUser()
  //     .catch(console.error);
  // }, [])

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


  const logUser = () => {
    console.log(user)
  }


  const [updateForm, setUpdateForm] = useState()


  const profileOverrides = {
    "Button29766907": {
      onClick: (e) => {
        setUpdateForm(userItem[0])
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ color: "#ff" }}>Single Component</h2>

        {/* {userItem && <ProfileCard user={userItem[0]} overrides={profileOverrides} />} */}

        overrideItems={({ item }) => ({
          onClick: () => setUpdateForm(item)
        })}

        <ProfileCardCollection overrideItems={({ item }) => ({
          onClick: () => setUpdateForm(item)
        })} />

        {updateForm && <div className="card">
          <UsersUpdateForm
            users={updateForm}
            onSubmit={(fields) => {
              // Example function to trim all string inputs
              const updatedFields = {}
              Object.keys(fields).forEach(key => {
                if (typeof fields[key] === 'string') {
                  updatedFields[key] = fields[key].trim()
                } else {
                  updatedFields[key] = fields[key]
                }
              })
              console.log(updatedFields)
              return updatedFields
            }}
          />
        </div>
        }
      </header >
    </div >
  )
}

export default App