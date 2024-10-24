// 로그인하지 않은 사용자는 walletlogin 페이지로 리디렉션
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export function LoginConfirm({ children }) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/walletlogin" />;
  }
  return children;
}

export function RedirectIfLoggedIn({ children }) {
  const user = auth.currentUser;
  if (user !== null) {
    return <Navigate to="/" />;
  }
  return children;
}
