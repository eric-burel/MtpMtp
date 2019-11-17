import React from 'react';
import { Components } from 'meteor/vulcan:core'
import Meetups from '../modules/meetup/collection'


const MeetupCreation = () => (
  <div>
    <h2>Create a meetup</h2>
    <Components.SmartForm
      collection={Meetups}
    />
  </div>
);

export default MeetupCreation;
