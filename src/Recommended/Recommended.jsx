import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          <Button onClickHandler={handleClick} title='All Products' value='' />
          <Button onClickHandler={handleClick} title='Nike' value='Nike' />
          <Button onClickHandler={handleClick} title='Adidas' value='Adidas' />
          <Button onClickHandler={handleClick} title='Puma' value='Puma' />
          <Button onClickHandler={handleClick} title='Vans' value='Vans' />
        </div>
      </div>
    </>
  );
};

export default Recommended;
