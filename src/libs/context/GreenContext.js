import { createContext } from "react";

export const GreenContext = createContext(null);

export const greenData = [
  {
    queriesData: [
      {
        id: 1,
        title: "OwnerOF",
        desc: "주어진 token_id에 대한 소유권자를 반환합니다. 또한, 이 토큰에 대해 권한을 가지고 있는 주소들도 반환합니다. 만일 없는 토큰에 대해 질의했다면 에러를 반환합니다. 반환 타입은 OwnerOfResponse입니다. include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
      },
      {
        id: 2,
        title: "Approval",
        desc: "토큰 token_id의 spender에 대한 권한 정보를 반환합니다. 반환 타입은 ApprovalResponse입니다. 만일 권한 정보를 찾을 수 없다면 에러를 반환합니다. include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
      },
    ],
  },
];
