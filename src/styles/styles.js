// Importa a função StyleSheet do React Native Web
import { StyleSheet } from "react-native-web";

// Cria um objeto de estilos usando a função StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 500,
    height: 500,
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
  },
  endereço: {
    fontSize: 25,
    color: "#add8e6",
  },
  descrição: {
    fontSize: 20,
    color: "#a9a9a9",
  },
  card: {
    width: "80%",
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
// Exporta os estilos para serem usados em outros componentes
export default styles;
