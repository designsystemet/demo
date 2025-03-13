import {
  Alert,
  Button,
  Card,
  Fieldset,
  Heading,
  Link,
  Paragraph,
  Textarea,
  Field,
  Textfield,
  Divider,
  Label,
  Select,
  Radio,
  List,
  Dropdown,
} from '@digdir/designsystemet-react';

function App() {
  return (
    <div className='container' data-color='primary' data-color-scheme='light'>
      <header className='header'>
        <nav className='nav'>
          <Heading>Avsender</Heading>
          <Dropdown.TriggerContext>
            <Dropdown.Trigger>Meny</Dropdown.Trigger>
            <Dropdown>
              <Dropdown.Heading>First heading</Dropdown.Heading>
              <Dropdown.List>
                <Dropdown.Item>
                  <Dropdown.Button>Button 1.1</Dropdown.Button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown.Button>Button 1.2</Dropdown.Button>
                </Dropdown.Item>
              </Dropdown.List>
              <Dropdown.Heading>Second heading</Dropdown.Heading>
              <Dropdown.List>
                <Dropdown.Item>
                  <Dropdown.Button>Button 2.1</Dropdown.Button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown.Button>Button 2.2</Dropdown.Button>
                </Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </Dropdown.TriggerContext>
        </nav>

        <div className='intro'>
        <Heading data-size='lg'>Digitalisering av Norge </Heading>
        <Paragraph>
        Offentlige tjenester skal henge sammen og være lette å bruke, uavhengig av hvem som tilbyr dem.
        </Paragraph>
        <div className='button-group'>
          <Button
              variant="primary"
              data-color='neutral'
            >
              Arrangementer
            </Button>
            <Button
              variant="secondary"
              data-color='neutral'
            >
              Rapporter
            </Button>
          </div>
        </div>
        
      </header>
      <div className='components'>
        
        <div className='center'>
          <Heading data-size='lg' >Hva kan vi hjelpe deg med i dag? </Heading>
        </div>
        <div className='highlighted-cards' data-size='sm'>
          <Card className='animal-card'>
            <Heading>Informasjonssikkerhet</Heading>
            <Paragraph>
            Når vi jobber systematisk med styring og kontroll av informasjonssikkerheten, skaper vi trygge tjenester.
            </Paragraph>
          </Card>
          <Card className='animal-card'>
            <Heading>Bruk fellesløsninger
            </Heading>
            <Paragraph>
              Når vi bruker digitale fellesløsninger som allerede finnes, sparer vi tid og penger og får sikre tjenester.
            </Paragraph>
          </Card>
          <Card className='animal-card'>
            <Heading>Følg krav og anbefalinger
            </Heading>
            <Paragraph>
            Når vi følger kravene og anbefalingene for digitalisering, lager vi bedre tjenester mer effektivt.
            </Paragraph>
          </Card>
        </div>

        <div className='card contact'>
          <Heading data-size='md'>Kontakt oss</Heading>
          <Textfield type='email' label='Din e-post' placeholder='ola@norge.no' />
          <Divider />
          <Field>
          <Label>
          Hva gjelder det?
          </Label>
          <Select
            defaultValue=""
            width="full"
          >
            <Select.Option
              disabled
              value=""
            >
              Refusjon og støtteordninger
            </Select.Option>
            <Select.Option value="everest">
              Refusjon og støtteordninger
            </Select.Option>
            <Select.Option value="aconcagua">
              Aconcagua
            </Select.Option>
          </Select>
          
        </Field>
          <Label htmlFor="my-textarea">
          Hva lurer du på?
          </Label>
          <Textarea 
            cols={40}
            id="my-textarea"
            onChange={function Xs(){}}
            value=""
          />
          <Alert data-color="info">
          Ikke skriv sensitive personopplysninger her. 
        </Alert>
          <Divider />
          <Fieldset name='levering'>
            <Fieldset.Legend>Hvordan ønsker du at vi kontakter deg?</Fieldset.Legend>
            <Radio label='På e-post' value='epost' name='levering' />
            <Radio label='På telefon' value='telefon' name='levering' defaultChecked />
          </Fieldset>

          <Button>Send</Button>
        </div>          

      </div>
      <footer data-color-scheme='dark'>
        <Heading data-size='2xs'>Om nettstedet</Heading>
        <List.Unordered>
          <List.Item>
            <Link href='/'>Personvernserklæring</Link>
          </List.Item>
          <List.Item>
            <Link href='/'>Tilgjengeligheterklæring</Link>
          </List.Item>
          <List.Item>
            <Link href='/'>Informasjonskapsler</Link>
          </List.Item>
          <List.Item>
            <Link href='/'>Nyhetsarkiv</Link>
          </List.Item>
          <List.Item>
            <Link href='/'>Nettstedkart</Link>
          </List.Item>
        </List.Unordered>
      </footer>
    </div>
  );
}

export default App;
