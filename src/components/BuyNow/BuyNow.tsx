import css from './BuyNow.module.css';
import { useState } from 'react';
import { products } from '../../utils/productsData';

export const BuyNow = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [selectedProducts, setSelectedProducts] = useState<
    { index: number; qty: number }[]
  >([]);

  const handleAddProduct = (index: number) => {
    if (!selectedProducts.some(p => p.index === index)) {
      setSelectedProducts(prev => [...prev, { index, qty: 1 }]);
    }
  };

  const handleQtyChange = (index: number, qty: number) => {
    setSelectedProducts(prev =>
      prev.map(item => (item.index === index ? { ...item, qty } : item))
    );
  };

  const handleRemoveProduct = (index: number) => {
    setSelectedProducts(prev => prev.filter(item => item.index !== index));
  };

  // TOTAL PRICE
  const total = selectedProducts.reduce((sum, item) => {
    const price = parseInt(products[item.index].price);
    return sum + price * item.qty;
  }, 0);

  return (
    <div className={`${css.modal} ${isOpen ? css.show : ''}`}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={css.title}>
          Buy <span className={css.highlight}>now</span>
        </h2>

        <form className={css.formContainer}>
          <div className={css.productsContainer}>
            {/* --- SELECT --- */}
            {selectedProducts.length < products.length && (
              <div className={css.container}>
                <p className={css.text}>Choose product</p>
                <select
                  className={`${css.input} ${css.select}`}
                  value=""
                  onChange={e => handleAddProduct(Number(e.target.value))}
                >
                  <option value="">-- Select a product --</option>
                  {products
                    .map((p, index) => ({ p, index }))
                    .filter(
                      item =>
                        !selectedProducts.some(s => s.index === item.index)
                    )
                    .map(({ p, index }) => (
                      <option key={index} value={index}>
                        {p.name} — {p.type} ({p.price})
                      </option>
                    ))}
                </select>
              </div>
            )}

            {/* --- SELECTED PRODUCTS LIST --- */}
            {selectedProducts.length > 0 && (
              <div className={css.selectedList}>
                <div className={css.headerRow}>
                  <p className={css.text}>Product</p>
                  <p className={css.text}>Quantity</p>
                </div>
                {selectedProducts.map(item => (
                  <div key={item.index} className={css.productRow}>
                    <div className={css.input}>
                      {products[item.index].name} — {products[item.index].type}{' '}
                      ({products[item.index].price})
                    </div>
                    <input
                      type="number"
                      min={0}
                      className={css.input}
                      value={item.qty}
                      onChange={e =>
                        handleQtyChange(item.index, Number(e.target.value))
                      }
                    />
                    <button
                      className={css.removeBtn}
                      onClick={() => handleRemoveProduct(item.index)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            <p className={css.totalPrice}>
              Total Cost: <span className={css.highlight}>{total} UAH</span>
            </p>
          </div>

          <div className={css.informationContainer}>
            <p className={css.text}>Personal information</p>
            <div className={css.flexbox}>
              <input className={css.input} name="name" placeholder="Name" />
              <input
                className={css.input}
                name="surname"
                placeholder="Surname"
              />
            </div>

            <p className={css.text}>Email</p>
            <input
              className={css.input}
              name="email"
              placeholder="Enter your email"
            />

            <p className={css.text}>Phone number</p>
            <input
              className={css.input}
              name="phone"
              placeholder="Phone number"
            />

            <p className={css.text}>Card number</p>
            <input className={css.input} name="card" placeholder="Enter card" />

            <p className={css.text}>Comment</p>
            <textarea
              className={css.textarea}
              name="comment"
              placeholder="Enter text"
            />

            <button className={css.sendBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
