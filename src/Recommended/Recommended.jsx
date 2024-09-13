import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <Button onClickHandler={handleClick} title='All Products' />
          <Button onClickHandler={handleClick} title='Nike' />
          <Button onClickHandler={handleClick} title='Adidas' />
          <Button onClickHandler={handleClick} title='Puma' />
          <Button onClickHandler={handleClick} title='Vans' />
        </div>
      </div>
    </>
  );
};

export default Recommended;
