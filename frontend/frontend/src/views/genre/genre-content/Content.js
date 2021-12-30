import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Card, CardContent, Typography, makeStyles, Divider } from '@material-ui/core';
import Loading from '../../../components/Loading';

const useStyles = makeStyles(() => ({
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '15rem',
    height: '14rem',
    margin: 6,
    position: 'relative',
    backgroundColor: 'whitesmoke',
  },
  resImg: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    objectFit: 'contain'
  },
  rate: {
    fontSize: '1.5rem',
    color: 'yellow',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 2.25)'
  },
  font: {
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 2.25)'
  },
  buttonCenter: {
    justifyContent: 'center',
    borderTop: '1px solid rgb(194, 194, 194)'
  },
  box:{
    display: 'block',
    width: '100%',
    color: '#00bcd4'
  },
  title:{
    display: 'inline-block',
    padding: '0px 1rem'
  },
  line:{
    display: 'inline-block',
    width: '5rem',
  },
  space: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16
  },
  start: {
    borderBottom: '1px solid rgb(194, 194, 194)'
  },
  end: {
    borderTop: '1px solid rgb(194, 194, 194)'
  }
}));

const Content = () => {

  const apiUrl = 'http://localhost:1337';
  const classes = useStyles();
  const { id } = useParams()
  const urlId = id;

  const [ genres, setGenres ] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true)

    try {
      const response = await fetch(`${apiUrl}/api/genres/${urlId}?populate=*`);
      const json = await response.json();
      const code = response.status;
      if ( code >= 200 && code < 300 ) {
        setGenres(json.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  
  useEffect(() => {
    getData();
  }, [])

  if(loading) return <Loading />

  return <>
    <Box className={classes.box}>
      <hr className={classes.line}/>
      <Typography gutterBottom variant="h5" component="div" className={classes.title}>
        {genres.attributes.typeOfBookOrMovie}
      </Typography>
      <hr className={classes.line}/>
    </Box>
    {genres.attributes.books.data.map(({attributes}) => {
    
      const { 
      Title, 
      Author, 
      numberOfPages, 
      rate,
      type
      } = attributes;

      return (
        <Card className={classes.style}>
          <Box className={classes.space}>
            <Box className={classes.start}>
              <Typography gutterBottom variant="h6" component="div">
                {Title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Author: {Author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Type: {type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number of pages: {numberOfPages}
              </Typography>
            </Box>
            <Box className={classes.end}>
              <Typography className={classes.rate}>
                <i class="fas fa-star"></i> <span className={classes.font}>{rate}</span>
              </Typography>
            </Box>
          </Box>
        </Card>
      )
    })}
    <Divider />
    {genres.attributes.movies.data.map(({attributes}) => {
    
      const { 
        title, 
        length, 
        releaseDate, 
        rate,
        type
      } = attributes;

      return (
        <Card className={classes.style}>
          <CardContent className={classes.space}>
            <Box className={classes.start}>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                  Release Date: {releaseDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Type: {type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Length: {length}
              </Typography>
            </Box>
            <Box className={classes.end}>
              <Typography className={classes.rate}>
                  <i class="fas fa-star"></i> <span className={classes.font}>{rate}</span>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )
    })}
  </>
}

export default Content;