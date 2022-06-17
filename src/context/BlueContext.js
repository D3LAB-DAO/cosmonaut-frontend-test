import { createContext } from "react";

export const BlueContext = createContext(null);

export const blueData = [
  {
    receiverNFTData: [
      {
        id: 1,
        title: "ReceiverNFT",
        desc1:
          "SendNft의 반대부에는 ReceiveNft가 있습니다. ReceiveNft는 CW721 토큰을 다루고 싶은 모든 컨트랙트가 반드시 구현해야하는 스펙입니다. (일반적으로 CW721 컨트랙트 자체가 구현하는 항목은 아닙니다.) SendNft 메시지를 보내는 CW721 구현체 컨트랙트 주소는 env.sender에서 다뤄지므로 위변조할 수 없습니다. ReceiveNft를 다루는 컨트랙트에서는 이 발송인 주소가 토큰 컨트랙트 주소와 일치하는지 확인하고 보장한 후 처리해야 합니다. 임의의 주소를 모두 허용해서는 안 됩니다.",
        desc2:
          "`sender`는 토큰을 전송하고자 하는 원 주소입니다. `token_id`는 토큰의 고유한 ID입니다. `msg`는 컨트랙트-맞춤 메시지 혹은 임의 데이터로 디코딩 될 수 있는 바이너리입니다. 만일 기본 액션만 수행하고자 한다면 `msg`는 비어있을 수 있습니다.",
      },
    ],
  },
];
