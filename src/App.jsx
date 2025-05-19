import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <h2>A simple guide to get you started with GitHub Actions</h2>
      </header>
      <MainContent />
    </>
  );
}

export default App;
