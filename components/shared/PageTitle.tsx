interface TitleProps {
   title: string;
   searchInput?: string;
   searchLength?: number;
}

const PageTitle: React.FC<TitleProps> = ({
   title,
   searchInput,
   searchLength,
}) => {
   return (
      <div className='container  '>
         <h1 className='text-2xl lg:text-3xl mb-2'>
            {searchLength === 0
               ? `Found 0 results for '${searchInput}'`
               : searchInput
               ? `Found results for '${searchInput}'`
               : title}
         </h1>
      </div>
   );
};

export default PageTitle;
