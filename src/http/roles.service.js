import axios from "axios"
import { publicRequest } from "./index.service"

export const getRolesList = async () => {
    return await publicRequest.get("/getRoles")
}

export const httpDeleteRole = async (roleName) => {
    return await publicRequest.delete("/deleteRole", {
        data: {
          roleName: roleName
        }
      });
}

export const httpCreateRole = async (roleName) => {
    return await publicRequest.post("/createRole", {
        roleName
    })
}