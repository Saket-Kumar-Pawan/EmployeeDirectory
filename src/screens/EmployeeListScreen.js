// src/screens/EmployeeDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeDetailScreen = ({ navigation }) => {
  const employee = navigation.getParam('employee', {});

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`Employee Details for ${employee.name}`}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{`Name: ${employee.name}`}</Text>
        <Text style={styles.detailText}>{`Email: ${employee.email}`}</Text>
        <Text style={styles.detailText}>{`Phone: ${employee.phone}`}</Text>
        <Text style={styles.detailText}>{`Manager: ${employee.parent}`}</Text>
      </View>
      <View style={styles.subordinatesContainer}>
        <Text style={styles.subordinatesHeader}>Subordinates:</Text>
        {employee.subordinates && employee.subordinates.length > 0 ? (
          employee.subordinates.map((subordinate) => (
            <Text key={subordinate.id} style={styles.subordinateText}>{`- ${subordinate.name}`}</Text>
          ))
        ) : (
          <Text style={styles.noSubordinatesText}>No subordinates</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailContainer: {
    marginBottom: 16,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 8,
  },
  subordinatesContainer: {
    marginBottom: 16,
  },
  subordinatesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subordinateText: {
    fontSize: 16,
    marginLeft: 16,
  },
  noSubordinatesText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default EmployeeDetailScreen;
