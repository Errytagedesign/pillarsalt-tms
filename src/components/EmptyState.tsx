import noSales from '@/assets/noSalesYet 1.png';

const EmptyState = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <section className='flex flex-col gap-5  items-center justify-center mt-9 '>
      <figure className='w-full '>
        <img src={noSales} alt='' />
      </figure>{' '}
      <div className='w-full text-center'>
        <h3>{title}</h3>
        <p className='text-[var(--Grey2)]'>{subTitle}</p>
      </div>
    </section>
  );
};

export default EmptyState;
