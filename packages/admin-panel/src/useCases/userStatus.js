const {user_squad} = require('../../../../userCases/userSquad');
const {message_squad} = require('../../../../userCases/messageSquad');
const {userStatus} = require('../../../../utils/constants');


const changeUserStatus = (userId, status,reason) => {

  //TODO: validation to avoid going back to the previous status

  //verify if status is valid
  if(userStatus.indexOf(status) === -1){
    throw new Error('Invalid status');
  }

  //verify if user exists
  const user = userSquad.getUser(userId);
  if(!user){
    throw new Error('User does not exist');
  }

  //verify if user is already in the status
  if(user.status === status){
    throw new Error('User is already in the status');
  }

  //change user status
  user.status   = status;

}

module.exports = {
  changeUserStatus,
}