import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>El punto de inflexión en una carrera musical: Hi This Is Flume.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('./assets/images/HITHISIFLUME.jpg')} style={styles.image}></Image>
      </View>

      <View style={styles.descriptionContainer}>

        <View style={styles.glitchContainer}>
            <View style={[styles.pixel, { backgroundColor: '#FFD600' }]} />
            <View style={[styles.pixel, { backgroundColor: '#FF6D00' }]} />
            <View style={[styles.pixel, { backgroundColor: '#00838F' }]} />
            <View style={[styles.pixel, { backgroundColor: '#F5F5F5' }]} />
        </View>
        
        <Text style={styles.subtitle}>
            Descripción
        </Text>
        
        <Text style={styles.descriptionText}>
            "Hi This Is Flume" es el primer mixtape del productor australiano de música electrónica Flume. Lanzado el 20 de marzo de 2019, es un mixtape experimental que propone un maridaje impecable entre géneros como experimental, trap, EDM, glitch hop, future bass, IDM y muchos otros.
        </Text>

        <Text style={styles.descriptionText}>
            Con un sonido experimental y un arte visual que mezcla lo orgánico y lo sintético, este mixtape representa (como el título lo sugiere) un punto de inflexión, una metamorfosis del artista joven en la cima de la popularidad al productor formado, de estilo fidedigno y comprometido con la creación de un universo artístico cuya característica es entreverar las sensaciones que el espectador experimenta mediante la vista y el oído; es decir, transformar lo que escuchas en su adaptación visual más digna.
        </Text>

        <Text style={styles.subtitle}>
            Curiosidades
        </Text>

        <View style={styles.infoCard}>
            <Text style={styles.curiosityText}>
            El álbum precedente a este mixtape se titula "Skin" (traducido al español "piel") y tiene un estilo completamente distinto; la primera canción de este mixtape se titula "Ecdysis", un término biológico que describe el "cambio de piel" en algunos animales invertebrados. Esto hace referencia al cambio y punto de inflexión en la carrera y estilo de Flume, como deshaciéndose de la piel anterior.
            </Text>
        </View>
        
        <View style={styles.infoCard}>
            <Text style={styles.curiosityText}>
            El nombre "Flume" proviene de una canción de la banda Bon Iver titulada "Flume".
            </Text>
        </View>
        
        <View style={styles.infoCard}>
            <Text style={styles.curiosityText}>
            En su álbum "22, A million" de 2016, Bon Iver utiliza símbolos en los títulos de sus canciones. Flume hace lo mismo con el track titulado " ╜φ°⌂▌╫§╜φ°⌂▌╫§╜φ°⌂▌╫§" en el mixtape Hi This Is Flume, lo que puede ser un tributo a la banda considerando también que el sonido de este track es bastante similar al de Bon Iver.
            </Text>
        </View>
        
      </View>
    </ScrollView>    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00838F',
    
  },
  titleContainer: {
    backgroundColor: '#FF6D00',
    padding: 20,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-start',
    marginTop: 40, //despegar de parte superior de la pantalla
    marginHorizontal: 8, //despegar de los bordes laterales de la pantalla
    elevation: 30
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#121212',
    textAlign: 'center'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 20,
    borderWidth: 3,
    borderColor: '#FFD600',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#121212'
  },
  image: {
    width: 300,
    height: 300,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden'
  },
  descriptionContainer: {
    paddingHorizontal: 25,
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255, 0.09)',
    borderRadius: 30,
    marginBottom: 40
  },
  descriptionText: {
    fontSize: 16,
    color: '#F5F5F5',
    lineHeight: 30,
    textAlign: 'left',
    opacity: 0.9,
    fontWeight: '800'
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottomWidth: 1,
    color: '#FFD600',
    borderColor: '#FFD600',
    borderRadius: 6,
    marginTop: 25,
    marginBottom: 10
  },
  infoCard: {
    backgroundColor: 'rgba(0, 131, 143, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#00838F'
  },
  curiosityText: {
    color: '#F5F5F5',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 20,
    fontWeight: '600'
  },
  glitchContainer: {
    position: 'absolute', //flotante, sin afectar otros elementos
    top: 10,
    right: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 40, //acomodar en cuadrado
  },
  pixel: {
    width: 20,
    height: 20,
    opacity: 0.8
  }
});