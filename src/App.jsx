import { Route, Routes } from "react-router-dom";
import MyPage from "./containers/MyPage/MyPage";
import SignUp from "./components/profile/SignUp";

import Index from "./containers/IndexPage/Index";
import Main from "./containers/MainPage/Main";
import { content, ContentContext } from "./libs/context/ContentContext";
import { UserContext, userData } from "./libs/context/UserContext";
import { L0C1U1Context, data } from "./libs/context/L0C1U1Context";
import ChapterNav from "./containers/ChapterPage/ChapterNav";
import UnitNav from "./containers/ChapterPage/UnitNav";
import Navigator from "./components/chapter/Navigator";

function App() {
  return (
    <ContentContext.Provider value={content}>
      <L0C1U1Context.Provider value={data}>
        <UserContext.Provider value={userData}>
          <div>
            <Routes>
              <Route path="/cosmonaut-frontend" element={<Main />} />
              {/* Testing */}
              <Route path="/ts" element={<Navigator />} />
              {/* Testing */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/lesson/:id" element={<Index />} />
              <Route
                path="/lesson/:id/chapter/:chID"
                element={<ChapterNav />}
              />
              <Route
                path="/lesson/:id/chapter/:chID/unit/:uID"
                element={<UnitNav />}
              />
            </Routes>
          </div>
        </UserContext.Provider>
      </L0C1U1Context.Provider>
    </ContentContext.Provider>
  );
}

export default App;
