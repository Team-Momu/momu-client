import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserService } from "~/@services/auth";

const useAuth = () => {
  const router = useRouter();

  const [refresh, setRefresh] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    UserService.auth().then((response) => {
      const { message } = response;
      switch (message) {
        case "액세스 토큰 검증 성공":
          setIsLoggedIn(true);
          break;
        case "액세스 토큰 만료":
          setRefresh(true);
          break;
        case "유효하지 않은 토큰":
          if (confirm("로그인이 필요합니다.")) {
            router.push("/main");
          }
          break;
        default:
          break;
      }
    });
  }, []);

  useEffect(() => {
    if (refresh) {
      UserService.authRefresh()
        .then((response) => {
          console.log(response);
        })
        .catch();
    }
  }, [refresh]);

  return { isLoggedIn };
};

export default useAuth;
