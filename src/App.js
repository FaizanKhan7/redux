import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShoeContainer from "./components/ShoeContainer";
import HooksShoeContainer from "./components/HooksShoeContainer";
import SandleContainer from "./components/SandleContainer";
import ChappleContainer from "./components/ChappleContainer";
import NewShoeContainer from "./components/NewShoeContainer";
import ItemComponent from "./components/ItemComponent";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemComponent shoe />
        <ItemComponent />
        <ShoeContainer />
        <HooksShoeContainer />
        <SandleContainer />
        <ChappleContainer />
        <NewShoeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
