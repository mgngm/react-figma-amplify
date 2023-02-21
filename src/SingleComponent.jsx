import React, { useState, useEffect } from 'react'

import { Users } from "./models";
import {
    useDataStoreBinding, useDataStoreItem
} from "@aws-amplify/ui-react/internal";
import { ProfileCard } from './ui-components';
import { DataStore } from 'aws-amplify';

function SingleComponent() {
    const [user, setUser] = useState(undefined)


    // using internal useDataStoreItem hook
    const storeItem = useDataStoreItem({ model: Users, id: "f1633f76-4a5d-4178-bb81-820233b80592" })

    // using internal useDataStoreBinding hook
    const itemDataStore = useDataStoreBinding({
        type: "record",
        model: Users,
    }).item;

    const item = DataStore.query(Users);

    const subscription = DataStore.observe(Users).subscribe(msg => {
        console.log("subscription", itemDataStore);
    });


    useEffect(() => {


        console.log("useEffect triggered")

        // Call unsubscribe to close the subscription
        subscription.unsubscribe();

        console.log(user)
        setUser(itemDataStore);
    }, [subscription]);

    // useEffect(() => {
    //     // declare the async data fetching function
    //     const fetchData = async () => {
    //         const item = await DataStore.query(Users);
    //         //   get the first user 
    //         setUser(item);
    //     }

    //     fetchData()
    //         .catch(console.error);
    // }, [])

    return (
        <div style={{ display: "flex", padding: "5px" }}>
            {
                user && user.map(element => {
                    return (
                        <ProfileCard margin={10} key={element.id} user={element} />
                    )
                })
            }
        </div>
    )
}

export default SingleComponent