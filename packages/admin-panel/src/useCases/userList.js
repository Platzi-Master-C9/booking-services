const { userList } = require('../../mocks/userList.mock.js');

const getUsers = (status,full_name)=>{
  const fake_user_list = userList;
  //if the user sent a status or a full_name, we have to make a filter

  if(status){
    return fake_user_list.filter(user=>user.status===status);
  }
};

module.exports = {
  getUsers
}