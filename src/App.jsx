import { Route, Routes } from "react-router-dom";
import MyPage from "./containers/MyPage/MyPage";
import SignUp from "./components/profile/SignUp";

import Index from "./containers/IndexPage/Index";
import Main from "./containers/MainPage/Main";
import UserStart from "./components/chapter/UserStart";
import { content, ContentContext } from "./libs/context/ContentContext";
import { UserContext, userData } from "./libs/context/UserContext";
import { orangeData, OrangeContext } from "./libs/context/OrangeContext";
import { GreenContext, greenData } from "./libs/context/GreenContext";
import { BlueContext, blueData } from "./libs/context/BlueContext";
import ChapterNav from "./containers/ChapterPage/ChapterNav";

function App() {
  return (
    <BlueContext.Provider value={blueData}>
      <GreenContext.Provider value={greenData}>
        <OrangeContext.Provider value={orangeData}>
          <ContentContext.Provider value={content}>
            <UserContext.Provider value={userData}>
              <div>
                <Routes>
                  <Route path="/cosmonaut-frontend" element={<Main />} />
                  {/* Testing */}
                  <Route path="/ts" element={<UserStart />} />
                  {/* Testing */}
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/lesson/:id" element={<Index />} />
                  <Route
                    path="/lesson/:id/chapter/:chID"
                    element={<ChapterNav />}
                  />
                </Routes>
              </div>
            </UserContext.Provider>
          </ContentContext.Provider>
        </OrangeContext.Provider>
      </GreenContext.Provider>
    </BlueContext.Provider>
  );
}

export default App;
