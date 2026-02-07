import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Elegancia, electro-pop francés y un sonido único: Recto Verso.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('./assets/images/RECTOVERSO.jpg')} style={styles.image}></Image>
      </View>
      
      <ScrollView style={styles.descriptionContainer} contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.descriptionText}>
          Recto Verso, primer (y último) álbum del dúo francés Paradis ha sido desde el 23 de octubre de 2022 mi álbum favorito, y las razones principales se pueden dividir en tres categorías que describen a la perfección su lugar como favorito entre el catálogo musical del que disfruto todos los días: la consolidación de mi gusto musical, las implicaciones que tuvo el descubrimiento de este álbum y la forma tan cotidiana y arbitraria en que fue descubierto.
        </Text>

        <Text style={styles.subtitle}>
          Gusto musical.
        </Text>
        <Text style={styles.descriptionText}>
          Escuchar este álbum por primera vez fue una experiencia casi inigualable, puesto que todas las canciones me gustaron, cada una de ellas tiene algo propio y una idea definida por transmitir. La combinación de generos como el house, electrónica, pop francés y hasta synthpop dieron como resultado un álbum íntimo, detallado y elegante que, en palabras coloquiales, me cayó como anillo al dedo.
        </Text>

        <Text style={styles.subtitle}>
          Después de descubrirlo.
        </Text>
        <Text style={styles.descriptionText}>
          Un álbum así de único sólo pudo tener consecuencias agradables. Entre las más importantes se encuentran, primero, que comencé a buscar música similar y abrir mi gusto, construyendo el catálogo musical que actualmente puedo disfrutar. La otra gran consecuencia fue que me dio el ánimo de comenzar a estudiar francés por mi cuenta, interesarme en el idioma y la cultura francesa.
        </Text>

        <Text style={styles.subtitle}>
          Cómo lo descubrí.
        </Text>
        <Text style={styles.descriptionText}>
          Un 23 de octubre de 2022, aproximadamente a las 18:20, me encontraba en un bazar dentro de un hotel. A lo lejos, dentro de una sala cercana a la zona del bazar, escuché levemente una melodía discreta y sencilla acompañada de un ritmo joven y relajado. Era "Instantané", la primera canción del álbum. El entorno tan único, el ambiente de ese lugar, ese día y ese momento y la personalidad de dicha canción hicieron que con la app Shazam reconociera la canción y decidiera darle una oportunidad al álbum. El resto es historia.
        </Text>

        <Text style={styles.descriptionText}>
          
        </Text>

      </ScrollView>
    </View>    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2741',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    backgroundColor: "#C6AC8F",
    height: "auto",
    width: "100%",
    marginTop: "20%",
    borderRadius: 30
  },
  textTitle: {
    fontFamily: "serif",
    fontSize: 24,
    fontWeight: "bold",
    color:"#234E70",
    padding: 15,
    letterSpacing: 1
  },
  imageContainer: {
    height: "35%",
    width: "100%",
    marginTop: "5%",
    padding: 15,
    alignItems: "center"
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    borderRadius: 30,
    elevation: 60,
    shadowColor: "#000000"
  },
  descriptionContainer: {
    backgroundColor: "#1B263B",
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -30,
    borderColor: "#7FB5D1",
    borderWidth: 0.2,
    elevation: 50,
    shadowColor: "#000000"
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 10
  },
  descriptionText: {
    fontFamily: "sans-serif",
    textAlign: "justify",
    lineHeight: 25,
    color: "#D1D1D1",
    marginBottom: 15
  },
  subtitle: {
    fontFamily: "sans-serif-light",
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFD275",
    marginTop: 10,
    marginBottom: 5,
    textTransform: "uppercase"
  }
});
