const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ newDocument, currentUser }) => {
      return new Date();
    }
  },
  // userId: {
  //   type: String,
  //   optional: true,
  //   canRead: ['guests'],
  //   resolveAs: {
  //     fieldName: 'user',
  //     type: 'User',
  //     resolver: (movie, args, context) => {
  //       return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
  //     },
  //     addOriginalField: true
  //   }
  // },
  place: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests']
  },
  date: {
    filterable: true,
    type: Date,
    optional: false,
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests']
  },
  goal: {
    type: String,
    optional: false,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['guests'],
    canUpdate: ['guests']
  }
};

export default schema;
