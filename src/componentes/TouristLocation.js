// Importa os estilos definidos no arquivo "../styles/styles"
import styles from "../styles/styles";
// Importa os componentes View, Text e Image do React Native Web
import { View, Text, Image } from "react-native-web";

export default function TouristLocation({
  // Define a função TouristLocation que recebe um objeto como argumento, com propriedades name, descrição, endereço e imagesource
  name,
  descrição,
  endereço,
  imagesource,
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imagesource} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.descrição}>{descrição}</Text>
      <Text style={styles.endereço}>{endereço}</Text>
    </View>
  );
}
