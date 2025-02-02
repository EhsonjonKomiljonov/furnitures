import { useSaveSaleStore } from '../../stores/SaveSaleStore';
import { SaleFurnituresCardProp } from '../../types';
import './sale-furnitures-card.scss';

export const SaleFurnituresCard = ({ obj, path }: SaleFurnituresCardProp) => {
  const { id, img_link, name, description, sale_price, price } = obj;
  const setSaveSaleData = useSaveSaleStore((state) => state.setSavedData);

  const handleSaveProduct = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget.checked) {
      const localData =
        JSON.parse(localStorage.getItem('sale-products') || '[]') || [];

      if (id.toString() == evt.currentTarget.id) {
        localData.push(obj);
      }

      setSaveSaleData(localData);
      localStorage.setItem('sale-products', JSON.stringify(localData));
    } else {
      const localData =
        JSON.parse(localStorage.getItem('sale-products') || '[]') || [];

      const deletedProduct = localData.filter(
        (item: any) => item.id != evt.currentTarget.id
      );

      setSaveSaleData(deletedProduct);
      localStorage.setItem('sale-products', JSON.stringify(deletedProduct));
    }
  };

  return (
    <li className='sale-furnitures-card'>
      <div>
        <img src={img_link} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <sub className='text-decoration-line-through'>{price}$</sub>
      <span className='d-block'>{sale_price}$</span>
      <label className='save-container'>
        <input
          defaultChecked={path ? true : false}
          type='checkbox'
          id={`${id}`}
          onChange={(evt) => handleSaveProduct(evt)}
        />
        <svg
          className='save-regular'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 384 512'
        >
          <path d='M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'></path>
        </svg>
        <svg
          className='save-solid'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 384 512'
        >
          <path d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'></path>
        </svg>
      </label>
    </li>
  );
};
