import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import FindId from './pages/login/id-find';
import FindPwd from './pages/login/pw-find';
import ForestDiary from './pages/diaries/diaries_forest';
import CityDiary from './pages/diaries/diaries_city';
import SeaDiary from './pages/diaries/diaries_sea';
import Signup from './pages/signup/signup';
import Home from './pages/home/home';
import Sea from './pages/home/sea';
import Friend from './pages/home/friend';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 경로 */}
        <Route path="/" element={<Login />} />
        
        <Route path="/findId" element={<FindId />} />

        <Route path="/findPwd" element={<FindPwd />} />

        {/* 숲 다이어리 페이지 경로 */}
        <Route path="/forest_diary" element={<ForestDiary />}></Route>
        {/* 도시 다이어리 페이지 경로 */}
        <Route path="/city_diary" element={<CityDiary />}></Route>
        {/* 바다 다이어리 페이지 경로 */}
        <Route path="/sea_diary" element={<SeaDiary />}></Route>

        {/* 회원가입 페이지 경로 */}
        <Route path="/signup" element={<Signup/>} />       


        <Route path="/home" element={<Home userTendency={user_tendency} />} />

        <Route path="/sea" element={<Sea />}></Route>

        <Route path="/friend" element={<Friend />}></Route>
      </Routes>
    </Router>
  );
};

export default App;