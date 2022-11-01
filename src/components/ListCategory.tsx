type Props = {
  categoryTitle: string;
  children: React.ReactNode;
};

const ListCategory: React.FC<Props> = ({ categoryTitle, children }) => {
  return (
    <div className='flex flex-col text-sm font-medium'>
      <h3 className='text-shopping-list-category-title'>{categoryTitle}</h3>
      <div className='flex flex-col'>
        {children}
      </div>
    </div>
  );
};

export default ListCategory;