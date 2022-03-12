import {Component} from 'react';
import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import {
  useEffect,
  FlatList,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa'},
  row: {height: 28},
  text: {textAlign: 'center'},
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
function GoToButton2({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={` ${screenName}`}
      color="#841584"
      onPress={() => navigation.navigate(Login)}
    />
  );
}
function GoToButton3({screenName}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(VetAppointment)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{'Vet Appointment'}</Text>
      </View>
    </TouchableOpacity>
  );
}

function GoToButton4({screenName}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(NewProfile)}>
      <View style={styles.button2}>
        <Text style={styles.buttonText}>
          {'Create a New Pet Profile / Edit'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
function GoToButton5({screenName}) {
  const navigation = useNavigation();

  return (
    <Button
      title={` ${screenName}`}
      color="orange"
      onPress={() => navigation.navigate(Signup)}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: '#f01d71',
  },
  button2: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export class HomeScreen extends Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1e90ff',
        }}>
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'white',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: -15,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'green',
            alignSelf: 'flex-end',
            marginHorizontal: '1%',
            marginBottom: -15,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'pink',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: -15,
            paddingHorizontal: 25,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'yellow',
            alignSelf: 'flex-end',
            marginHorizontal: '7%',
            marginBottom: -15,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'orange',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: -15,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'lime',
            alignSelf: 'flex-end',
            marginHorizontal: '1%',
            marginBottom: -15,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'purple',
            alignSelf: 'flex-start',
            marginHorizontal: '1%',
            marginBottom: -25,
            paddingHorizontal: 25,
          }}
        />
        <FontAwesome5
          name="paw"
          size={25}
          style={{
            color: 'red',
            alignSelf: 'flex-end',
            marginHorizontal: '7%',
            marginBottom: -25,
          }}
        />
        <Image
          style={{width: 250, height: 150, margin: -5}}
          source={require('./android/images/E-VET.png')}
        />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            margin: 7,
            color: 'blue',
            fontWeight: 'bold',
          }}>
          Welcome to E-VET
        </Text>
        <TextInput
          style={{
            width: '80%',
            backgroundColor: 'lightblue',
            padding: 15,
            marginBottom: 10,
            fontWeight: 'bold',
          }}
          placeholder="Username or email: "
        />
        <TextInput
          style={{
            width: '80%',
            backgroundColor: 'lightblue',
            padding: 15,
            marginBottom: 10,
            fontWeight: 'bold',
          }}
          placeholder="Password : "
          secureTextEntry
        />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
        />
        <GoToButton2 screenName="Login" />
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
          }}
        />
        <GoToButton5 screenName="Signup" />
      </View>
    );
  }
}
function LoginScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4287f5',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
      <MyInput />
    </View>
  );
}

function NewProfile({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'Casper',
      gender: 'unknown',
      breed: 'unknown',
      weight: '8',
      key: '1',
    },
  ]);

  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View stlye={styles.modalContent}>
          <FontAwesome5
            name="window-close"
            size={25}
            onPress={() => setModalOpen(false)}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 95,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>
      <FontAwesome5 name="plus" size={25} onPress={() => setModalOpen(true)} />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(PetsInformation)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
class Login extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4287f5',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: '#4287f5',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                paddingHorizontal: 70,
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#2b49c3',
                borderRadius: 40,
                marginVertical: 30,
                width: 300,
                alignItems: 'center',
              }}>
              <FontAwesome5
                name="search-location"
                size={25}
                style={{color: '#fff'}}
              />
              <TextInput
                style={{
                  marginTop: 5,
                  borderRadius: 45,
                  backgroundColor: 'white',
                  width: 200,
                  borderColor: 'black',
                }}
                placeholder="Search For Veterinary"
                placeholderStyle={{
                  paddingHorizontal: 20,
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                onChangeText={this.handleAge}
              />
            </View>
            <GoToButton3 screenName="PetsInformation" />
            <Image
              style={{width: 200, height: 120, margin: 20}}
              source={require('./android/images/dog1.png')}
            />
            <GoToButton4 screenName="PetsInformation" />
            <Image
              style={{width: 200, height: 120, margin: 20}}
              source={require('./android/images/kedi1.png')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function ReviewForm(addReview) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{name: '', gender: '', breed: '', weight: ''}}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview = values;
        }}>
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review gender"
              onChangeText={props.handleChange('gender')}
              value={props.values.gender}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review breed"
              onChangeText={props.handleChange('breed')}
              value={props.values.breed}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review weight"
              onChangeText={props.handleChange('weight')}
              value={props.values.weight}
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

