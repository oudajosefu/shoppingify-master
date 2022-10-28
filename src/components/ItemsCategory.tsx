type Props = {
  categoryTitle: string;
  children: React.ReactNode;
};

const ItemsCategory: React.FC<Props> = ({ categoryTitle, children }) => {
  return (
    <section className='flex flex-col'>
      <h2 className='text-lg'>{categoryTitle}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2 mt-4'>
        {children}
      </div>
    </section>
  );
};
export default ItemsCategory;