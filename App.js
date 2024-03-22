import { StatusBar } from "expo-status-bar";
// Importa o componente View do React Native Web
import { View } from "react-native-web";
// Importa os estilos definidos no arquivo "./src/styles/styles"
import styles from "./src/styles/styles";
// Importa o componente TouristLocation localizado em "./src/componentes/TouristLocation"
import TouristLocation from "./src/componentes/TouristLocation";

export default function App() {
  // Define a função App como componente principal
  return (
    <View style={styles.container}>
      {" "}
      {/* Retorna uma View com o estilo definido em styles.container */}
      <TouristLocation
        name="Torre de Pisa" // Define o nome da localização turística
        descrição="A Torre de Pisa foi proposta como uma das 7 Maravilhas do Mundo Moderno! Essa Torre é o Campanário da Catedral de Santa Maria da Assunção na Piazza do Duomo e possui 55,86 metros de altura, 8 andares e aproximadamente 294 degraus." // Define a descrição da localização turística
        endereço="Piazza del Duomo, 56126 Pisa PI, Itália" // Define o endereço da localização turística
        imagesource={require("./src/images/TorredePisa.jpg")} // Define a fonte da imagem da localização turística
      />
      <StatusBar style="auto" />{" "}
      {/* Renderiza o StatusBar com o estilo "auto" */}
    </View>
  );
}
