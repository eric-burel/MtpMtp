import React from 'react'
import { Components } from 'meteor/vulcan:core'
import Meetups from '../modules/meetup/collection'

const MeetupAdminList = () => {
    return (
        <Components.Datatable
            collection={Meetups}
        />
    )
}

export default MeetupAdminList