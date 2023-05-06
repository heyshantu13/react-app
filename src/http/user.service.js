import { publicRequest } from "./index.service"

export const httpUserRegister = async (data) => {
     return publicRequest.post('/createUser',data);
}

export const httpUpdateUserAfterRegister = async (data) => {
     return publicRequest.post('/updateUserWorkspace',data);
}

export const httpLoginUser = async (data) => {
     return publicRequest.post('/login',data)
}