interface SearchProps {
   name: string;
   inputValue: string;
   placeholder: string;
   changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent: React.FC<SearchProps> = ({
   name,
   inputValue,
   changeHandler,
   placeholder,
}) => {
   return (
      <div className='container flex items-center py-8'>
         <label htmlFor={name}>
            <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z'
                  fill='#FFF'
               />
            </svg>
         </label>
         <input
            name={name}
            id={name}
            placeholder={placeholder}
            type='text'
            value={inputValue}
            onChange={changeHandler}
            className='w-full p-4 bg-transparent outline-none border-spacing-0 lg:text-xl '
         />
      </div>
   );
};

export default SearchComponent;
