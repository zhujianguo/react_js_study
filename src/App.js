import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home";

// 添加404页面
function NotFound(){
  return <div>404</div>;
}
function App () {
return (
  <BrowserRouter>
    {/* 开始使用路由 */}
    <div>
      <div>
        <Link to="/about">About</Link><br></br>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* 路由找不到 加载404组件 */}
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  </BrowserRouter>
)
}

export default App;