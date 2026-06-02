import React from 'react'

const App = () => {

  const [data, setData] = React.useState([])

  const getData = () => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.download_url} alt={item.id} />
        </div>
      ))}
    </div>
  )
}

export default App
