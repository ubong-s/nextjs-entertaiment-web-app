interface TitleProps {
   title: string;
   searchInput: string;
}

const PageTitle: React.FC<TitleProps> = ({ title, searchInput }) => {
   return (
      <div className='container'>
         <h1 className='text-2xl lg:text-3xl '>
            {searchInput ? `Found results for '${searchInput}'` : title}
         </h1>
      </div>
   );
};

export default PageTitle;
