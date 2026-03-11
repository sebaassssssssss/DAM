import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {

  const [animo, setAnimo] = useState('bajoneado :c');
  const [nivel, setNivel] = useState(0);
  const [imagen, setImagen] = useState(require('./assets/images/bajoneado.png'));

  const subirAnimo = () => {
    if (nivel < 10) {
      setNivel(nivel + 1);
    }
  }

  const bajarAnimo = () => {
    if (nivel > 0) {
      setNivel(nivel - 1);
    }
  }

  useEffect(() => {
    if (nivel >= 0 && nivel <= 2) {
      setAnimo('bajoneado :c')
      setImagen(require('./assets/images/bajoneado.png'))
    } else if (nivel >= 3 && nivel <= 5) {
      setAnimo('más o menos ://')
      setImagen(require('./assets/images/masOMenos.png'))
    } else if (nivel >= 6 && nivel <= 8) {
      setAnimo('bien :)')
      setImagen(require('./assets/images/bien.png'))
    } else if (nivel >= 9 && nivel <= 10) {
      setAnimo('de perlas B)')
      setImagen(require('./assets/images/dePerlas.png'))
    }
  }, [nivel]) //lo que esté entre [] es lo que se va a vigilar

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Contador de ánimo
      </Text>

      <Image source={imagen} style={styles.imagen}></Image>

      <Text style={styles.textoAnimo}>{animo}</Text>

      <View style={styles.mostrarNivelAnimo}>
        <Text style={styles.textoNivel}>{nivel}</Text>
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity onPress={bajarAnimo}>
          <View style={styles.boton}>
            <Text>Bajar :c</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={subirAnimo}>
          <View style={styles.boton}>
            <Text>Subir c:</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagen: {
    width: 170, // Lo hice un poco más grande para que se vea bien
    height: 170,
    marginBottom: 20,
    borderRadius: 10,
  },
  textoAnimo: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  mostrarNivelAnimo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textoNivel: {
    fontSize: 18,
  },
  botonesContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  boton: {
    width: 80,
    alignItems: 'center',
    backgroundColor: '#afe2f5ff',
    padding: 10,
    borderRadius: 8,
  }
});