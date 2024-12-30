import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,     
    padding: 20,
    backgroundColor: '#F5FCFF',
    borderColor: 'red'
  },
  input: {
    width: '95%',
    height: 50,
    fontSize: 16,
    padding: 10,
    margin:5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999'
  },
  inputLong: {    
    width: '95%',
    height: 180,
    fontSize: 16,    
    margin:5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999'
  },
  logo: {
    resizeMode:'contain',
    height:50,    
    justifyContent: 'flex-start',
    width: 100   
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',    
    marginTop: 5,
    paddingLeft: 10,    
  },
  errorText:{
    fontSize: 14,
    color:'red',    
    marginBottom: 5
  }
});