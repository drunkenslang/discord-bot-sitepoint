var config = require('../config.json');
module.exports = {
  name: 'testrole',  //this is the command
  description: 'Help Me!', 
  execute(msg, args) {

    if(msg.member.roles.has(config.donorRole)) {
       msg.reply(`You have the role the role! (${config.donorRole})`);
       msg.member.removeRole(config.donorRole).catch(console.error);
       msg.reply(`Now you don't`);	
    } else {
       msg.reply(`You don't have the role`);
       msg.member.addRole(config.donorRole).catch(console.error);
       msg.reply(`Now you do`);
}   
  },
};