function VetAppointment({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
      }}>
      <Appointment />
      <Cleander />
    </View>
  );
}

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Age', 'Address', 'Rate'],
      tableData: [
        ['Ahmet', '27', 'Izmir', '7.5'],
        ['Mehmet', '46', 'Ankara', '8'],
        ['Ayşe', '24', 'Istanbul', '6.7'],
        ['Fatma', '38', 'Bursa', '7.8'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View
        style={{flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'}}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

class Cleander extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: ['', 'Head1', 'Head2', 'Head3'],
      tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
      tableData: [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c'],
      ],
    };
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker onDateChange={this.onDateChange} />

        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  }
}

function Signup({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4287f5',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
      <MyInput />
    </View>
  );
}

class MyInput extends Component {
  state = {
    age: '',
    height: '',
    weight: '',
    hBenedict: 0,
    gender: 'dişi',
    bodyMassIndex: '',
    circleSize: 0,
    takenCalorie: 0,
    percentage: 0,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4287f5',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: '#4287f5',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <TextInput
              style={{
                marginTop: 80,
                borderRadius: 5,
                backgroundColor: 'white',
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
              }}
              placeholder="Mail or phone number"
              placeholderStyle={{
                alignContent: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              onChangeText={this.handleAge}
            />
            <TextInput
              style={{
                marginTop: 40,
                borderRadius: 5,
                backgroundColor: 'white',
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
              }}
              placeholder="Password"
              onChangeText={this.handleHeight}
            />
            <TextInput
              style={{
                marginTop: 40,
                borderRadius: 5,
                backgroundColor: 'white',
                width: 200,
                borderWidth: 1,
                borderColor: 'black',
              }}
              placeholder="Password Again"
              placeholderStyle="center"
              onChangeText={this.handleWeight}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
          />
          <GoToButton2 screenName="Signup" />
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

function PetsInformation({navigation}) {
  const [isSelected, setSelection] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);
  const [isSelected3, setSelection3] = React.useState(false);
  const [isSelected4, setSelection4] = React.useState(false);
  const [isSelected5, setSelection5] = React.useState(false);
  const [isSelected6, setSelection6] = React.useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#4287f5',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#4287f5',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 40,
              marginVertical: 30,
              alignItems: 'center',
              alignSelf: 'space-between',
              marginHorizontal: -20,
              marginBottom: -30,
            }}
          />
          <TextInput
            style={{
              marginTop: 20,
              borderRadius: 5,
              justifyContent: 'space-between',
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Pet's Name"
            placeholderStyle={{
              alignContent: 'center',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <FontAwesome5
            name="edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -40,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={{
              marginTop: 30,
              borderRadius: 5,
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Gender"
          />
          <FontAwesome5
            name="edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -40,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={{
              marginTop: 30,
              borderRadius: 5,
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Breed"
            placeholderStyle="center"
          />
          <FontAwesome5
            name="edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -40,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={{
              marginTop: 30,
              borderRadius: 5,
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Weight"
            placeholderStyle="center"
          />
          <FontAwesome5
            name="edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -40,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={{
              marginTop: 30,
              borderRadius: 1,
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Your Name"
            placeholderStyle="center"
          />
          <FontAwesome5
            name="user-edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -30,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={{
              marginTop: 30,
              borderRadius: 1,
              backgroundColor: 'white',
              width: 150,
              borderWidth: 1,
              borderColor: 'black',
            }}
            placeholder="Telephone Number"
            placeholderStyle="center"
          />
          <FontAwesome5
            name="user-edit"
            size={25}
            style={{
              color: '#fff',
              paddingHorizontal: 100,
              alignContent: 'center',
              marginTop: -30,
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}
          />
        </View>

        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            backgroundColor: 'lightgrey',
            marginTop: 30,
          }}>
          <Text style={{fontSize: 20}}>Vaccine 1 </Text>
          <FontAwesome5
            name="syringe"
            size={25}
            style={{
              color: '#4263ec',
              backgroundColor: 'lightgrey',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          />
          <CheckBox value={isSelected} onValueChange={setSelection} />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 20}}> Vaccine 2 </Text>
          <FontAwesome5
            name="syringe"
            size={25}
            style={{
              color: 'yellow',
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          />
          <CheckBox value={isSelected3} onValueChange={setSelection3} />
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flex: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            backgroundColor: 'lightgrey',
          }}>
          <Text style={{fontSize: 20}}> Vaccine 3 </Text>
          <FontAwesome5
            name="syringe"
            size={25}
            style={{
              color: 'black',
              backgroundColor: 'lightgrey',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          />
          <CheckBox value={isSelected2} onValueChange={setSelection2} />
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize: 20}}> Vaccine 4 </Text>
          <FontAwesome5
            name="syringe"
            size={25}
            style={{
              color: 'green',
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          />
          <CheckBox value={isSelected4} onValueChange={setSelection4} />
        </View>
        <View />
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="VetAppointment" component={VetAppointment} />
        <Stack.Screen name="PetsInformation" component={PetsInformation} />
        <Stack.Screen name="NewProfile" component={NewProfile} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
