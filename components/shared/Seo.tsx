import Head from 'next/head';

interface SeoProps {
   title: string;
   description?: string;
}

const Seo: React.FC<SeoProps> = ({
   title,
   description = 'Entertainment Web App',
}) => {
   return (
      <Head>
         <title>{`${title} | Entertainment`}</title>
         <meta name='description' content={description} />
         <link rel='icon' href='/favicon-32x32.png' />
      </Head>
   );
};

export default Seo;
