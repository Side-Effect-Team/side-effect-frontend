class HandleAuth {
  token: string;
  constructor() {
    this.token = "";
  }
  getToken() {
    return this.token;
  }
  setToken(newToken: string) {
    this.token = newToken;
  }
}
export const handleAuth = new HandleAuth();
