import {View, Text} from 'react-native';
import React from 'react';
import CategorySection from './CategorySection';
import PopularCourses from './PopularCourses';

export default function RenderCategories() {
  return (
    <>
      <CategorySection />
      <PopularCourses />
    </>
  );
}
