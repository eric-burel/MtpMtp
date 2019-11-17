import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MeetupsFragment on Meetup {
     _id
     createdAt
   }
`);
