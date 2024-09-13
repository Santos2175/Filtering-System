const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className='sidebar-label-container'>
      <input onChange={handleChange} type='radio' name={name} value={value} />
      <span
        className='checkmark'
        style={{
          backgroundColor: color,
          border: color === 'white' ? '2px solid black' : 'none',
        }}></span>
      {title}
    </label>
  );
};

export default Input;
