import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@material-ui/core';

const Content = () => {

  const apiUrl = 'http://localhost:1337';

  const [ books, setBooks ] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/movies?populate=*");
      const json = await response.json();
      const code = response.status;
      if ( code >= 200 && code < 300 ) {
        // console.log(json.data);
        setBooks(json.data);
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return <>
    { books.map(({attributes}) => {
    
    const { 
      title, 
      length, 
      releaseDate, 
      rate 
    } = attributes;

    return <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        { attributes.cover.data.map( ({attributes}) => {
            const { url, alternativeText } = attributes;
            return <CardMedia
            component="img"
            height="140"
            image={`${apiUrl}${url}`}
            alt={alternativeText}
          />
        })}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release Date: {releaseDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate: {rate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Length: {length}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {attributes.genres.data.map( ({attributes}) => {
          const { typeOfBookOrMovie } = attributes;
          return <Button size="small" color="primary">{ typeOfBookOrMovie }</Button>
        })}
      </CardActions>
    </Card>
    })}
  </>
}

export default Content;