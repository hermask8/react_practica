import React from 'react'


class Conexion extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {data: []};
    }

    componentDidMount()
    {
        //Recupero datos del api
        fetch('https://localhost:44373/weatherforecast').then(response => response.json()).
        then(dataJason = this.setState({data: dataJason.result}));

        // Mando datos json a api
        var data2 = {username: 'example'};
        fetch('https://localhost:44373/weatherforecast', {
            method: 'POST', 
            body: JSON.stringify(data2),
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));


    }
    render()
    {
        return<h1>Pruebas</h1>;
    }
}

export default Conexion