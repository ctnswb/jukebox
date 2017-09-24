const mongoose = require('./config');
const User = require('./user');

const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {type: String, index: {unique: true}},
    userID: Number,
    image: String,
    link: String,
    upVoteCount: {type: Number, default: 0},
    downVoteCount: {type: Number, default: 0},
    netVoteCount: Number
});

const Song = mongoose.model('song', SongSchema);

// dummy data
new Song({name: 'Purple Rain',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz',
  upVoteCount: 6, downVoteCount: 2}).save();
new Song({name: 'When Doves Cry',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/51H2y6YrNNXcy3dfc3qSbA',
  upVoteCount: 8, downVoteCount: 3}).save();
new Song({name: 'Let\'s Go Crazy',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/0QeI79sp1vS8L3JgpEO7mD',
  upVoteCount: 9, downVoteCount: 8}).save();
new Song({name: 'I Would Die 4 U',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/6fBwVe6udYdnRqwqo06if8',
  upVoteCount: 2, downVoteCount: 8}).save();
new Song({name: 'The Beautiful Ones',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/1BNtFSws7fjbn9aVBPA79j',
  downVoteCount: 4}).save();
new Song({name: 'Darling Nikki',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/0khi86hc79RfsRC0rrkkA2',
  upVoteCount: 12, downVoteCount: 5}).save();
new Song({name: 'Baby I\'m A Star',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/2soBvUQBf5rbMj9HIyhzzK',
  upVoteCount: 10, downVoteCount: 1}).save();
new Song({name: 'Take Me With U',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/765k9tDIFOnoOfkO2cgitB',
  upVoteCount: 9}).save();
new Song({name: 'Purple Rain - 2015 Paisley Park Remaster',
  image: 'https://i.scdn.co/image/00f45f84cc30a651bd9575c9663465996780c9cd',
  link: 'https://open.spotify.com/track/1vfvy1Of0iJLDjh5eMfVyI'})
  .save();

module.exports = Song;
