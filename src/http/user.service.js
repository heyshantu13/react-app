import { publicRequest } from "./index.service"

export const httpUserRegister = async (data) => {
     return publicRequest.post('/createUser',data);
}