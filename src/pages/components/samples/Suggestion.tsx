import {
  Button,
  Divider,
  EXPERIMENTAL_Suggestion,
  Field,
  Label,
  Paragraph,
} from "@digdir/designsystemet-react";
import { useState } from "react";

const DATA_PLACES = [
  "Sogndal",
  "Oslo",
  "Brønnøysund",
  "Stavanger",
  "Trondheim",
  "Bergen",
  "Lillestrøm",
];

function SuggestionSample() {
  const [value, setValue] = useState<string[]>(["Oslo"]);
  return (
    <div className="column">
      <Field>
        <Label>Velg en destinasjon</Label>
        <EXPERIMENTAL_Suggestion>
          <EXPERIMENTAL_Suggestion.Input />
          <EXPERIMENTAL_Suggestion.Clear />
          <EXPERIMENTAL_Suggestion.List>
            <EXPERIMENTAL_Suggestion.Empty>Tomt</EXPERIMENTAL_Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <EXPERIMENTAL_Suggestion.Option
                key={place}
                label={place}
                value={place}
              >
                {place}
                <div>Kommune</div>
              </EXPERIMENTAL_Suggestion.Option>
            ))}
          </EXPERIMENTAL_Suggestion.List>
        </EXPERIMENTAL_Suggestion>
      </Field>
      <Field>
        <Label>Velg destinasjoner</Label>
        <EXPERIMENTAL_Suggestion
          multiple
          selected={value}
          onSelectedChange={(items) =>
            setValue(items.map((item) => item.value))
          }
        >
          <EXPERIMENTAL_Suggestion.Input />
          <EXPERIMENTAL_Suggestion.Clear />
          <EXPERIMENTAL_Suggestion.List>
            <EXPERIMENTAL_Suggestion.Empty>Tomt</EXPERIMENTAL_Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <EXPERIMENTAL_Suggestion.Option
                key={place}
                label={place}
                value={place}
              >
                {place}
                <div>Kommune</div>
              </EXPERIMENTAL_Suggestion.Option>
            ))}
          </EXPERIMENTAL_Suggestion.List>
        </EXPERIMENTAL_Suggestion>
      </Field>
      <Divider style={{ marginTop: "var(--ds-size-4)" }} />

      <Paragraph style={{ margin: "var(--ds-size-2) 0" }}>
        Valgte reisemål: {value.join(", ")}
      </Paragraph>

      <Button
        onClick={() => {
          setValue(["Sogndal", "Stavanger"]);
        }}
      >
        Sett reisemål til Sogndal, Stavanger
      </Button>
    </div>
  );
}
export { SuggestionSample };
