// src/components/EmployeeCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee }) => {
  return (
    <View style={[styles.card, { backgroundColor: employee.background_color }]}>
      <Text style={styles.text}>{`Name: ${employee.name}`}</Text>
      <Text style={styles.text}>{`Email: ${employee.email}`}</Text>
      <Text style={styles.text}>{`Phone: ${employee.phone}`}</Text>
      <Text style={styles.text}>{`Manager: ${employee.parent}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EmployeeCard;
