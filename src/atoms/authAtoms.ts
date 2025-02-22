import { atom } from "jotai";

// ログイン状態(status, id)をJotaiで管理
export const authStatusAtom = atom<"loading" | "ok" | "ng">("ng");
export const userIdAtom = atom<string | null>(null);
