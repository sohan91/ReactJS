import { SUMMARY } from "./data.js";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { MovieCards } from "./components/MovieCards.jsx";
import {MovieSummery,Uri,Interstellar,Baahubali} from "./components/SummeryData.jsx";

const arr = [<Uri />, <Interstellar />, <Baahubali />];

function MovieContainer({ onSelectSummary }) {
  return (
    <div className="middle-container">
      <ul>
        {SUMMARY.map((values, index) => (
          <MovieCards
            key={index}
            title={values.title}
            images={values.img}
            summary={arr[index]}
            onSelect={onSelectSummary}
          />
        ))}
      </ul>
    </div>
  );
}
export function DescriptionContainer({ summary,...props }) {
  return (
    <footer {...props}>
      {
       <MovieSummery>{ summary===null ?<span class="msg">Please Select Any Movie</span>:summary}</MovieSummery>
      }
    </footer>
  );
}

function App() {
  const [movieSummary, setMovieSummery] = useState(null);

  return (
    <div className="container">
      <Header />
      <MovieContainer onSelectSummary={setMovieSummery} />
      <DescriptionContainer summary={movieSummary} className="last-container"/>
    </div>
  );
}

export default App;
