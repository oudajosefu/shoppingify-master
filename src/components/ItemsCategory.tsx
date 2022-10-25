type Props = {
  categoryTitle: string;
  categoryItems?: [];
};

const ItemsCategory: React.FC<Props> = ({ categoryTitle }) => {
  return (
    <section className='flex flex-col'>
      <h2 className='text-lg'>{categoryTitle}</h2>
      <div className='grid grid-cols-2 gap-y-6 gap-x-2'>

      </div>
    </section>
  );
};
export default ItemsCategory;