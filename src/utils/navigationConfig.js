export const StackNavigationOptions = ({navigation}) => {
  const {state} = navigation
  // alert(navigation)
  return {
    headerTitle: state.routeName,
    headerRight: (
      <Button
        onPress={() => Alert.alert('routeInfo' ,JSON.stringify(navigation))}
        // onPress={() => navigation.goBack()}
        title={state.routeName}
        color="#111"
      />
    )
  }
}