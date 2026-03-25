import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

const App = () => {

  const [clima, setClima] = useState(1);
  const [temperatura, setTemperatura] = useState('30°C');
  const [mensajeClima, setMensajeClima] = useState('Clima perfecto para ir a nadar!');

  const [imagen, setImagen] = useState(require('./assets/images/soleado.jpg'));
  const [colorBoton, setColorBoton] = useState('#FFD700');

  const soleado = () => {
    setClima(1);
    const min = 25;
    const max = 30;
    const temperatura = Math.floor(Math.random() * (max - min + 1)) + min;
    setTemperatura(temperatura);
  }

  const nublado = () => {
    setClima(2);
    const min = 20;
    const max = 25;
    const temperatura = Math.floor(Math.random() * (max - min + 1)) + min;
    setTemperatura(temperatura);
  }

  const lluvioso = () => {
    setClima(3);
    const min = 15;
    const max = 20;
    const temperatura = Math.floor(Math.random() * (max - min + 1)) + min;
    setTemperatura(temperatura);
  }

  const tormenta = () => {
    setClima(4);
    const min = 5;
    const max = 15;
    const temperatura = Math.floor(Math.random() * (max - min + 1)) + min;
    setTemperatura(temperatura);
  }

  useEffect(() => {
    if (clima == 1) {
      setImagen(require('./assets/images/soleado.jpg'));
      setMensajeClima('Clima perfecto para ir a nadar!');
      setColorBoton('#FFD700');
    } else if (clima == 2) {
      setImagen(require('./assets/images/nublado.jpg'));
      setMensajeClima('Recuerda salir con un paraguas!');
      setColorBoton('#A9A9A9');
    } else if (clima == 3) {
      setImagen(require('./assets/images/lluvioso.jpg'));
      setMensajeClima('La lluvia podría retrasarte!');
      setColorBoton('#5D5D5D');
    } else if (clima == 4) {
      setImagen(require('./assets/images/tormenta.jpg'));
      setMensajeClima('Mejor quédate en casa!');
      setColorBoton('#55D9DD');
    }
  }, [clima]);

  return (
    <View style={styles.container}>
      {/* Los cuatro botones */}
      <View style={styles.contenedorBotones}>
        <TouchableOpacity onPress={soleado}>
          <View style={[styles.botonClima, { backgroundColor: colorBoton }]}>
            <Text>Soleado</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={nublado}>
          <View style={[styles.botonClima, { backgroundColor: colorBoton }]}>
            <Text>Nublado</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={lluvioso}>
          <View style={[styles.botonClima, { backgroundColor: colorBoton }]}>
            <Text>Lluvioso</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={tormenta}>
          <View style={[styles.botonClima, { backgroundColor: colorBoton }]}>
            <Text>Tormenta</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.infoClima}>
        <Text style={styles.texto}>{temperatura} °C</Text>
        <Text style={styles.texto}>{mensajeClima}</Text>
      </View>

      <Image style={styles.imagenClima} source={imagen} />

      <TextInput style={styles.input} placeholder='Introduce tu ciudad'></TextInput>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    paddingVertical: 20
  },
  contenedorBotones: {
    flexDirection: 'row',
    gap: 10
  },
  botonClima: {
    width: 80,
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    padding: 6
  },
  infoClima: {
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 50,
    width: '95%'
  },
  texto: {
    fontSize: 25
  },
  imagenClima: {
    width: 150,
    height: 150,
    borderRadius: 15
  },
  mensajeClima: {
    fontWeight: '500'
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#E2E2E2',
    borderRadius: 15,
    paddingHorizontal: 15
  }
});