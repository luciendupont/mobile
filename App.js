
import { StyleSheet,Image,Text,View,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>mobile</Text>
      
      <Image
          source={
            require ('mobile/assets/voiture.png')          }
          style={{width: 200, height: 200}}
        />  
<Button title= "ajouter "/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
