import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Platform } from "./pages/Platform";
import { LoginPage } from "./pages/LoginPage";
import { ProjectDetail } from "./pages/ProjectDetail";
import { AllProjects } from "./pages/AllProjects";
import { UserProfile } from "./pages/UserProfile";
import { PostProject } from "./pages/PostProject";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CustomChatPage } from "./pages/ChatPage/CustomChatPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="platform"
          element={<ProtectedRoutes Component={Platform} />}
        />
        <Route path="projects" element={<AllProjects />} />
        <Route
          path="project/:projectId"
          element={<ProtectedRoutes Component={ProjectDetail} />}
        />
        <Route
          path="profile/:username"
          element={<ProtectedRoutes Component={UserProfile} />}
        />
        <Route
          path="post-project"
          element={<ProtectedRoutes Component={PostProject} />}
        />
        <Route
          path="chat"
          element={<ProtectedRoutes Component={CustomChatPage} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
