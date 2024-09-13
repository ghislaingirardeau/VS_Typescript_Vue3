import { InjectionKey } from "vue";
import User from "./types/User";

// userInjectionKey is inside a component because we need it inside the parent (provide)
// and inside the children (inject) in which we use it

// to be sure that the injectionKey is unique
export const userInjectionKey = Symbol() as InjectionKey<User>;
