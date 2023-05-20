// import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
// import axios from "axios";
// import GithubImg from "../../../../public/images/Github.png";
// import Image from "next/image";
// export default function NaverLoginButton() {
//   const handleNaverLogin = () => {
//     const { naver } = window;
//     const naverLogin = new naver.LoginWithNaverId({
//       clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
//       callbackUrl: "http://localhost:3000/",
//       loginButton: { color: "green", type: 3, height: 58 },
//       callbackHandle: true,

//       isPopup: false,
//     });
//     naverLogin.init();
//   };
//   // 크림도 그냥 팝업에서 처리해버리는데 이것도 뭔가 방법이 있을거다!
//   return (
//     <OAuthLoginWrapper>
//       <OAuthLogin onClick={handleNaverLogin} id="naverIdLogin">
//         <Image
//           src={GithubImg}
//           alt="Github Logo Image"
//           width={100}
//           height={100}
//         />
//       </OAuthLogin>

//       <ButtonTitle>깃허브 로그인</ButtonTitle>
//     </OAuthLoginWrapper>
//   );
// }
