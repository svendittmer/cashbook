Meteor.methods({
  createGroup: function (name) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    // create group
    var groupId = Groups.insert({
      name: name,
      createdAt: new Date()
    });

    // connect user to group
    Meteor.users.update(Meteor.userId(), {$set: {groupId: groupId} } );
  }
});