import { atom } from "recoil";

export const current_user = atom({
    key: 'current_user',
    default: {},
});

export const current_form = atom({
    key: 'current_form',
    default: 'تنظیمات پایه',
});