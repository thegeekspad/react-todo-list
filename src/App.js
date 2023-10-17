import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const getRandomName = () => {
    const names = ['John', 'Sam', 'Raj'];
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <>
      <Header />
      <p>{getRandomName()}</p>
      <Footer />
    </>
  );
}

export default App;
