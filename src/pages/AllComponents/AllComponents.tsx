
import {
    Alert,
    Avatar,
    Badge,
    Breadcrumbs,
    Button,
    Card,
    Heading,
    Paragraph
} from '@digdir/designsystemet-react';
import classes from './AllComponents.module.css';

export const AllComponents = () => {
    return (
        <div className={classes.container}>
            <div id="alert" className={classes.container}>
                <Alert >
                    <Heading
                        level={2}
                        data-size='xs'
                        style={{
                            marginBottom: 'var(--ds-size-2)',
                        }}
                    >
                        Har du husket å bestille passtime?
                    </Heading>
                    <Paragraph>
                        Det er lange køer for å bestille pass om dagen, det kan være lurt å
                        bestille i god tid før du skal reise.
                    </Paragraph>
                </Alert>
            </div>
            <div id="avatar" className={classes.container}>
                <Avatar data-size='xs' aria-label='extra small' initials='xs' />
                <Avatar data-size='xs' aria-label='extra small' />
                <Avatar data-size='sm' aria-label='small' initials='sm' />
                <Avatar data-size='sm' aria-label='small' />
                <Avatar data-size='md' aria-label='medium' initials='md' />
                <Avatar data-size='md' aria-label='medium' />
                <Avatar data-size='lg' aria-label='large' initials='lg' />
                <Avatar data-size='lg' aria-label='large' />
            </div>
            <div id="badge" className={classes.container}>
                <Badge.Position
                    placement='top-right'
                >
                    <Badge data-color='danger'></Badge>
                    <Button variant='secondary' data-size='sm'>Badge</Button>
                </Badge.Position>
            </div>
            <div id="breadcrumbs" className={classes.container}>
                <Breadcrumbs aria-label='Du er her:' >
                    <Breadcrumbs.Link href='#' aria-label='Tilbake til Nivå 3'>
                        Nivå 3
                    </Breadcrumbs.Link>
                    <Breadcrumbs.List>
                        <Breadcrumbs.Item>
                            <Breadcrumbs.Link href='#'>Nivå 1</Breadcrumbs.Link>
                        </Breadcrumbs.Item>
                        <Breadcrumbs.Item>
                            <Breadcrumbs.Link href='#'>Nivå 2</Breadcrumbs.Link>
                        </Breadcrumbs.Item>
                        <Breadcrumbs.Item>
                            <Breadcrumbs.Link href='#'>Nivå 3</Breadcrumbs.Link>
                        </Breadcrumbs.Item>
                        <Breadcrumbs.Item>
                            <Breadcrumbs.Link href='#'>Nivå 4</Breadcrumbs.Link>
                        </Breadcrumbs.Item>
                    </Breadcrumbs.List>
                </Breadcrumbs>
            </div>
            <div id="button" className={classes.container}>
                <Button variant='primary'>Primary Button</Button>
                <Button variant='secondary'>Secondary Button</Button>
                <Button variant='tertiary'>Tertiary Button</Button>
                <Button data-color='danger'>Danger Button</Button>
            </div>
            <div id="card" className={classes.container}>
                <Card style={{ maxWidth: '320px' }}>
                    <Heading>Card</Heading>
                    <Paragraph>
                        Most provide as with carried business are much better more the perfected
                        designer. Writing slightly explain desk unable at supposedly about this
                    </Paragraph>
                    <Paragraph data-size='sm'>Footer text</Paragraph>
                </Card>
            </div>
        </div>
    );
}
