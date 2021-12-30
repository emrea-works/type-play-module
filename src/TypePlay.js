const TypePlay = ({ text, className }) => {
  const rnd = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const lettersArray = text.split('');

	const font_0 = {
		fontFamily: 'var(--primary-font)',
	}

	const font_1 = {
		fontFamily: 'var(--secondary-font)',
		marginLeft: '1px',
		marginRight: '-1px'
	}

  return (
    <div className="letters">
      {lettersArray.map((letter, index) => (
        <span
          key={index}
          /*style={{ fontFamily: rnd(0, 1) ? 'var(--primary-font)' : 'var(--secondary-font)' }}*/
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
