import "./HealthPage.css";

import {
  Card,
  Tag,
  Heading,
  Paragraph,
  Link,
  Button,
} from "@digdir/designsystemet-react";
import {
  CardSection,
  ContactItem,
  ContactSection,
  Footer,
  Header,
  Logo,
} from "../../components";

import {
  EnvelopeClosedIcon,
  PhoneIcon,
  LocationPinIcon,
} from "@navikt/aksel-icons";

export const HealthPage = () => {
  return (
    <div id="health-page">
      <Header imgSrc="img/doctor.svg" data-color="primary">
        <Heading data-size="lg">Helsen din er viktig</Heading>
        <Paragraph data-size="lg" variant="long">
          Future trumpet big or stash about subjective countries of distribution
          illustrated a in solitary been have he that from have the phase king's
          fact, people text finds intended not could
        </Paragraph>
        <div className="btn-group">
          <Button data-size="md">Bestill legetime</Button>
          <Button data-size="md" variant="secondary">
            Vaksine
          </Button>
        </div>
      </Header>

      <CardSection title="Hva kan vi hjelpe deg med i dag?">
        <Card data-color="primary" className="healthCard">
          <img src="icons/nurse.png" alt="" />
          <Heading data-size="sm">Bytt fastlege</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
          </Paragraph>
        </Card>
        <Card data-color="primary" className="healthCard">
          <img src="icons/doctor.png" alt="" />
          <Heading data-size="sm">Pasientjournal</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
          </Paragraph>
        </Card>
        <Card data-color="primary" className="healthCard">
          <img src="icons/doctor.png" alt="" />
          <Heading data-size="sm">Vaksine</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
          </Paragraph>
        </Card>
        <Card data-color="primary" className="healthCard">
          <img src="icons/nurse.png" alt="" />
          <Heading data-size="sm">Bytt fastlege</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at .
          </Paragraph>
        </Card>
        <Card data-color="primary" className="healthCard">
          <img src="icons/doctor.png" alt="" />
          <Heading data-size="sm">Pasientjournal</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
          </Paragraph>
        </Card>
        <Card data-color="primary" className="healthCard">
          <img src="icons/doctor.png" alt="" />
          <Heading data-size="sm">Vaksine</Heading>
          <Paragraph variant="long">
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
          </Paragraph>
        </Card>
      </CardSection>

      <ContactSection>
        <ContactSection.Left>
          <Heading>Ta kontakt med oss!</Heading>
          <Paragraph>
            Future trumpet big or stash about subjective countries of
            distribution illustrated a in solitary been have he that from have
            the phase king's fact, people text finds intended not could
          </Paragraph>
          <ContactItem
            text="virksomhet@eksempel.no"
            icon={<EnvelopeClosedIcon title="a11y-title" />}
          />
          <ContactItem
            text="+47 12345678"
            icon={<PhoneIcon title="a11y-title" />}
          />
          <ContactItem
            text="Økern Portal, Oslo"
            icon={<LocationPinIcon title="a11y-title" />}
          />
          <Paragraph>
            Please reach out to us via the contact form below.
          </Paragraph>
        </ContactSection.Left>
        <ContactSection.Right>form</ContactSection.Right>
      </ContactSection>

      <Footer data-color-scheme="dark">
        <Footer.Column>
          <Logo />
          <Paragraph data-size="sm" variant="long">
            Fresh could written, of by self-interest, working strained her what
            my he travelling treble-range said a with a language be stand food,
            in joke. Wonder blue been way, up legs everyday.
          </Paragraph>
        </Footer.Column>
        <Footer.Column>
          <Heading>Om nettstedet</Heading>
          <Link href="#">Jobb hos oss</Link>
          <Link href="#">Personvernombud</Link>
          <Link href="#">For presse</Link>
        </Footer.Column>
        <Footer.Column>
          <Heading>Nyttige lenker</Heading>
          <Link href="#">Personvernerklæring</Link>
          <Link href="#">Tilgjengelighetserklæring</Link>
          <Link href="#">Nettstedkart</Link>
        </Footer.Column>
      </Footer>
    </div>
  );
};
