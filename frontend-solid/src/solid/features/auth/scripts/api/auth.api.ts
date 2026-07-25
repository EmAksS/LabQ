import axios from "axios";
import { API_REGISTER } from "../../../../../constants/api";
import type { RegisterData } from "../../../../types/auth.types";


export const registerRequest = async (data: RegisterData) =>
    axios.post(API_REGISTER, data);