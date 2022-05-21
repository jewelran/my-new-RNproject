import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,Pressable } from 'react-native';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import Text from './src/components/text/text';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  })

  if(!loaded){
    return <Text>Font is loading....</Text>
  }
  const clicked= () => {
        alert("this is jewel rana clicked right now")
  }
  return (
<View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontFamily:typography.Bold,fontSize:spacing[6],padding:spacing[4]}}>
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!
        Open up App.js to start working on your app!

      </Text>
      <View style={styles.buttonContain}>
        <Pressable onPress={clicked} style={styles.button}>
          <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>I am button</Text>
        </Pressable>
      </View>
      </View>
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:"red",
    padding:spacing[6],
    lineHeight:spacing[9],
    fontSize:15,
    fontWeight:"bold",

  },
  button:{
      backgroundColor:colors.green,
      padding:spacing[3],
      width:300,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:10,
      

  },
  buttonContain:{
    alignItems:"center",

  }
});
