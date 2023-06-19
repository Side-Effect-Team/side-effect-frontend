<div style="display: flex;justify-content: center"><img src="./public/images/mainLogo.svg" width="300px" alt="사이드 이펙트 로고"></div>

<h3>열정을 함께할 동료가 필요할 때, 사이드 이펙트</h3>
<p>개발자, 디자이너 등 누구나 쉽게 프로젝트를 시작하고, 네트워킹할 수 있는 커뮤니티 플랫폼입니다</p>

[서비스 구경하기](https://side-effect-frontend-dev.vercel.app/)

[팀 소개](https://github.com/Side-Effect-Team)

[백엔드 레포](https://github.com/Side-Effect-Team/side-effect-backend)

<br>

## 🛠️ 기술 스택

<div>

![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=)
![React](https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=)
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![React Query](https://img.shields.io/static/v1?style=for-the-badge&message=React+Query&color=111827&logo=React+Query&logoColor=EF4444&label=)
![Redux Toolkit](https://img.shields.io/static/v1?style=for-the-badge&color=333&message=Redux+Toolkit&logo=Redux&logoColor=593D88&label=)
![styled-components](https://img.shields.io/static/v1?style=for-the-badge&color=333&message=styled-components&logo=styledcomponents&logoColor=DB7093&label=)
![Vercel](https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=)

</div>
<br>

## 🌳 폴더 구조

```
.
├─apis : 백엔드 API 호출 함수 모음
│
├─components : 공용 컴포넌트 및 페이지 컴포넌트 모음
│  ├─Alarm
│  ...
│  ├─pages : 각 페이지를 구성하는 컴포넌트
│  │  ...
│  │  └─recruits
│  ...
│  └─Toast
│
├─enum : 문자열 상수화를 위한 데이터 모음
│
├─hooks : React Custom Hooks 및 React Query Hooks 모음
│  ├─common : React Custom Hooks
│  ├─mutations : mutation hooks
│  └─queries : query hooks
│
├─pages : Next.js 의 pages 라우팅 폴더
│
├─public : 앱의 정적 파일 (이미지)
│
├─store : Redux store 및 slice 모음
│
├─styles : Styled-components의 theme 및 글로벌 스타일 모음
│
├─types : API 반환값 type 모음
│
└─utils : 유틸리티 함수 모음

```

## 💻 주요 기능 및 페이지 소개

<table>
	<tbody>
		<tr>
			<th>랜딩 페이지</th>
			<th>다크모드 기능</th>
		</tr>
		<tr>
			<td><img width="400px" src="public/readme-images/landing-page.gif" alt="랜딩 페이지"/></td>
			<td><img width="400px" src="public/readme-images/darkmode.gif" alt="랜딩 페이지"/></td>
		</tr>		
		<tr>
			<td>- 모든 페이지에서 반응형 UI 지원<br>- 해당 서비스의 특징 및 사용법 안내<br>- 실시간 인기게시글 확인</td>
			<td>- 모든 페이지에서 다크모드 지원</td>
		</tr>	
		<tr>
			<th>로그인 페이지</th>
			<th>회원가입 하기</th>
		</tr>
		<tr>
		<td><img width="400px" src="public/readme-images/login.gif" alt="로그인 기능"/></td>
			<td><img width="400px" src="public/readme-images/register.gif" alt="회원가입 기능"/></td>
		</tr>
		<tr>
			<td>- 로그인 반응형 모달<br>- 소셜 로그인 기능</td>
			<td>- 회원가입 기능<br>-  기능</td>
		</tr>
		<tr>
			<th>마이 페이지</th>
			<th>프로필 변경하기</th>
		</tr>
		<tr>
			<td><img width="400px" src="public/readme-images/mypage.gif" alt="랜딩 페이지"/></td>
			<td><img width="400px" src="public/readme-images/mypage-edit.gif" alt="랜딩 페이지"/></td>
		</tr>
		<tr>
			<td>- 개인 프로필 관리<br>- 관심 게시글 및 작성 게시물 모아보기<br>- 지원 현황 및 상태 확인<br>- 계정 탈퇴 기능</td>
			<td>- 아바타 이미지 변경 기능<br>- 본인을 나타내는 해시태그<br>- 포지션, 경력 등의 정보 추가 및 수정 기능</td>
		</tr>
		<tr>
			<th>프로젝트 자랑 게시판 페이지</th>
			<th>프로젝트 자랑 게시글 작성하기</th>
		</tr>
		<tr>
			<td>이미지</td>
			<td>이미지</td>
		</tr>
		<tr>
			<td>- 기능<br>- 기능</td>
			<td>- 기능<br>-  기능</td>
		</tr>
		<tr>
			<th>팀원 모집 게시판 페이지</th>
			<th>팀원 모집 게시글 작성하기</th>
		</tr>
		<tr>
			<td>이미지</td>
			<td>이미지</td>
		</tr>
		<tr>
			<td>- 기능<br>- 기능</td>
			<td>- 기능<br>-  기능</td>
		</tr>
				<tr>
			<th>알람 이벤트</th>
			<th>게시물 관심목록 추가</th>
		</tr>
		<tr>
			<td><img width="400px" src="public/readme-images/alarm.gif" alt="랜딩 페이지"/></td>
			<td><img width="400px" src="public/readme-images/like-board.gif" alt="랜딩 페이지"/></td>
		</tr>
		<tr>
			<td>- 댓글 발생 알람 기능<br>- 모집 게시판 참여자 발생 알람 기능</td>
			<td>- 마이페이지 관심 목록 추가 기능</td>
		</tr>
		<tr>
			<th>팀 관리 모달</th>
			<th?>스켈레톤 컴포넌트</th>
		</tr>
		<tr>
			<td><img width="400px" src="public/readme-images/teamManage.gif" alt="팀관리 모달"/></td>
			<td><img width="400px" src="public/readme-images/skeleton.gif" alt="팀관리 모달"/></td>
    	<tr>
    	<tr>
    		<td>- 지원자 관리 및 팀원 관리 반응형 모달</td>
			<td>- 레이아웃 시프트 방지를 위한 스켈레톤 컴포넌트</td>
    	</tr>
    </tbody>

</table>

<br>

## 🧑‍💻 만든 사람들

이름순

<table>
	<tbody>
		<tr>
			<th><img width="150px" src="https://github.com/jong-k.png" alt="김종한"/></th>
			<th><img width="150px" src="https://github.com/taejinii.png" alt="정태진"/></th>
			<th><img width="150px" src="https://github.com/ju-ju2.png" alt="한주연"/></th>
		</tr>		
		<tr>
			<th><a href="https://github.com/jong-k" target="_blank">김종한</a></th>
			<th><a href="https://github.com/taejinii" target="_blank">정태진</a></th>
			<th><a href="https://github.com/ju-ju2" target="_blank">한주연</a></th>
		</tr>	
	</tbody>
</table>
