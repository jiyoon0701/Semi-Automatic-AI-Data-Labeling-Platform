# 데이터 웹 레이블링 서비스
👩‍👩‍👧‍👦 팀프로젝트
## 🍀 소개
<aside>
AI 구현에 필요한 학습용 데이터를 만드는 전처리 작업이 전체 수행시간의 약 80%를 차지하며, 데이터 레이블링 시장 수요가 가파르게 상승해 레이블링 서비스 개발의 필요성이 요구됨에 따라 사용자가 직접 레이블링을 진행하여 효율적으로 필요한 데이터를 얻을 수 있도록 하기 위해 이 아이디어를 선택하게 되었습니다.

정리하자면, 사용자가 원하는 데이터를 레이블링 할 수 있는 웹 서비스입니다.

- 사용자가 데이터를 업로드하고 탐지하고 싶은 객체를 직접 매뉴얼 방식으로 레이블링(수동)
- 레이블링 AI를 이용하여 학습된 객체에 관해 자동으로 레이블링(자동)
- 다수의 사용자가 하나의 팀으로 레이블링 작업을 진행할 수 있는 협업 환경을 제공하여 대규모의 데이터 처리도 대응 가능
- 100% AI만 사용할 경우 정확하지 않기 때문에 사용자 피드백 반영 가능
- 팀원들과 커밋 메세지를 통해 서로 피드백을 주거나 대신 수정한 후 메세지 작성 가능
- 오버뷰를 통해 Todo, Memberlist, 프로젝트의 진행 상황을 도넛 그래프 확인 가능
</aside>

<br>

## 📌 시스템 아키텍처

<img width="600px" src="https://user-images.githubusercontent.com/83527046/218443380-d117c06a-e443-413f-810b-615c347aa5e4.png">

<br>

## 🔍 화면 소개

<br>

**팀원 초대 및 메일 전송**

<img src="https://user-images.githubusercontent.com/83527046/218434717-6058673e-af33-432a-adff-6d45572cf9c5.png">|<img src="https://user-images.githubusercontent.com/83527046/218434751-5a4ae9fa-1942-438a-8a55-2209a78e84b6.png">
--- | --- |

<br>

**프로젝트 배정**
<img src="https://user-images.githubusercontent.com/83527046/218434873-19acae34-fe37-434b-9db8-26586e84e3c6.png">|<img src="https://user-images.githubusercontent.com/83527046/218434908-1768a510-0ab0-4577-88ef-2c211d6b7635.png">
--- | --- | 

<br>

**수동 레이블링**

<img src="https://user-images.githubusercontent.com/83527046/218435341-55e6e988-92f4-4502-8595-68766307f187.png">|<img src="https://user-images.githubusercontent.com/83527046/218435440-cc13f62c-fd63-46b4-8804-5f4f59ef2280.png"> 
--- | --- | 

<br>

**자동 레이블링 클래스 목록 - 기본 AI, 커스텀 AI**
<img src="https://user-images.githubusercontent.com/83527046/218442590-55f7339d-919a-439c-ad74-77b1b10244d2.png">|<img src="https://user-images.githubusercontent.com/83527046/218442595-4b1aacf6-6e2b-4fcf-8ccd-542dceb151c0.png">
--- | --- | 

<br>

**자동 레이블링 및 사용자 검수**
<img src="https://user-images.githubusercontent.com/83527046/218442766-f57a4cb5-2fb0-4c4d-9bff-4f71c258e01b.png">|<img src="https://user-images.githubusercontent.com/83527046/218442776-750d783b-b0d6-48aa-bd1e-d92d5da32433.png">
--- | --- |

<br>

**사용자에 따라 다른 오버뷰 화면**

<img src="https://user-images.githubusercontent.com/83527046/218435055-3888e7b3-21ce-4f69-a0f2-bdbf522d9f4f.png">|<img src="https://user-images.githubusercontent.com/83527046/218435082-513b8b9b-9473-4279-a538-60b86a7e4c15.png">
--- | --- |

<br>

## 💻 담당한 기능

- 수동/자동 레이블링 API 구현 및 연동
- 팀/프로젝트 생성 및 배정 API 구현 및 연동
- Overview API 구현 및 연동
- 좌표값과 원본이미지 데이터를 excel 형식으로 변환하여 다운로드 기능 구현
- nodemailer를 통해 회원가입 인증코드 전송 기능 구현

## 💡 깨달은 점

- nodemon을 통해 서버 재실행을 자동화
- S3에서 오류없이 파일을 볼러 올 수 있도록 CORS 설정
- id 값의 자동 증가 구현 → Tema, User, Project id 값을 관리하기 위해 Counter Model 생성
- 웹 브라우저의 크기가 변할 때마다 이미지 크기와 바운딩 박스의 좌표값 조정 → useEffect를 사용하여 리렌더링 진행
