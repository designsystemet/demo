import {
  Card,
  Tag,
  Heading,
  Paragraph,
  Link,
} from "@digdir/designsystemet-react";
import {
  CardSection,
  ContactItem,
  ContactSection,
  Footer,
  Header,
} from "../../components";

import {
  EnvelopeClosedIcon,
  PhoneIcon,
  LocationPinIcon,
} from "@navikt/aksel-icons";

export const HealthPage = () => {
  return (
    <div>
      <Header
        title="Miljø"
        description="Future trumpet big or stash about subjective countries of distribution illustrated a in solitary been have he that from have the phase king's fact, people text finds intended not could "
        imgSrc="img/doctor.svg"
      />

      <CardSection title="Hva kan vi hjelpe deg med i dag?">
        <Card data-color="neutral">
          <div className="tags">
            <Tag>My tag</Tag>
            <Tag>My tag</Tag>
          </div>
          <Heading>Card</Heading>
          <Paragraph>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
          </Paragraph>
        </Card>
        <Card data-color="neutral">
          <div className="tags">
            <Tag>My tag</Tag>
            <Tag>My tag</Tag>
          </div>
          <Heading>Card</Heading>
          <Paragraph>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
          </Paragraph>
        </Card>
        <Card data-color="neutral">
          <div className="tags">
            <Tag>My tag</Tag>
            <Tag>My tag</Tag>
          </div>
          <Heading>Card</Heading>
          <Paragraph>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
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
          <Heading>Om nettstedet</Heading>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
        </Footer.Column>
        <Footer.Column>
          <Heading>Om nettstedet</Heading>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
        </Footer.Column>
        <Footer.Column>
          <Heading>Om nettstedet</Heading>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
          <Link href="#">Nyhetsbrev</Link>
        </Footer.Column>
      </Footer>
    </div>
  );
};
