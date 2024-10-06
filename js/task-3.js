const profile = {
  username: "Jacob",
  playTime: 300,
  getInfo(username, playtime) {
    return `${profile.username} has ${profile.playTime} active hours`;
  },
  changeUsername(newUsername) {
    this.username = newUsername;
    return `${profile.username} has ${profile.playTime} active hours`;
  },
  updatePlayTime(newPlaytime) {
    this.playTime = newPlaytime;
    return `${profile.username} has ${profile.playTime} active hours`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
