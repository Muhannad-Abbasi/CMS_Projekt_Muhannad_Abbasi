import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, makeStyles } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Loading from '../../../components/Loading';

const useStyles = makeStyles(() => ({
  style: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '15rem',
    margin: 6,
    position: 'relative',
    backgroundColor: 'whitesmoke'
  },
  resImg: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    objectFit: 'contain'
  },
  rate: {
    position: 'absolute',
    top: 15,
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
  links: {
    textDecoration: 'none'
  }
}));

const Content = () => {
  
  const apiUrl = 'http://localhost:1337';

  const classes = useStyles();

  const [ books, setBooks ] = useState([]);
  const [loading, setLoading] = useState(true);


  const getData = async () => {
    setLoading(true)

    try {
      const response = await fetch("http://localhost:1337/api/books?populate=*");
      const json = await response.json();
      const code = response.status;
      if ( code >= 200 && code < 300 ) {
        // console.log(json.data);
        setBooks(json.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getData();
  }, [])

  if(loading) return <Loading />

  return <>
    { books.map(({attributes}) => {
    
      const { 
        Title, 
        Author, 
        numberOfPages, 
        rate,
        type
      } = attributes;

      return <Card className={classes.style}>
        <CardActionArea>
          { attributes.cover.data.map( ({attributes}) => {
              const { url, alternativeText } = attributes;
              return <CardMedia
              component="img"
              className={classes.resImg}
              image={`${apiUrl}${url}`}
              alt={alternativeText}
            />
          })}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {Author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Type: {type}
            </Typography>
            <Typography className={classes.rate}>
              <i class="fas fa-star"></i> <span className={classes.font}>{rate}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Number of pages: {numberOfPages}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.buttonCenter} >
          {attributes.genres.data.map( (genre) => {
            return (
              <RouterLink key={genre.id} to={`/genre/${genre.id}`} className={classes.links}>
                <Button size="small" color="primary">{ genre.attributes.typeOfBookOrMovie }</Button>
              </RouterLink>
            )
          })}
        </CardActions>
      </Card>
    })}
  </>
}

export default Content;