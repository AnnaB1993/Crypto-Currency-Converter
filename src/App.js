import Converter from "./components/Converter";
import NewsFeed from "./components/NewsFeed";
const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
        <Converter />
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
