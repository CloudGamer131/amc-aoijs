module.exports = {
  name: "rejoin",
  aliases: ["reconnect"],
  cooldown: "3s",
  code: `$deleteMessage[$getUserVar[reactmessageid;$clientID]]
$if[$voiceID[$clientID]==]
$joinVC[$voiceID]
$else
$joinVC[$voiceID]
$wait[$multi[$botPing;2]]
$leaveVC
$setServerVar[filters;none]
$endif
$cooldown[$commandInfo[rejoin;cooldown];Please wait **%time%** before using again.]
$onlyIf[$replaceText[$replaceText[$checkCondition[$getServerVar[userid]==default];true;$authorID];false;$getServerVar[userid]]==$authorID;{title:❌ You cant use this command} {color:$getVar[color]}]
$onlyIf[$voiceID!=;$getVar[errorjoin]]
$suppressErrors[something just happened.]`
}
