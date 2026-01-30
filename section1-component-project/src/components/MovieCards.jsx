import './MovieCards.css';
export function MovieCards({ title, images,summary,onSelect}) {
  return (
    <li className="card-container" onClick={()=>onSelect(summary)}>
      <span>{title}</span>
      <img src={images} alt={title} />
    </li>
  );
}