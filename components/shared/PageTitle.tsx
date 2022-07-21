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
         <h2 className='text-2xl lg:text-3xl mb-2'>
            {searchInput
               ? searchLength === 0
                  ? `Found 0 results for '${searchInput}'`
                  : `Found results for '${searchInput}'`
               : title}
         </h2>
      </div>
   );
};

export default PageTitle;
