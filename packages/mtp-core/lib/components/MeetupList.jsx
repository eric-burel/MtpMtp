import React from 'react'
import { useMulti2 } from 'meteor/vulcan:core'
import Meetups from '../modules/meetup/collection'


const MeetupList = () => {
    const { data, loading, error, ...otherRes } = useMulti2({
        collection: Meetups,
    })
    if (loading) return 'Loading meetups...'
    if (error) return 'Could not load meetups! ' + error
    const meetups = data.meetups.results
    if (!meetups.length) return 'No meetups to display'
    return (

        <ul>
            {meetups.map(meetup => (
                <li>{meetup.place} - {meetup.date} - {meetup.description}</li>
            ))}
        </ul>
    )
}

export default MeetupList
