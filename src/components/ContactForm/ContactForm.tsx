import classes from "./ContactForm.module.css";
import {
  Button,
  Checkbox,
  Heading,
  Label,
  Textarea,
  Textfield,
} from "@digdir/designsystemet-react";

export const ContactForm = () => {
  return (
    <div className={classes.form} data-color="neutral">
      <Heading>Kontaktskjema</Heading>
      <Textfield
        counter={0}
        placeholder="ola.normann@example.com"
        label="E-post"
      />
      <div className={classes.textarea}>
        <Label htmlFor="my-textarea">Melding</Label>
        <Textarea
          cols={40}
          id="my-textarea"
          placeholder="Skriv din melding her..."
        />
      </div>
      <Checkbox label="Jeg ønsker å bli kontaktet på telefon" value="value" />
      <Button className={classes.btn}>Send inn</Button>
    </div>
  );
};
