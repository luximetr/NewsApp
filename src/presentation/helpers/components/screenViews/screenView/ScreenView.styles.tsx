import {StyleSheet, StatusBarStyle} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  aboveSafeArea: {
    backgroundColor: 'white',
    flex: 0,
 },
 safeArea: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
 },
 underSafeArea: {
    backgroundColor: 'white',
    flex: 0
 },
});

export const statusBarStyle = 'dark-content' as StatusBarStyle