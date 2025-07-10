import { List } from '@digdir/designsystemet-react';

function ListSample() {
  return (
    <>
      <List.Unordered>
        <List.Item>List Item 1</List.Item>
        <List.Item>List Item 2</List.Item>
        <List.Item>List Item 3</List.Item>
      </List.Unordered>
      <List.Ordered>
        <List.Item>
          Tørk over kyllingfiletene før du krydrer og steker. Dette vil gi en
          finere stekeskorpe på kjøttet. Ikke bruk kjøkkenpapir som loer.
          Papirbiter i maten er ikke noe særlig.
        </List.Item>
        <List.Item>
          Ha salt og pepper på filetene og eventuelt annet krydder for ekstra
          smak. Hvitløkpepper, paprika eller provence kan gi en god smak!
        </List.Item>
        <List.Item>
          Stek filetene på sterk varme i to minutter på hver side. Sett deretter
          på lokk og stek videre på svak varme i syv minutter på hver side.
        </List.Item>
      </List.Ordered>
    </>
  );
}
export { ListSample };
