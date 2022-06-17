import { Route, Routes } from "react-router-dom";
import MyPage from "./containers/MyPage/MyPage";
import SignUp from "./components/profile/SignUp";
import Chapter from "./containers/ChapterPage/Chapter";
import Index from "./containers/IndexPage/Index";
import Main from "./containers/MainPage/Main";
import UserStart from "./components/chapter/UserStart";
import { content, ContentContext } from "./context/ContentContext";
import { UserContext, userData } from "./context/UserContext";
import { orangeData, OrangeContext } from "./context/OrangeContext";
import { GreenContext, greenData } from "./context/GreenContext";
import { BlueContext, blueData } from "./context/BlueContext";

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
                    element={<Chapter />}
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
