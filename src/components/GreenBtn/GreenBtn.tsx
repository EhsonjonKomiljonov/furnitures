import { Link } from 'react-router-dom';
import { GreenBtnProp } from '../../types';
import './green-btn.scss';

export const GreenBtn = ({text, tag, path}: GreenBtnProp) => {
  if(tag && tag == 'btn') {
    return (
      <button className='green-btn'>
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
