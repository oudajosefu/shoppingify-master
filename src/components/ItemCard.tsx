import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import type { CartItem, CartCategory } from '../pages';

type Props = {
  title: string;
  categoryTitle: string;
  setCartItems: React.Dispatch<React.SetStateAction<CartCategory[]>>;
};

const ItemCard: React.FC<Props> = ({ title, categoryTitle, setCartItems }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className='flex items-center justify-between text-sm font-medium bg-item-card-light dark:bg-item-card-dark shadow-item-card hover:shadow-xl p-3 text-left rounded-xl transition-all duration-200 hover:scale-110 active:scale-100 group'
      onClick={() => {
        setIsPressed(true);
        setCartItems((prev) => {
          const categoryIndex = prev.findIndex(
            (category) => category.name === categoryTitle
          );
          // Category should always exist so type assertion is safe
          const category = prev[categoryIndex] as CartCategory;
          const itemIndex = category.items.findIndex(
            (item) => item.name === title
          );
          if (itemIndex === -1) {
            category.items.push({
              category: categoryTitle,
              name: title,
              quantity: 1
            });
          } else {
            // Item should always exist if findIndex returns -1 so type assertion is safe
            const item = category.items[itemIndex] as CartItem;
            item.quantity += 1;
          }
          return [...prev];
        });
      }}>
      <h3 className={`flex-1 group-hover:text-custom-orange group-hover:scale-110 transition-transform group-hover:translate-x-1 ${isPressed && 'text-green-500'}`}>
        {title}
      </h3>
      {isPressed ? (
        <CheckIcon className='w-5 h-5 text-check group-hover:text-custom-orange group-hover:scale-125 transition-transform text-green-500' />
      ) : (
        <PlusIcon className='w-5 h-5 text-plus group-hover:text-custom-orange group-hover:scale-125 transition-transform' />
      )}
    </button>
  );
};

export default ItemCard;