import Course from './Course';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';


const CourseList = ({courses}) => (
    <ScrollView>
      <View style={styles.courseList}>
        {courses.map(course => <Course key={course.id} course={course} />) }
      </View>
    </ScrollView>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
  
export default CourseList;