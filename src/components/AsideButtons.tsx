import { ListBulletIcon } from "@heroicons/react/24/solid";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  asideSelection: {
    items: boolean;
    history: boolean;
    statistics: boolean;
  };
  setAsideSelection: React.Dispatch<
    React.SetStateAction<{
      items: boolean;
      history: boolean;
      statistics: boolean;
    }>
  >;
};


const AsideButtons: React.FC<Props> = ({ asideSelection, setAsideSelection }) => {
  const onAsideSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    switch (id) {
      case "items":
        setAsideSelection({
          items: true,
          history: false,
          statistics: false,
        });
        break;
      case "history":
        setAsideSelection({
          items: false,
          history: true,
          statistics: false,
        });
        break;
      case "statistics":
        setAsideSelection({
          items: false,
          history: false,
          statistics: true,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='flex flex-col gap-12 w-full items-center relative text-xs transition-all isolate'>
      <div className={`absolute z-10 bg-custom-orange h-10 w-[6px] top-0 left-0 rounded-r-lg transition-transform
      ${asideSelection.items && 'transform translate-y-0' ||
        asideSelection.history && 'transform translate-y-[88px]' ||
        asideSelection.statistics && 'transform translate-y-44'}`} />

      <div className="flex relative">
        <button
          className='flex px-4 py-2 justify-center relative hover:bg-slate-400 dark:hover:bg-slate-200 hover:bg-opacity-20 active:bg-opacity-30 dark:hover:bg-opacity-20 dark:active:bg-opacity-30 rounded-lg peer'
          id='items'
          onClick={onAsideSelect}>
          <ListBulletIcon className='w-6 h-6' />
        </button>
        <div role='tooltip' className='absolute invisible opacity-0 text-primary-dark peer-hover:visible peer-hover:opacity-100 transition-opacity duration-300 delay-1000 bg-tooltip rounded-md py-1 px-4 top-1/2 left-full ml-2 -translate-y-1/2 before:content-[""] before:absolute before:border-[6px] before:border-y-[5px] before:border-y-transparent before:border-l-transparent before:right-full before:top-1/2 before:-translate-y-1/2 before:border-tooltip'>
          items
        </div>
      </div>
      <div className="flex relative">
        <button
          className='flex px-4 py-2 justify-center relative hover:bg-slate-400 dark:hover:bg-slate-200 hover:bg-opacity-20 active:bg-opacity-30 dark:hover:bg-opacity-20 dark:active:bg-opacity-30 rounded-lg peer'
          id='history'
          onClick={onAsideSelect}>
          <span className='material-symbols-outlined'>replay</span>
        </button>
        <div role='tooltip' className='absolute invisible opacity-0 text-primary-dark peer-hover:visible peer-hover:opacity-100 transition-opacity duration-300 delay-1000 bg-tooltip rounded-md py-1 px-4 top-1/2 left-full ml-2 -translate-y-1/2 before:content-[""] before:absolute before:border-[6px] before:border-y-[5px] before:border-y-transparent before:border-l-transparent before:right-full before:top-1/2 before:-translate-y-1/2 before:border-tooltip'>
          history
        </div>
      </div>
      <div className="flex relative">
        <button
          className='flex px-4 py-2 justify-center relative hover:bg-slate-400 dark:hover:bg-slate-200 hover:bg-opacity-20 active:bg-opacity-30 dark:hover:bg-opacity-20 dark:active:bg-opacity-30 rounded-lg peer'
          id='statistics'
          onClick={onAsideSelect}>
          <ChartBarSquareIcon className='w-6 h-6' />
        </button>
        <div role='tooltip' className='absolute invisible opacity-0 text-primary-dark peer-hover:visible peer-hover:opacity-100 transition-opacity duration-300 delay-1000 bg-tooltip rounded-md py-1 px-4 top-1/2 left-full ml-2 -translate-y-1/2 before:content-[""] before:absolute before:border-[6px] before:border-y-[5px] before:border-y-transparent before:border-l-transparent before:right-full before:top-1/2 before:-translate-y-1/2 before:border-tooltip'>
          statistics
        </div>
      </div>
    </div >
  );
};

export default AsideButtons;