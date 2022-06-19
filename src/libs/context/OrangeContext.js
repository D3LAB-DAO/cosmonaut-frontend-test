import { createContext } from "react";

export const OrangeContext = createContext(null);

export const orangeData = [
  {
    msgData: [
      {
        id: 1,
        title: "TransferNFT",
        desc: "토큰의 소유권을 `recipient`에게 이전합니다. 이는 프라이빗키로 관리되는 주소만을 상정하고 있으며, 어떠한 액션도 트리거하지 않습니다(`recipient`가 컨트랙트일 경우에도).  `token_id`가 유효한 ID여야 하며, `env.sender`가 해당 토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.",
      },
      {
        id: 2,
        title: "SendNFT",
        desc: "토큰의 소유권을 `contract` 주소에게 이전하고, 수신 컨트랙트의 액션을 트리거합니다. `contract`는 반드시 스마트 컨트랙트(로 컨트롤되는) 주소여야하며, CW721Receiver 인터페이스를 준수해야 합니다. 토큰 ID와 함께 `msg`가 수신 컨트랙트에게 전달됩니다. 마찬가지로 `token_id`가 유효한 ID여야 하며, `env.sender`가 해당 토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.",
      },
      {
        id: 3,
        title: "Approve",
        desc: "`token_id` 토큰에 대한 전송(transfer나 send) 권한을 `spender`에게 수여합니다. 한 토큰에 대해 여러 `spender`가 있을 수 있습니다. 토큰이 한 번 전송되어지면(transferred or sent) 초기화됩니다. `env.sender`가 해당 토큰을 소유하고 있는 경우 혹은 `operator`인 경우에만 수행할 수 있습니다.",
      },
      {
        id: 4,
        title: "Revoke",
        desc: "`token_id` 토큰에 대해 이전에 수여했던 권한을 파기합니다. `env.sender`가 해당 토큰을 소유하고 있는 경우 혹은 `operator`인 경우에만 수행할 수 있습니다.",
      },
      {
        id: 5,
        title: "ApproveAll",
        desc: "env.sender가 보유한 모든 토큰에 대한 전송(transfer나 send) 권한을 operator에게 부여합니다. 이는 소유권자 주소와 operator가 동등한 권한을 가지는 것에 해당하며, 그렇기 때문에 이후에 받을 모든 토큰에 대해서도 적용됩니다.",
      },
      {
        id: 6,
        title: "RevokeAll",
        desc: "`operator`에 대한 `ApproveAll` 권한을 파기합니다.",
      },
    ],
  },
  {
    id: 2,
    title: "SendNFT",
    desc: "토큰의 소유권을 `contract` 주소에게 이전하고, 수신 컨트랙트의 액션을 트리거합니다. `contract`는 반드시 스마트 컨트랙트(로 컨트롤되는) 주소여야하며, CW721Receiver 인터페이스를 준수해야 합니다. 토큰 ID와 함께 `msg`가 수신 컨트랙트에게 전달됩니다. 마찬가지로 `token_id`가 유효한 ID여야 하며, `env.sender`가 해당 토큰을 소유하고 있거나 소유권자로부터 전송할 수 있는 허가를 받았어야 합니다.",
  },
  {
    id: 3,
    title: "Approve",
    desc: "`token_id` 토큰에 대한 전송(transfer나 send) 권한을 `spender`에게 수여합니다. 한 토큰에 대해 여러 `spender`가 있을 수 있습니다. 토큰이 한 번 전송되어지면(transferred or sent) 초기화됩니다. `env.sender`가 해당 토큰을 소유하고 있는 경우 혹은 `operator`인 경우에만 수행할 수 있습니다.",
  },
  {
    id: 4,
    title: "Revoke",
    desc: "`token_id` 토큰에 대해 이전에 수여했던 권한을 파기합니다. `env.sender`가 해당 토큰을 소유하고 있는 경우 혹은 `operator`인 경우에만 수행할 수 있습니다.",
  },
  {
    id: 5,
    title: "ApproveAll",
    desc: "env.sender가 보유한 모든 토큰에 대한 전송(transfer나 send) 권한을 operator에게 부여합니다. 이는 소유권자 주소와 operator가 동등한 권한을 가지는 것에 해당하며, 그렇기 때문에 이후에 받을 모든 토큰에 대해서도 적용됩니다.",
  },
  {
    id: 6,
    title: "RevokeAll",
    desc: "`operator`에 대한 `ApproveAll` 권한을 파기합니다.",
  },
];
