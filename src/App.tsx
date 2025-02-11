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
  Radio,
  List,
  Dropdown,
} from '@digdir/designsystemet-react';

function App() {
  return (
    <div className='container' data-color='rosa'>
      <nav className='header'>
        <Heading>Designsystemet Demo</Heading>
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
      <div className='components'>
        <div className='card shoppinglist'>
          <Fieldset>
            <Fieldset.Legend>Handleliste</Fieldset.Legend>
            <Checkbox label='Mat' value='mat' />
            <Checkbox label='Leker' value='leker' />
            <Checkbox label='Godbiter' value='godbiter' defaultChecked />
            <Checkbox label='Kattesand' value='kattesand' defaultChecked />
          </Fieldset>
          <Divider />
          <Fieldset name='levering'>
            <Fieldset.Legend>Ønsker du levering?</Fieldset.Legend>
            <Radio label='Ja' value='epost' name='levering' />
            <Radio label='Nei' value='telefon' name='levering' defaultChecked />
          </Fieldset>
        </div>
        <div className='card user'>
          <Heading data-size='2xs'>Opprett ny bruker</Heading>
          <Textfield label='Navn' placeholder='Ola Normann' />
          <Textfield type='email' label='E-post' placeholder='ola@norge.no' />
          <Link href='#'>Glemt passord?</Link>
          <Button>Opprett ny bruker</Button>
        </div>
        <div className='animals'>
          <Card className='animal-card'>
            <Heading>Tamkatt 🐈</Heading>
            <Paragraph>
              Tamkatt er et lite{' '}
              <Link
                href='https://no.wikipedia.org/wiki/Rovpattedyr'
                target='_blank'
              >
                rovpattedyr
              </Link>
              i{' '}
              <Link
                href='https://no.wikipedia.org/wiki/Kattefamilien'
                target='_blank'
              >
                kattefamilien{' '}
              </Link>
              og inngår i tamkattlinjen . Tamkatten deles videre inn som enten
              huskatter (naturlig seleksjon) eller rasekatter (selektiv
              utvelgelse).
            </Paragraph>
          </Card>
          <Card className='animal-card'>
            <Heading>Frosk 🐸</Heading>
            <Paragraph>
              Frosker tilhører ordenen {''}
              <Link
                href='https://no.wikipedia.org/wiki/Springpadder'
                target='_blank'
              >
                haleløse amfibier
              </Link>
              . På norsk er begrepet frosk ikke en systematisk enhet, men en
              fellesbetegnelse på haleløse padder som er relativt slanke og
              langlemmete og har fuktig hud, i motsetning til uttrykket padde,
              som brukes om mer tungbygde haleløse padder med tørrere hud som
              krabber mer enn de hopper.
            </Paragraph>
          </Card>
          <Card className='animal-card'>
            <Heading>Hund 🐶</Heading>
            <Paragraph>
              Hund eller tamhund (Canis familiaris eller Canis lupus familiaris)
              er eit mellomstort domestisert rovpattedyr i hundefamilien, som
              har følgt mennesket og bidrege til menneskeleg suksess gjennom
              fleire tusen år. Både hund og katt er rekna som viktige kjæledyr,
              sjølv om begge er rovdyr.
            </Paragraph>
          </Card>
        </div>
      </div>
      <footer data-color-scheme='dark'>
        <Heading data-size='2xs'>Mer informasjon</Heading>
        <List.Unordered>
          <List.Item>
            <Link href='/'>Personvernserklæring</Link>
          </List.Item>
          <List.Item>
            <Link href='/'>Tilgjengeligheterklæring</Link>
          </List.Item>
        </List.Unordered>
      </footer>
    </div>
  );
}

export default App;
