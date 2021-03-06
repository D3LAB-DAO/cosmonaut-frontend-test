import { createContext } from "react";

export const UserContext = createContext(null);

export const userData = [
  {
    number: 0,
    title: "Get Ready for Terraforming",
    width: 100,
    states: "Completed",
    nftUrl: "../../assets/images/cosmonaut-nft.jpg",
  },
  {
    number: 1,
    title: "Welcome to Spaceship Factory",
    width: 20,
    states: "Progress",
    nftUrl: "../../assets/images/esfera-nft.jpg",
  },
  {
    number: 2,
    title: "Fuel Up and Load the Freight",
    width: 0,
    states: "0%",
    nftUrl: "../../assets/images/dummy-nft.jpg",
  },
  {
    number: 3,
    title: "Prepare to Launch",
    width: 0,
    states: "0%",
    nftUrl: "../../assets/images/dummy-nft.jpg",
  },
  {
    number: 4,
    title: "ESFERA Takeoff",
    width: 0,
    states: "0%",
    nftUrl: "../../assets/images/dummy-nft.jpg",
  },
  {
    number: 5,
    title: "Let's Play a Game!",
    width: 0,
    states: "0%",
    nftUrl: "../../assets/images/dummy-nft.jpg",
  },
];
