Template.show.helpers({
    posts: function() {
      return Posts.find({body:'now'});
    }
  });