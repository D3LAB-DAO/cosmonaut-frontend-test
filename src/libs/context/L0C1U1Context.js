import { createContext } from "react";

export const L0C1U1Context = createContext(null);

export const data = [
  {
    msgData: [
      {
        title: "TransferNFT",
        desc1:
          "토큰의 소유권을 recipient에게 이전합니다. 이는 프라이빗키로 관리되는 주소만을 상정하고 있으며, 어떠한 액션도 트리거하지 않습니다(recipient가 컨트랙트일 경우에도).",
        desc2:
          "token_id가 유효한 ID여야 하며, env.sender가 해당 토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.",
      },
      {
        title: "SendNFT",
        desc1:
          "토큰의 소유권을 contract 주소에게 이전하고, 수신 컨트랙트의 액션을 트리거합니다. contract는 반드시 스마트 컨트랙트(로 컨트롤되는) 주소여야하며, CW721Receiver 인터페이스를 준수해야 합니다. 토큰 ID와 함께 msg가 수신 컨트랙트에게 전달됩니다.",
        desc2:
          "마찬가지로 token_id가 유효한 ID여야 하며, env.sender가 해당 토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.",
      },
      {
        title: "Approve",
        desc1:
          "token_id 토큰에 대한 전송(transfer나 send) 권한을 spender에게 수여합니다. 한 토큰에 대해 여러 spender가 있을 수 있습니다. 토큰이 한 번 전송되어지면(transferred or sent) 초기화됩니다.",
        desc2:
          "env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인 경우에만 수행할 수 있습니다.",
      },
      {
        title: "Revoke",
        desc1: "token_id 토큰에 대해 이전에 수여했던 권한을 파기합니다.",
        desc2:
          "env.sender가 해당 토큰을 소유하고 있는 경우 혹은 operator인 경우에만 수행할 수 있습니다.",
      },
      {
        title: "ApproveAll",
        desc1:
          "env.sender가 보유한 모든 토큰에 대한 전송(transfer나 send) 권한을 operator에게 부여합니다. ",
        desc2:
          "이는 소유권자 주소와 operator가 동등한 권한을 가지는 것에 해당하며, 그렇기 때문에 이후에 받을 모든 토큰에 대해서도 적용됩니다.",
      },
      {
        title: "RevokeAll",
        desc1: "operator에 대한 ApproveAll 권한을 파기합니다.",
        desc2: "",
      },
    ],
    queriesData: [
      {
        title: "OwnerOf",
        desc1:
          "주어진 token_id에 대한 소유권자를 반환합니다. 또한, 이 토큰에 대해 권한을 가지고 있는 주소들도 반환합니다. 만일 없는 토큰에 대해 질의했다면 에러를 반환합니다. 반환 타입은 OwnerOfResponse입니다.",
        desc2:
          "include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
      },
      {
        title: "Approval",
        desc1:
          "토큰 token_id의 spender에 대한 권한 정보를 반환합니다. 반환 타입은 ApprovalResponse입니다. 만일 권한 정보를 찾을 수 없다면 에러를 반환합니다.",
        desc2:
          "include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
      },
      {
        title: "Approvals",
        desc1:
          "토큰 token_id에 접근이 허가된, 권한이 있는 모든 사용자들을 반환합니다. 반환 타입은 ApprovalsResponse입니다.",
        desc2:
          "include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
      },
      {
        title: "AllOperators",
        desc1:
          "owner가 권한을 준 모든 operator를 반환합니다. 반환 타입은 OperatorsResponse입니다.",
        desc2:
          "include_expired를 설정하지 않거나 false로 설정할 경우 만기된 권한들을 무시합니다. 반대로, 만일 만기된 권한들도 확인하고 싶다면 해당 값을 true로 설정해야 합니다.",
        desc3:
          "만일 start_after를 설정하지 않으면 해당 질의는 operators에 대해 사전순으로 처음 결과부터 반환할 것입니다. 반대로 start_after가 설정되어 있다면, 해당 주소에서부터 limit개 만큼의 operators를 반환합니다.",
        desc4:
          "만일 limit를 설정하지 않으면 기본값 DEFAULT_LIMIT으로 설정됩니다. 또한 최대 제한인 MAX_LIMIT을 넘을 수 없으며, 만일 그보다 큰 경우 MAX_LIMIT로 조정됩니다. DEFAULT_LIMIT와 MAX_LIMIT는 컨트랙트가 임의 설정할 수 있는, CW721 Spec을 해치지 않는, 변경할 수 있는 값입니다. 기본값이자 추천하는 값은 MAX_LIMIT 30 그리고 DEFAULT_LIMIT 10입니다.",
      },
      {
        title: "NumTokens",
        desc1:
          "발행된 모든 토큰의 개수를 반환합니다. 반환 타입은 NumTokensResponse입니다.",
      },
    ],
    receiverData: [
      {
        desc1:
          "SendNft의 반대부에는 ReceiveNft가 있습니다. ReceiveNft는 CW721 토큰을 다루고 싶은 모든 컨트랙트가 반드시 구현해야하는 스펙입니다. (일반적으로 CW721 컨트랙트 자체가 구현하는 항목은 아닙니다.)",
        desc2:
          "SendNft 메시지를 보내는 CW721 구현체 컨트랙트 주소는 env.sender에서 다뤄지므로 위변조할 수 없습니다. ReceiveNft를 다루는 컨트랙트에서는 이 발송인 주소가 토큰 컨트랙트 주소와 일치하는지 확인하고 보장한 후 처리해야 합니다. 임의의 주소를 모두 허용해서는 안 됩니다.",
        desc3: "sender는 토큰을 전송하고자 하는 원 주소입니다.",
        desc4: "token_id는 토큰의 고유한 ID입니다.",
        desc5:
          "msg는 컨트랙트-맞춤 메시지 혹은 임의 데이터로 디코딩 될 수 있는 바이너리입니다. 만일 기본 액션만 수행하고자 한다면 msg는 비어있을 수 있습니다.",
      },
    ],
  },
];
