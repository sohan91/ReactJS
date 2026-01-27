import './MovieCards.css';
export function MovieCards({ title, images }) {
  return (
    <li className="card-container">
      <span>{title}</span>
      <img src={images} alt={title} />
    </li>
  );
}