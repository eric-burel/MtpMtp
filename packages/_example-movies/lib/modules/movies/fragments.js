/* 

Register the GraphQL fragment used to query for data

*/

import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment MoviesItemFragment on Movie {
    _id
    createdAt
    userId
    user {
      displayName
    }
    name
    year
    review
  }
`);