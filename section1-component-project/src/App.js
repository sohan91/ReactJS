import { SUMMARY } from './data.js';

function Header() {
  return (
    <div className="head-section">
      <h1>MOVIE DESCRIPTION</h1>
    </div>
  );
}

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

function MovieCards({ title, images }) {
  return (
    <li className="card-container">
      <span>{title}</span>
      <img src={images} alt={title} />
    </li>
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
