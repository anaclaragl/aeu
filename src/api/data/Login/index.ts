import api from "../../index";
import { ILogin } from "../../../interfaces/Login.interface"

class LoginData {
  index() {
    return api.get<ILogin[]>('perfil');
  }
}

export default new LoginData();