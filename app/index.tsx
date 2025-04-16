import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('@/assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.burgerContainer}>
        <Image 
          source={require('@/assets/images/hamburger.png')} 
          style={styles.burger}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.tagline}>É coisa de outro mundo...</Text>
      
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Peça já!</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  logo: {
    width: 83,
    height: 82,
  },
  burgerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  burger: {
    width: 430,
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 40,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#EE6B10',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
}); 