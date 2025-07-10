import { Breadcrumbs } from '@digdir/designsystemet-react';

function BreadcrumbsSample() {
  return (
    <Breadcrumbs aria-label='Du er her:'>
      <Breadcrumbs.Link href='#' aria-label='Tilbake til Nivå 3'>
        Nivå 3
      </Breadcrumbs.Link>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href='#'>Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
export { BreadcrumbsSample };
