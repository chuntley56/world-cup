import Head from 'next/head'
import Image from 'next/image'
import Fixtures from 'components/Fixtures.tsx'

const App = () => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b84ccf0588msh538de6092fff9b7p1a32d9jsn5539e74ecf8c',
	// 	  'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  //   }
  // }

  // const getData = (url, options) => {
  //   fetch(`https://api-football-v1.p.rapidapi.com/v3/${url}?league=1&season=2022`, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // }



  return (
    
      <Fixtures />
   
  )
}

export default App
