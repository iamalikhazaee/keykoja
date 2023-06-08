import { atom } from "recoil";

export const current_user = atom({
    key: 'currentUser',
    default: {},
});

export const current_form = atom({
    key: 'currentForm',
    default: 'تنظیمات پایه',
});