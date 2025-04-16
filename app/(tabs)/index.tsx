import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MapPin, ChevronDown, Search, Plus, Utensils, Pizza, Salad, Bell } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Image 
            source={require('@/assets/images/logo.png')} 
            style={styles.profilePic}
            resizeMode="cover"
          />
        </TouchableOpacity>
        
        <View style={styles.locationContainer}>
          <MapPin size={20} color="#EE6B10" style={styles.locationIcon} />
          <Text style={styles.locationText}>Itajubá, Minas Gerais</Text>
          <ChevronDown size={12} color="#EE6B10" style={styles.chevronIcon} />
        </View>
        <View style={styles.notificationContainer}>
          <Bell size={20} color="#000" />
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <Search size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder=""
          placeholderTextColor="#666"
        />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        
        <View style={styles.couponBanner}>
          <View style={styles.couponTextContainer}>
            <Text style={styles.couponTitle}>CUPONS</Text>
            <Text style={styles.discountText}>20%</Text>
            <Text style={styles.discountSubtext}>DE DESCONTO</Text>
          </View>
          <Image 
            source={require('@/assets/images/hamburger.png')} 
            style={styles.couponImage}
            resizeMode="contain"
          />
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconCircle}>
              <Utensils size={24} color="black" />
            </View>
            <Text style={styles.categoryLabel}>MASSAS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.categoryItem, styles.categoryItemActive]}>
            <View style={[styles.categoryIconCircle]}>
              <Pizza size={24} color="black" />
            </View>
            <View style={styles.categoryActiveTextWrapper}>
              <Text style={[styles.categoryLabel, styles.categoryLabelActive]}>BURGUERS</Text>
              <Text style={styles.categorySubLabel}>160 g</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={styles.categoryIconCircle}>
              <Salad size={24} color="black" />
            </View>
            <Text style={styles.categoryLabel}>SALADA</Text>
          </TouchableOpacity>
        </ScrollView>
        
        <View style={styles.burgersGrid}>
          <View style={styles.burgersRow}>
            <View style={styles.burgerCard}>
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={styles.burgerImage}
                resizeMode="contain"
              />
              <Text style={styles.burgerName}>Do Meu Jeito & Mió</Text>
              <Text style={styles.burgerWeight}>(Burger 160g)</Text>
              <Text style={styles.burgerPrice}>R$ 21.90</Text>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.burgerCard}>
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={styles.burgerImage}
                resizeMode="contain"
              />
              <Text style={styles.burgerName}>Salada</Text>
              <Text style={styles.burgerWeight}>(Burger 160g)</Text>
              <Text style={styles.burgerPrice}>R$ 28.90</Text>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.burgersRow}>
            <View style={styles.burgerCard}>
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={styles.burgerImage}
                resizeMode="contain"
              />
              <Text style={styles.burgerName}>Bacon</Text>
              <Text style={styles.burgerWeight}>(Burger 160g)</Text>
              <Text style={styles.burgerPrice}>R$ 33.90</Text>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.burgerCard}>
              <Image 
                source={require('@/assets/images/hamburger.png')} 
                style={styles.burgerImage}
                resizeMode="contain"
              />
              <Text style={styles.burgerName}>Catupiry</Text>
              <Text style={styles.burgerWeight}>(Burger 160g)</Text>
              <Text style={styles.burgerPrice}>R$ 32.90</Text>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={18} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  logo: {
    width: 40,
    height: 40,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  chevronIcon: {
    marginLeft: 2,
  },
  profileButton: {
    width: 35,
    height: 35,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    height: 40,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    height: '100%',
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  couponBanner: {
    backgroundColor: '#EE6B10',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 20,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  couponTextContainer: {
    padding: 15,
  },
  couponTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  discountText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  discountSubtext: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  couponImage: {
    width: 120,
    height: 120,
    marginTop: -10,
    marginRight: -10,
  },

  // CATEGORIAS ATUALIZADAS
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryItemActive: {
    backgroundColor: '#EE6B10',
  },
  categoryIconCircle: {
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  categoryLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoryLabelActive: {
    color: 'white',
  },
  categorySubLabel: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -2,
  },
  categoryActiveTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  burgersGrid: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  burgersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  burgerCard: {
    width: '48%',
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#333',
    position: 'relative',
  },
  burgerImage: {
    width: '100%',
    height: 80,
    marginBottom: 10,
  },
  burgerName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  burgerWeight: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  burgerPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#EE6B10',
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationContainer: {
    marginRight: 15,
    backgroundColor: '#B8B8B8',
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     marginBottom: 15,
//   },
//   logo: {
//     width: 40,
//     height: 40,
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   locationIcon: {
//     marginRight: 5,
//   },
//   locationText: {
//     color: 'white',
//     fontSize: 14,
//     marginRight: 5,
//   },
//   chevronIcon: {
//     marginLeft: 2,
//   },
//   profileButton: {
//     width: 35,
//     height: 35,
//     overflow: 'hidden',
//   },
//   profilePic: {
//     width: '100%',
//     height: '100%',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#333',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginHorizontal: 15,
//     height: 40,
//     marginBottom: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     color: 'white',
//     fontSize: 16,
//     height: '100%',
//   },
//   welcomeText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal: 15,
//     marginBottom: 15,
//   },
//   couponBanner: {
//     backgroundColor: '#EE6B10',
//     borderRadius: 10,
//     marginHorizontal: 15,
//     marginBottom: 20,
//     height: 100,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     overflow: 'hidden',
//   },
//   couponTextContainer: {
//     padding: 15,
//   },
//   couponTitle: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   discountText: {
//     color: 'white',
//     fontSize: 36,
//     fontWeight: 'bold',
//     lineHeight: 40,
//   },
//   discountSubtext: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   couponImage: {
//     width: 120,
//     height: 120,
//     marginTop: -10,
//     marginRight: -10,
//   },
//   categoriesContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   categoryItem: {
//     alignItems: 'center',
//     marginRight: 20,
//   },
//   categoryIconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#333',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   categoryIconContainerActive: {
//     backgroundColor: '#EE6B10',
//   },
//   categoryIcon: {
//     width: 30,
//     height: 30,
//     tintColor: 'white',
//   },
//   categoryText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   categoryTextActive: {
//     color: '#EE6B10',
//   },
//   categoryWeight: {
//     color: '#EE6B10',
//     fontSize: 10,
//   },
//   categoryItemActive: {
//     // Estilos para categoria ativa
//   },
//   burgersGrid: {
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   burgersRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   burgerCard: {
//     width: '48%',
//     backgroundColor: '#111',
//     borderRadius: 15,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#333',
//     position: 'relative',
//   },
//   burgerImage: {
//     width: '100%',
//     height: 80,
//     marginBottom: 10,
//   },
//   burgerName: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   burgerWeight: {
//     color: '#888',
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   burgerPrice: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   addButton: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     backgroundColor: '#EE6B10',
//     width: 25,
//     height: 25,
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   notificationContainer: {
//     marginRight: 15,
//     backgroundColor: '#B8B8B8',
//     width: 30,
//     height: 30,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// }); 