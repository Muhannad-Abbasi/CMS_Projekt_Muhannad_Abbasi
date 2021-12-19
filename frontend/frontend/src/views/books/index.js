import { Container, makeStyles } from '@material-ui/core';
import Page from '../../components/Page';
import Content from './books-content/Content'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const BooksView = () => {

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title={'Books'}
    >
      <Container maxWidth={false}>
        <Content />
      </Container>
    </Page>
  )
}

export default BooksView;