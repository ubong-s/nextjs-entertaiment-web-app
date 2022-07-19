const Error = ({ error = '' }) => {
   return (
      <div className='h-full flex items-center justify-center text-2xl'>
         {error}
      </div>
   );
};

export default Error;
