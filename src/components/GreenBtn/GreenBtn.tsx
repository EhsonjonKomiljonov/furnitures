import { Link } from 'react-router-dom';
import { GreenBtnProp } from '../../types';
import './green-btn.scss';

export const GreenBtn = ({ text, tag, path, type }: GreenBtnProp) => {
  if (tag) {
    return (
      <button className='green-btn' type={type ? type : 'button'}>
        {text}
      </button>
    );
  } else {
    return (
      <Link className='green-btn' to={path || '/'}>
        {text}
      </Link>
    );
  }
};
