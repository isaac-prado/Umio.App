import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function LoginScreen() {
  const handleGoogleLogin = () => {
    // Aqui seria implementada a autenticação com o Google
    // Por enquanto, apenas redirecionamos para a home
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.burgersRow}>
        <Image source={require('@/assets/images/login-food2.png')} style={styles.smallBurger} />
        <Image source={require('@/assets/images/login-food1.png')} style={styles.smallBurger} />
        <Image source={require('@/assets/images/login-food3.png')} style={styles.smallBurger} />
        <Image source={require('@/assets/images/login-food4.png')} style={styles.smallBurger} />
        <Image source={require('@/assets/images/login-food5.png')} style={styles.smallBurger} />
      </View>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo ao UMIÓ!</Text>
        <Text style={styles.loginText}>Login</Text>
      </View>
      
      <View style={styles.loginOptions}>
        <TouchableOpacity style={styles.loginButton} onPress={handleGoogleLogin}>
          <Image source={require('../assets/images/google.png')} style={styles.loginIcon} />
          <Text style={styles.loginButtonText}>Entre com o Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton}>
          <Image source={require('../assets/images/apple.png')} style={styles.loginIcon} />
          <Text style={styles.loginButtonText}>Entre com a Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton}>
          <Image source={require('../assets/images/email.png')} style={styles.loginIcon} />
          <Text style={styles.loginButtonText}>Entre com o E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  burgersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    alignItems: 'center',
  },
  smallBurger: {
    width: 61,
    resizeMode: 'contain',
  },
  welcomeContainer: {
    marginBottom: 40,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  loginOptions: {
    gap: 15,
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
}); 