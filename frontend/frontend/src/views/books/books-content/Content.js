import { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';
// import Loading from '../../../components/Loading';

const Content = () => {
  
  const apiUrl = 'http://localhost:1337';

  const [ books, setBooks ] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/books?populate=*");
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
        Title, 
        Author, 
        numberOfPages, 
        rate
      } = attributes;

      return <Card>
        <p>{Author}</p>
        <p>{Title}</p>
        <p>{numberOfPages}</p>
        <p>{rate}</p>
        <div>{attributes.genres.data.map( ({attributes}) => {
          const { typeOfBookOrMovie } = attributes;
          return <p>{typeOfBookOrMovie}</p>
        })}</div>
        <div>{ attributes.cover.data.map( ({attributes}) => {
          const { url, alternativeText } = attributes;
          return <img src={`${apiUrl}${url}`} alt={alternativeText} width="200px"/>
        })}</div>
      </Card>
    })}
  </>
}

export default Content;