import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/detail";
import Landing from "./pages/landing";
import Main from "./pages/main";
import {useState} from "react";

const App = () => {
  const [account, setAccount] = useState("");
  console.log(account);

  return (
    <BrowserRouter>
      <div className="bg-red-100">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
