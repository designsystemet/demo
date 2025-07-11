import './DigdirPage.module.css';

import {
  Card,
  Heading,
  Link,
  Paragraph,
  Tag,
} from '@digdir/designsystemet-react';
import {
  ArrowForwardIcon,
  BookIcon,
  BriefcaseIcon,
  PadlockLockedIcon,
  TasklistIcon,
  ThumbUpIcon,
} from '@navikt/aksel-icons';
import { CardSection, Footer, SearchHeader } from '../../components';
import { ImageSection } from '../../components/ImageSection/ImageSection';
import { Logo } from '../../components/Logo/Logo';

export const DigdirPage = () => {
  return (
    <div id='digdir-page'>
      <SearchHeader title='Søk etter dokumenter' />

      <CardSection
        title='Hva kan vi hjelpe deg med i dag?'
        centered
        data-color='extra2'
      >
        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <PadlockLockedIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Informasjonssikkerhet</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>

        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <BriefcaseIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Jobb innovativt</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>
        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <ArrowForwardIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Del og bruk data</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>
        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <BookIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Bruk fellesløsninger</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>
        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <TasklistIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Råd og standarder</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>
        <Card className='card' variant='tinted'>
          <div className='card__icon'>
            <ThumbUpIcon fontSize='2.2rem' />
          </div>
          <Heading data-size='sm'>Krav og anbefalinger</Heading>
          <Paragraph variant='long'>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card>
      </CardSection>

      <ImageSection data-color='extra1'>
        <ImageSection.Left>
          <Tag data-size='md'>Sikkerhet</Tag>
          <Heading data-size='md' className='mb-8'>
            Prioriter Informasjonssikkerhet
          </Heading>
          <Paragraph variant='long' data-size='md'>
            Build answer said may presentations. The decision-making. Room.
            Didn't impatient point a with was it follow clues making right, its
            be he different in would a me. Chooses for the than another, release
            a it a woke sported did of applications be ago. Workers, it named a
            he judgment, towards.
          </Paragraph>
        </ImageSection.Left>
        <ImageSection.Right>
          <img src='img/digdir-illustration-1.svg' alt='' />
        </ImageSection.Right>
      </ImageSection>

      <ImageSection flipped>
        <ImageSection.Left>
          <Tag className='tag' data-size='md'>
            Digitalisering
          </Tag>
          <Heading data-size='md' style={{ marginBottom: '16px' }}>
            Vegkart for den nye digitaliseringsstrategien
          </Heading>
          <Paragraph variant='long' data-size='md'>
            Little. The to their congress, seven the seeing labour, in parts so
            four place meet now stupid and he title ensure same by been line the
            watched enjoying every title or joke. That the morning, above need
            bit slogging of the in salesman the the answering more truth,
            concept chief.
          </Paragraph>
        </ImageSection.Left>
        <ImageSection.Right>
          <img src='img/digdir-illustration-2.svg' alt='' />
        </ImageSection.Right>
      </ImageSection>

      <Footer data-color-scheme='dark'>
        <Footer.Column>
          <Logo />
          <Paragraph data-size='sm' variant='long'>
            Fresh could written, of by self-interest, working strained her what
            my he travelling treble-range said a with a language be stand food,
            in joke. Wonder blue been way, up legs everyday.
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
  );
};
