import Loader from '../../assets/images/loader-icon.svg'
import './loading.scss';

export const Loading = () => {
  return (
    <>
      <div className='loader-box'>
        <img src={Loader} alt='Loading...' width={100} />
      </div>
    </>
  );
};
