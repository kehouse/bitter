module.exports = {
  tweet: [
  "<h3><%= Username %></h3>",
  "<p><%= Message %></p>",
  "<button class='delete'>delete</button>"
].join(''),

  addTweet: [
    '<input type="text" name="Username" value="" placeholder="Username">',
    '<input type="text" name="Message" value="" placeholder="Message">',
    "<button class='submit'>Submit</button>",
].join('')
};
