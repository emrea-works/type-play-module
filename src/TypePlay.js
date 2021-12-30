const TypePlay = ({ text, className }) => {
  const rnd = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const lettersArray = text.split('');

	const font_0 = {
		fontFamily: 'var(--primary-font)',
		color: '#9b9be3'
	}

	const font_1 = {
		fontFamily: 'var(--secondary-font)',
		color: '#d98f8f'
	}

  return (
    <div className="letters">
      {lettersArray.map((letter, index) => (
        <span
          key={index}
          style={ rnd(0, 1) ? font_0 : font_1 }
          className={className}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TypePlay;
