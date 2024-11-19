import "./App.css";

import "@digdir/designsystemet-theme/digdir.css";
import "@digdir/designsystemet-css/index.css";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Fieldset,
  Heading,
  Link,
  Paragraph,
  Textfield,
  Tooltip,
} from "@digdir/designsystemet-react";

function App() {
  return (
    <div className="components">
      <div className="card shoppinglist">
        <Fieldset>
          <Fieldset.Legend>Handleliste</Fieldset.Legend>
          <Checkbox label="En kilo poteter" value="potatos" />
          <Checkbox label="To liter Farris" value="farris" />
          <Checkbox label="Blomkål" value="blomkol" defaultChecked />
        </Fieldset>
      </div>
      <div className="card user">
        <Heading data-size="2xs">Opprett ny bruker</Heading>
        <Textfield label="Navn" placeholder="Ola Normann" />
        <Textfield type="email" label="E-post" placeholder="ola@norge.no" />
        <Link href="#">Glemt passord?</Link>
        <Button>Opprett ny bruker</Button>
      </div>
      <div className="card help">
        <Heading>Hva kan vi hjelpe deg med?</Heading>
        <div>
          <Card data-color="accent">
            Most provide as with carried business are much better more the.
          </Card>
          <Card>
            <Heading>Skole og utdanning</Heading>
            <Paragraph>
              Most provide as with carried business are much better more the.
            </Paragraph>
          </Card>
          <Card>
            <Heading>
              <a href="#preview">Mat og helse</a>
            </Heading>
            <Paragraph>
              Lenke til artikkel om mat og helse, der du kan lese mer om alt.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
