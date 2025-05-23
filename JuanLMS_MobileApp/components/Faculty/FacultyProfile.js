import { Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import FacultyProfileStyle from '../styles/faculty/FacultyProfileStyle';
import { useNavigation } from '@react-navigation/native';



export default function FacultyProfile() {

  //navigation
  const changeScreen = useNavigation();

  const logout = () => {
    changeScreen.navigate("Login")
  }

  const helpCenter =() =>{
    changeScreen.navigate("FMain")
  }

  return (
    <View style={FacultyProfileStyle.container}>
      <View style={FacultyProfileStyle.card}>
        <View style={FacultyProfileStyle.profileContainer}>
          <View style={FacultyProfileStyle.avatar} />
          <Text style={FacultyProfileStyle.name}>James, Johnson</Text>
          <Text style={FacultyProfileStyle.info}>Faculty</Text>
          <Text style={FacultyProfileStyle.info}>College of Entrepreneurship</Text>
          <TouchableOpacity style={FacultyProfileStyle.button}>
            <MaterialIcons name="camera-alt" size={16} color="white" />
            <Text style={FacultyProfileStyle.buttonText}> Update Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={helpCenter}
          style={FacultyProfileStyle.button}>
            <MaterialIcons name="help" size={16} color="white" />
            <Text style={FacultyProfileStyle.buttonText}>Support Center</Text>
          </TouchableOpacity>
        </View>
        <View style={FacultyProfileStyle.contactContainer}>
          <Text style={FacultyProfileStyle.contactTitle}>Contact</Text>
          <View style={FacultyProfileStyle.contactRow}>
            <MaterialIcons name="email" size={16} color="#555" />
            <Text style={FacultyProfileStyle.contactText}>jamesjhonson@sjddef.edu.ph</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={FacultyProfileStyle.logout} onPress={logout}><Text style={FacultyProfileStyle.buttonText}>Log-Out</Text></TouchableOpacity>
    </View>

  );
}