import { publicRequest } from "./index.service"

export const httpUserRegister = async (data) => {
     return publicRequest.post('/createUser',data);
}

export const httpUpdateUserAfterRegister = async (data) => {
     try{
          const result1 = await publicRequest.post('/updateUserWorkspace',{
               userName: data
          });
          const result2 = await publicRequest.post('/createRole',{
               roleName : data
          });
          const result3 = await publicRequest.post('/associateUserFromRole',{
               userName:data,
               roleName: data
          });
          return true;
     }catch(err){
          return false;
     }
    
}

export const httpLoginUser = async (data) => {
     return publicRequest.post('/login',data)
}

export const httpGetUserList =async () => {
     return publicRequest.get('/getUsers');
}

export const httpDeleteUser = async (data) => {
     return publicRequest.delete('/deleteUser',data);
}