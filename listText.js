const keyWallet = "ð Wallet";
const keyRules = "ð Rules";
const check = "Check";
module.exports = {
  step1: "1. DogeKing Community on Facebook",
  step2: "2. Join DogeKing Group on Telegram",
  step3: "3. Follow, Retweet, Like a Post",
  enterUser:  "Bind your twitter account before CHECK",
  check,
  keyPoint: "ð¿ï¸ Points",
  keyWallet,
  keyRules,
  desRules: `Competition on introducing DogeKing Community with rewards in DOGEKING Token!
To celebrate the breakthrough development of the community, DogeKing launches a campaign on community introduction to thank for the community's support.
Please follow the steps below to get the reward:
\n1) All participants (including those invited by others) have to complete 3 tasks in order to join the campaign.
Those invited by others also have to complete 3 tasks so that inviters can get points.
2) Please connect your Twitter Username to our Bot so that we can confirm your status!
3) Rewards are given based on your points, which means that the more points you get, the more valuable reward you gain.
\n(This activity is just related to DogeKing Community)
\nð¢ How to win:
1) Find @DOGEKING\\_Airdrop\\_Bot in Telegram and enter/start to start the bot and follow the guidance;
2) After you connect your #DOGEKING BEP20 (unchangeable) with (@DOGEKING\\_Airdrop\\_Bot), the only introduction link will come out immediately;
3) You can require or invite your friends to join by clicking your only introduction link;
4) Those you invite can get points after completing 3 tasks and they have to active in DogeKing Community of DogeKing. Fake or inactive accounts cannot get rewards.
\nâ ï¸NOTE:
â«ï¸ All participants have to meet the requirement on the number of #DOGEKING cards.
â«ï¸ Those who are invited need to be active in https://t.me/blockarnet`,
  keyHelp: "ð¨ Contact",
  desHelp: `All contact information:
Website: https://www.blockar.net/
Twitter: https://twitter.com/blockarnet
Telegram Channel: https://t.me/blockarnet
Facebook: https://facebook.com/blockarnet
Chat with us: https://t.me/blockarnet`,
  startStep: `ð Welcome to Dogeking Airdrop, please complete the following tasks to earn free Blockar tokens. \n\nClick on [${check}] after you are done with the tasks to enter the next session where you input your BEP20 Address:`,
  validTwiiter: "Invalid twitter account please submit your twitter username with @:",
  duplicateTw: "Twitter account is already in use. Please enter another account!",
  accTwOk: (acc) => {
    return  `*${acc} â* \n\nYou have successfully bind your twitter account with DOGEKING Airdrop Bot.
Press ð *${check}* to check completed tasks.`
  },
  validWallet: "Invalid wallet address, please try again:",
  walletOk: (address) => {
    return `*${address} â* \n\nYou have successfully bind your wallet address.
You can check again by click keyboard *${keyWallet}*.
See more information or need help, click keyboard *${keyRules}*.`
  },
  done: (id) => {
    return `ð Congrats, you have completed the airdrop tasks and  will receive a share of the 1% total supply of DOGEKING. 
    \nAirdrop Distribution will start after airdrop ends
\nðµ Set your wallet address to receive rewards at *${keyWallet}*.
\nð¥ You can earn more tokens by inviting other users to DOGEKING Airdrop Bot.
\nð For each person you invite, you will get a reward.
\nð Your referral linkï¼https://t.me/DOGEKING\\_Airdrop\\_Bot?start=${id}`
  },
  enterTw: "If you are done step 3, enter twitter username so we can check it out.\nSend you twitter account starting with @:",
  addressWl: (address) => {
    return `Your wallet BEP20 (BSC) address: *${address}*`;
  },
  sendAddress: `*â ï¸ Please enter it correctly as you are only allowed to enter once.
\nð Send your BEP20 (BSC) address:*`,
  twNotFollow: "You haven't followed page twitter",
  twNotReTweet: "You haven't retweet post twitter",
  twNotLike: "You haven't like post twitter",
  twNotUser: "You must bind username twitter",
  teleNotFollow: "You haven't follow chanel telegram",
  teleNotJoin: "You haven't join group telegram",
  notFoundTw: "Not found user twitter, please try again."
}