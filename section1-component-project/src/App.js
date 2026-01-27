import { SUMMARY } from './data.js';
import {Header} from './components/Header.jsx';
import { MovieCards } from './components/MovieCards.jsx';

function MovieContainer() {
  return (
    <div className="middle-container">
      <ul>
        {
        SUMMARY.map((values, index) => (
          <MovieCards
            title={values.title}
            images={values.img}
          />
        ))}
      </ul>
    </div>
  );
}



function DescriptionContainer() {
  return <footer className="last-container"></footer>;
}

function App() {
  return (
    <div className="container">
      <Header />
      <MovieContainer />
      <DescriptionContainer />
    </div>
  );
}

export default App;
