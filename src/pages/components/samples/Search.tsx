import { Paragraph, Search } from '@digdir/designsystemet-react';
import { useState } from 'react';

function SearchSample() {
  const [value, setValue] = useState<string>();
  const [submittedValue, setSubmittedValue] = useState<string>();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedValue(value);
        }}
      >
        <Search>
          <Search.Input
            aria-label='Søk'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Search.Clear />
          <Search.Button />
        </Search>
      </form>

      <Paragraph data-size='md' style={{ marginTop: 'var(--ds-size-2)' }}>
        Submitted value: {submittedValue}
      </Paragraph>
    </>
  );
}
export { SearchSample };
