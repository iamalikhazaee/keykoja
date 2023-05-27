import { atom } from "recoil";

export const current_user = atom({
    key: 'current_user',
    default: {},
});