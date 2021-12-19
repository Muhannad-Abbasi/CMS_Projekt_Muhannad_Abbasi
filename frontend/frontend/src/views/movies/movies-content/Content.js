import { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';

const Content = () => {

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

    return <Card>
    <p>{title}</p>
    <p>{length}</p>
    <p>{releaseDate}</p>
    <p>{rate}</p>
    </Card>
    })}
  </>
}

export default Content;