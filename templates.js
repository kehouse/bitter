module.exports = {
  tweet: [
  "<h3><%= title %></h3>",
  "<h4><%= user %></h4>",
  "<p><%= desc %></p>",
  "<button class='delete'>delete</button>"
].join(''),

  addTweet: [
    '<button class="edit">edit</button>',
    '<input type="text" name="username" value="" placeholder="Username">',
    '<input type="text" name="message" value="" placeholder="Message">',
    "<button class='submit'>Submit</button>",
].join('')
};
