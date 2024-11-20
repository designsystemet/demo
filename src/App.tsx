// import "@digdir/designsystemet-theme/digdir.css";
import "../build/theme.css";
import "@digdir/designsystemet-css/index.css";
import {
  Button,
  Card,
  Checkbox,
  Fieldset,
  Heading,
  Link,
  Paragraph,
  Textfield,
} from "@digdir/designsystemet-react";

function App() {
  return (
    <div className="components">
      <div className="card shoppinglist" data-color="accent">
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
        <div>
          <Card data-color="brand1">Dette er et brand kort</Card>
          <Card>
            <Heading>
              <a href="#preview">Gå videre</a>
            </Heading>
            <Paragraph>
              Dette er et kort med lenke til en annen del av siden.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
