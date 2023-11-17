
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const EmployeeListScreen = ({ navigation }) => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d');
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={employeeData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('EmployeeDetail', { employee: item })}
          >
            <View style={{ padding: 16, backgroundColor: item.background_color }}>
              <Text>{`Name: ${item.name}`}</Text>
              <Text>{`Email: ${item.email}`}</Text>
              <Text>{`Phone: ${item.phone}`}</Text>
              <Text>{`Manager: ${item.parent}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EmployeeListScreen;

