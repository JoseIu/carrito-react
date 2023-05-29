import useShoop from '../hooks/useShoop';

const Shoop = ({ shoopModal, setShoopModal }) => {
  const SHOW_SHOOP = shoopModal ? 'shoop-active' : '';
  const { shoops } = useShoop();
  return (
    <div className={`shoop ${SHOW_SHOOP}`}>
      <ul className='shoop-ul'>
        {shoops.map(shoop => (
          <li className='shoop-li' key={shoop.id}>
            <article className='shoop-article'>
              <img
                className='shoop-img'
                src={shoop.thumbnail}
                alt={shoop.title}
              />

              <h2>{shoop.title}</h2>
              <p>Precio : {shoop.totalPrice}$</p>
              <p>Cantidad: {shoop.quantity}</p>
            </article>
          </li>
        ))}
        {/* <li className='shoop-li'>
          <article className='shoop-article'>
            <img
              className='shoop-img'
              src='https://i.dummyjson.com/data/products/30/thumbnail.jpg'
              alt=''
            />

            <h2>Llave</h2>
            <p>Precio : 30$</p>
            <p>cantidad 1</p>
          </article>
        </li> */}
      </ul>
      <button>Limipar Carrito</button>
      <button
        className='shoop-close'
        onClick={() => setShoopModal(!shoopModal)}
      >
        X
      </button>

      <span>TOAL: 2000$</span>
    </div>
  );
};

export default Shoop;
