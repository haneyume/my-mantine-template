type AuthLoginFn = (email: string, password: string) => Promise<boolean>;

type AuthLogoutFn = () => Promise<void>;

type AuthCheckAuthedFn = () => Promise<void>;

export type { AuthLoginFn, AuthLogoutFn, AuthCheckAuthedFn };
