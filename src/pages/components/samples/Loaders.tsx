import { Paragraph, Skeleton, Spinner } from '@digdir/designsystemet-react';

function LoadersSample() {
  return (
    <>
      <Spinner aria-label='Henter kaffi' data-size='xl' />
      <Skeleton variant='circle' width='50px' height='50px' />
      <Skeleton variant='rectangle' width='100px' height='50px' />
      <Paragraph>
        <Skeleton variant='text' width='10' />
      </Paragraph>
    </>
  );
}
export { LoadersSample };
