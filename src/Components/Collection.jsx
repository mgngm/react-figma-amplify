import React, { useState } from 'react'

import {
    ProfileCardCollection, UsersUpdateForm
} from './../ui-components';


function Collection() {
    const [updateForm, setUpdateForm] = useState(undefined)

    return (
        <div className="App">
            <header className="App-header">
                <h2 style={{ color: "#ff" }}>Single Component</h2>

                {/* Callection component */}
                <ProfileCardCollection overrideItems={({ item }) => ({
                    onClick: () => setUpdateForm(item)
                })} />

                {/* Form to edit the items to update - only show if "updateForm" has data */}
                {updateForm && <div className="card">
                    <UsersUpdateForm
                        users={updateForm}
                        onSubmit={(fields) => {
                            const updatedFields = {}
                            Object.keys(fields).forEach(key => {
                                if (typeof fields[key] === 'string') {
                                    updatedFields[key] = fields[key].trim()
                                } else {
                                    updatedFields[key] = fields[key]
                                }
                            })
                            setUpdateForm(undefined) // close/hide the form
                            return updatedFields
                        }}
                    />
                </div>
                }
            </header >
        </div >
    )
}

export default Collection

