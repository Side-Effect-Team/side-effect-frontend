class HandleAuth {
  private token: string;
  constructor() {
    this.token = "";
  }
  getToken() {
    return this.token;
  }
  setToken(newToken: string) {
    this.token = newToken;
  }
  //로그아웃시 메모리에 남아있는 토큰 제거
  removeToken() {
    this.token = "";
  }
}
export const handleAuth = new HandleAuth();
