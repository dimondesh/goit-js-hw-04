const profile = {
  username: "Jacob",
  playTime: 300,
  getInfo(username, playtime) {
    return `${this.username} has ${this.playTime} active hours`;
  },
  changeUsername(newUsername) {
    this.username = newUsername;
  },
  updatePlayTime(newPlaytime) {
    this.playTime += newPlaytime;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
