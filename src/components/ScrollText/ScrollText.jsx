import "./ScrollText.css";

const ScrollText = ({ words }) => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-track">
        {[...Array(20)].flatMap((_, i) =>
          words.map((word, index) => (
            <span key={`${i}-${index}`} className="scrolling-item">
              {word}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default ScrollText;
