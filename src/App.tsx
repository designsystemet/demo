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
	Radio,
	Tag,
} from "@digdir/designsystemet-react";
import "./MyField";
import MyField from "./MyField";

function App() {
	return (
		<>
			{/* <MyField /> */}
			<div className="components">
				<div className="card">
					<Tag data-color="dominant">Tag</Tag>
				</div>
				<div className="card shoppinglist">
					<Fieldset>
						<Fieldset.Legend>Handleliste</Fieldset.Legend>
						<Checkbox label="Mat" value="mat" />
						<Checkbox label="Leker" value="leker" />
						<Checkbox label="Godbiter" value="godbiter" defaultChecked />
						<Checkbox label="Kattesand" value="kattesand" defaultChecked />
					</Fieldset>
					<Divider />
					<Fieldset name="levering">
						<Fieldset.Legend>Ønsker du levering?</Fieldset.Legend>
						<Radio label="Ja" value="epost" name="levering" />
						<Radio label="Nei" value="telefon" name="levering" defaultChecked />
					</Fieldset>
				</div>
				<div className="card user">
					<Heading data-size="2xs">Opprett ny bruker</Heading>
					<Textfield label="Navn" placeholder="Ola Normann" />
					<Textfield type="email" label="E-post" placeholder="ola@norge.no" />
					<Link href="#">Glemt passord?</Link>
					<Button>Opprett ny bruker</Button>
				</div>
				<div className="card help">
					<Heading data-size="2xs">Dyr</Heading>
					<Card>
						<Heading>Tamkatt 🐈</Heading>
						<Paragraph>
							Tamkatt er et lite{" "}
							<Link
								href="https://no.wikipedia.org/wiki/Rovpattedyr"
								target="_blank"
							>
								rovpattedyr
							</Link>
							i{" "}
							<Link
								href="https://no.wikipedia.org/wiki/Kattefamilien"
								target="_blank"
							>
								kattefamilien{" "}
							</Link>
							og inngår i tamkattlinjen . Tamkatten deles videre inn som enten
							huskatter (naturlig seleksjon) eller rasekatter (selektiv
							utvelgelse).
						</Paragraph>
					</Card>
					<Card>
						<Heading>Frosk 🐸</Heading>
						<Paragraph>
							Frosker tilhører ordenen {""}
							<Link
								href="https://no.wikipedia.org/wiki/Springpadder"
								target="_blank"
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
					<Card>
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
		</>
	);
}

export default App;
