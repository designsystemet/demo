import './ClimatePage.css';

import {
  Button,
  Card,
  Checkbox,
  Heading,
  Label,
  Link,
  Paragraph,
  Tag,
  Textarea,
  Textfield,
} from '@digdir/designsystemet-react';

import {
  CardSection,
  ContactItem,
  ContactSection,
  Footer,
  Header,
  Logo,
} from '../../components';

import {
  EnvelopeClosedIcon,
  LocationPinIcon,
  PhoneIcon,
} from '@navikt/aksel-icons';
import stylesheet from '../../../design-tokens-build/miljo.css?raw';

export const ClimatePage = () => {
  return (
    <>
      <style href='designsystemet-theme'>{stylesheet as string}</style>
      <div id='climate-page'>
        <Header backgroundSrc='img/climate.png'>
          <Heading data-size='lg'>Fornybar energi</Heading>
          <Paragraph data-size='lg' variant='long'>
            Future trumpet big or stash about subjective countries of
            distribution illustrated a in solitary been have he that from have
            the phase king's fact, people text finds intended not could
          </Paragraph>
          <div className='btn-group'>
            <Button data-size='md'>Les klimarapporten</Button>
          </div>
        </Header>

        <CardSection title='Hva kan vi hjelpe deg med i dag?'>
          <Card data-color='neutral' className='myCard'>
            <Card.Block>
              <img src='img/wind-mill.png' alt='katt' />
            </Card.Block>
            <div className='tags'>
              <Tag data-color='primary'>Vindkraft</Tag>
              <Tag data-color='extra2'>Klima</Tag>
            </div>
            <Heading data-size='sm'>Vindkraft</Heading>
            <Paragraph variant='long'>
              Present making at long would alone, wanted be him little checkin
              your what and rare material a on big and an the that stupid. Of
              man it shall be.
            </Paragraph>
          </Card>
          <Card data-color='neutral' className='myCard'>
            <Card.Block>
              <img src='img/worker.png' alt='katt' />
            </Card.Block>
            <div className='tags'>
              <Tag data-color='primary'>Vindkraft</Tag>
              <Tag data-color='extra2'>Klima</Tag>
            </div>
            <Heading data-size='sm'>Solceller</Heading>
            <Paragraph variant='long'>
              Present making at long would alone, wanted be him little checkin
              your what and rare material a on big and an the that stupid. Of
              man it shall be.
            </Paragraph>
          </Card>
          <Card data-color='neutral' className='myCard'>
            <Card.Block>
              <img src='img/landscape.jpg' alt='katt' />
            </Card.Block>
            <div className='tags'>
              <Tag data-color='extra1'>Vindkraft</Tag>
              <Tag data-color='accent'>Klima</Tag>
            </div>
            <Heading data-size='sm'>Vannkraft</Heading>
            <Paragraph variant='long'>
              Present making at long would alone, wanted be him little checkin
              your what and rare material a on big and an the that stupid. Of
              man it shall be.
            </Paragraph>
          </Card>
        </CardSection>

        <ContactSection data-color='primary'>
          <ContactSection.Left>
            <Heading data-size='md' style={{ marginBottom: '16px' }}>
              Ta kontakt med oss!
            </Heading>
            <Paragraph variant='long' data-size='md'>
              Future trumpet big or stash about subjective countries of
              distribution illustrated a in solitary been have he that from have
              the phase king's fact, people text finds intended not could
            </Paragraph>
            <ContactItem
              text='virksomhet@eksempel.no'
              icon={<EnvelopeClosedIcon title='a11y-title' />}
            />
            <ContactItem
              text='+47 12345678'
              icon={<PhoneIcon title='a11y-title' />}
            />
            <ContactItem
              text='Økern Portal, Oslo'
              icon={<LocationPinIcon title='a11y-title' />}
            />
            <Paragraph data-size='md'>
              Please reach out to us via the contact form below.
            </Paragraph>
          </ContactSection.Left>
          <ContactSection.Right>
            <div className='form'>
              <Heading>Kontaktskjema</Heading>
              <Textfield
                counter={0}
                placeholder='ola.normann@example.com'
                label='E-post'
              />
              <div className='form__textarea'>
                <Label htmlFor='my-textarea'>Melding</Label>
                <Textarea
                  cols={40}
                  id='my-textarea'
                  placeholder='Skriv din melding her...'
                />
              </div>
              <Checkbox
                label='Jeg ønsker å bli kontaktet på telefon'
                value='value'
              />
              <Button className='form__btn'>Send inn</Button>
            </div>
          </ContactSection.Right>
        </ContactSection>

        <Footer data-color-scheme='light'>
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
    </>
  );
};
