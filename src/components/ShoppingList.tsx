type Props = {
  children: React.ReactNode;
};

const ShoppingList: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col p-2'>
      <h2 className='text-2xl font-bold'>Shopping List</h2>
      {children}
    </div>
  );
};

export default ShoppingList;