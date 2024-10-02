import { View, Text, FlatList, StyleSheet } from 'react-native';
import {} from 'react';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.nothing}>We haven't focused on anything yet!</Text>;

  const renderItem = ({item, index}) => <Text style={styles.flatListItem}>{index + 1}. {item}</Text>;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Things we've focused on</Text>
        <FlatList 
          data={history} 
          renderItem={renderItem} 
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.sm,
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingBottom: spacing.sm
  },

  nothing: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    textAlign: 'center'
  },

  flatListItem: {
    flex: 1,
    flexDirection: 'column',
    color: colors.white
  }
});
