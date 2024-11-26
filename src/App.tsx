// import "@digdir/designsystemet-theme/digdir.css";

import {
  Button,
  Card,
  Checkbox,
  Fieldset,
  Heading,
  Link,
  Paragraph,
  Textfield,
  Divider,
  Alert,
} from "@digdir/designsystemet-react";

function App() {
  return (
    <div className="components">
      <div className="card shoppinglist">
        <Fieldset>
          <Fieldset.Legend>Handleliste</Fieldset.Legend>
          <Checkbox label="En kilo poteter" value="epost" />
          <Checkbox label="To liter Farris" value="telefon" />
          <Checkbox label="Blomkål" value="sms" defaultChecked />
          <Checkbox label="Pizza" value="sms" defaultChecked />
          <Checkbox label="Tre liter lettmelk" value="sms" defaultChecked />
          <Divider />
          <Checkbox label="2kg smågodt" value="sms" />
          <Checkbox label="10 poser med Smash" value="sms" />
        </Fieldset>
      </div>
      <div className="card user">
        <Heading data-size="2xs">Opprett ny bruker</Heading>
        <Textfield label="Navn" placeholder="Ola Normann" />
        <Textfield type="email" label="E-post" placeholder="ola@norge.no" />
        <Link href="#">Glemt passord?</Link>
        <Button>Opprett ny bruker</Button>
      </div>
      <div className="card help" data-size="lg">
        <Heading data-size="2xs">Emner</Heading>
        <Card data-color="accent">Dette er et brand kort</Card>
        <Card>
          <Heading>
            <a href="#preview">Gå videre</a>
          </Heading>
          <Paragraph>
            Dette er et kort med lenke til en annen del av siden.
          </Paragraph>
        </Card>
      </div>
      <div className="card alerts">
        <Heading data-size="2xs">Advarsler</Heading>
        <Alert data-color="success">success</Alert>
        <Alert data-color="info">info</Alert>
        <Alert data-color="danger">danger</Alert>
        <Alert data-color="warning">warning</Alert>
      </div>
    </div>
  );
}

export default App;
