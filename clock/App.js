import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const formatTime = (date, timeZone) => {
  try {
    return new Intl.DateTimeFormat('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timeZone,
      hour12: false
    }).format(date);
  } catch (e) {
    console.error("Error en la zona horaria: ", e);
    return "Error de zona";
  }
}

export default function App() {
  const [time, setTime] = useState(new Date());

  //Arreglo de las ciudades: nombre (name) y zona horaria (zone)
  const cities = [
    { name: 'Ciudad de México', zone: 'America/Mexico_City', flag: require('./assets/images/banderaMexico.png') },
    { name: 'Paris', zone: 'Europe/Paris', flag: require('./assets/images/banderaFrancia.png') },
    { name: 'Sydney', zone: 'Australia/Sydney', flag: require('./assets/images/banderaAustralia.png') },
    { name: 'Ashgabat', zone: 'Asia/Ashgabat', flag: require('./assets/images/banderaTurkmenistan.png') }
  ];

  //no es bueno, es ineficiente porque satura la memoria. Guarda la variable cada 1000ms
  /*setInterval(() => {
    setTime(new Date());
    
  }, 1000);*/

  //useEffect para actualizar la hora cada segundo (1000 ms) y limpiar la memoria con clearInterval
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <View style={styles.container}>
      {/*función .map() para mostrar todos los elementos del arreglo*/}
      {cities.map((city, index) => (
        <View style={styles.cityContainer} key={index}>
          <Image source={city.flag} style={styles.bandera} resizeMode='contain' />
          {/**Se le tiene que pasar un elemento visual para que muestre algo.
              En este caso se le pasan dos <Text>
          */}
          <Text style={styles.cityName}>{city.name}</Text>
          {/**La hora se formatea al idioma local (es-MX)
           * Se obtiene se la propiedad .zone de cada city (por el arreglo)
          */}
          <Text style={styles.cityTime}>{formatTime(time, city.zone)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  cityContainer: {
    width: '85%',
    backgroundColor: '#C8E6C9',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10, //para separar las tarjetas (según)
    alignItems: 'center',
    elevation: 4,
  },
  bandera: {
    width: 60,
    height: 40,
    marginBottom: 10,
  },
  cityName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 3,
    marginBottom: 5,
  },
  cityTime: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 2,
  }
});