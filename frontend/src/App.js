import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import CalendarPage from './pages/CalendarPage';
import Gamgi from './pages/Gamgi';
import MyResponsiveBar from './pages/StatisticPage';
import Emotion from './pages/Emotion';
import SelfCheckPage from './pages/SelfCheckPage';
import PostViewer from './components/post/PostViewer';
import Depression from './pages/Depression';
import ContentList from './selfCheck/ContentList';
import TitleList from './selfCheck/TitleList';
import Anxiety from './pages/Anxiety';
import Obsession from './pages/Obsession';
import Stress from './pages/Stress';
import Suicide from './pages/Suicide';
import CenterList from './selfCheck/CenterList';
import CenterInfo from './pages/CenterInfo';
import DropMenu from './pages/DropMenu';
import DropdownBox from './selfCheck/DropdownBox';
import AnxietyCheck from './pages/AnxietyCheck';
import DepressionCheck from './pages/DepressionCheck';
import ObsessionCheck from './pages/ObsessionCheck';
import StressCheck from './pages/StressCheck';
import SuicideCheck from './pages/SuicideCheck';
import PhysicalCheck from './pages/PhysicalCheck';
import PhysicalDisability from './pages/PhysicalDisability';
import Calculator from './pages/Calculator';
import Auth from './hoc/auth';

const App = () => {
  return (
    <div>
      <Route component={LoginPage} path="/" exact />
      <Route component={Gamgi} path="/gamgi" />
      <Route component={PostListPage} path={['/postlist', '/postlist']} exact />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/postId" />
      <Route component={CalendarPage} path="/calendar" />

      <Route component={MyResponsiveBar} path="/statistic" />
      <Route component={Emotion} path="/emotion" />
      <Route component={SelfCheckPage} path="/selfcheck" />
      <Route component={PostViewer} path="/viewer" />
      <Route component={Depression} path="/depression" />
      <Route component={ContentList} path="/ContentList" />
      <Route component={TitleList} path="/TitleList" />
      <Route component={Anxiety} path="/Anxiety" />
      <Route component={Obsession} path="/Obsession" />
      <Route component={PhysicalDisability} path="/Physicaldisability" />
      <Route component={Stress} path="/Stress" />
      <Route component={Suicide} path="/suicide" />
      <Route component={CenterList} path="/centerList" />
      <Route component={CenterInfo} path="/centerinfo" />
      <Route component={DropMenu} path="/dropdown" />
      <Route component={DropdownBox} path="/dropdownbox" />
      <Route component={AnxietyCheck} path="/anxietycheck" />
      <Route component={DepressionCheck} path="/depressioncheck" />
      <Route component={ObsessionCheck} path="/obsessionCheck" />
      <Route component={PhysicalCheck} path="/physicalCheck" />
      <Route component={StressCheck} path="/stresscheck" />
      <Route component={SuicideCheck} path="/suicidecheck" />
      <Route component={Calculator} path="/calculator" />
    </div>
  );
};
export default App;
