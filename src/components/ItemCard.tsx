import { PlusIcon } from '@heroicons/react/24/solid';

type Props = {
  title: string;
};

const ItemCard: React.FC<Props> = ({ title }) => {
  return (
    <button className='flex items-center justify-between text-sm font-medium bg-aside-light dark:bg-aside-dark shadow-item-card hover:shadow-xl p-3 text-left rounded-xl transition-all duration-200 hover:scale-110 active:scale-100'>
      <h3 className='flex-1'>{title}</h3>
      <PlusIcon className='w-5 h-5 text-plus' />
    </button>
  );
};

export default ItemCard;