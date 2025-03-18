import './HealthPage.css';

import {
  Button,
  Card,
  Heading,
  Link,
  Paragraph,
  Tag,
} from '@digdir/designsystemet-react';
import {
  CardSection,
  ContactItem,
  Footer,
  Header,
  ImageSection,
  Logo,
} from '../../components';

import { CheckmarkIcon } from '@navikt/aksel-icons';
import stylesheet from '../../../design-tokens-build/helse.css?raw';
import DoctorIcon from '../../assets/doctorIcon';

export default function App() {
  return (
    <>
      <div>
        <Header icon={<DoctorIcon />}>
          <Heading level={1} data-size='lg'>
            Helsen din er viktig
          </Heading>
          <Paragraph data-size='lg' variant='long'>
            Future trumpet big or stash about subjective countries of
            distribution illustrated a in solitary been have he that from have
            the phase king's fact, people text finds intended not could
          </Paragraph>
          <div>
            <Button data-size='lg'>Bestill legetime</Button>
          </div>
        </Header>

        <CardSection title='Hva kan vi hjelpe deg med i dag?'>
          <Card className='healthCard'>
            <Heading data-size='sm'>Bytt fastlege</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
          <Card className='healthCard'>
            <Heading data-size='sm'>Pasientjournal</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
          <Card className='healthCard'>
            <Heading data-size='sm'>Vaksiner</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
          <Card className='healthCard'>
            <Heading data-size='sm'>Resepter</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
          <Card className='healthCard'>
            <Heading data-size='sm'>Prøvesvar</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
          <Card className='healthCard'>
            <Heading data-size='sm'>Henvinsinger</Heading>
            <Paragraph variant='long'>
              Most provide as with carried business are much better more the
              perfected designer. Writing slightly explain desk unable at the
              thing to be and also therefore the will
            </Paragraph>
          </Card>
        </CardSection>

        <ImageSection flipped>
          <ImageSection.Left>
            <Tag data-size='md' className='mb-8'>
              Helse
            </Tag>
            <Heading data-size='md' className='mb-8'>
              Vi tar helsen din på alvor
            </Heading>
            <Paragraph variant='long' data-size='md'>
              Build answer said may presentations. The decision-making. Room.
              Didn't impatient point a with was it follow clues making right,
              its be he different in would a me. Chooses for the than another,
              release a it a woke sported did of applications be ago. Workers,
              it named a he judgment, towards.
            </Paragraph>
            <ContactItem
              text='Gratis vaksiner for alle i hele Norge'
              icon={<CheckmarkIcon title='a11y-title' fontSize='2rem' />}
            />
            <ContactItem
              text='Lege tilgjengelig hele døgnet'
              icon={<CheckmarkIcon title='a11y-title' fontSize='2rem' />}
            />
          </ImageSection.Left>
          <ImageSection.Right>
            <img src='img/health.jpg' alt='' className='rounded' />
          </ImageSection.Right>
        </ImageSection>

        <Footer>
          <Footer.Column>
            <Logo />
            <Paragraph data-size='sm' variant='long'>
              Fresh could written, of by self-interest, working strained her
              what my he travelling treble-range said a with a language be stand
              food, in joke. Wonder blue been way, up legs everyday.
            </Paragraph>
          </Footer.Column>
          <Footer.Column>
            <Heading>Om nettstedet</Heading>
            <Link href='#'>Jobb hos oss</Link>
            <Link href='#'>Personvernombud</Link>
            <Link href='#'>For presse</Link>
          </Footer.Column>
          <Footer.Column>
            <Heading>Nyttige lenker</Heading>
            <Link href='#'>Personvernerklæring</Link>
            <Link href='#'>Tilgjengelighetserklæring</Link>
            <Link href='#'>Nettstedkart</Link>
          </Footer.Column>
        </Footer>
      </div>
      <style href='designsystemet-theme'>{stylesheet as string}</style>
    </>
  );
}
