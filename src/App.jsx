import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
import Feed from "./components/Feed";

function App() {
  const [count, setCount] = useState(0);
  const appRouter = createBrowserRouter([
    {path:"/",element:<Body/>,
  children:[
    {path:"/",element:<Feed/>},
    {path:"/watch",element:<WatchPage/>}
  ]}
  ]);
  
  return (
    <div> 
      {/* <NavBar /> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
