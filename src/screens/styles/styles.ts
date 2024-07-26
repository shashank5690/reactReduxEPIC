import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        padding:20,
    },
    header:{
        fontSize:24,
        fontWeight:'bold',
        color:'#333',
        marginBottom:20,
    },
    count:{
        fontSize:18,
        color:'#666',
        marginBottom:30,
    },
    button:{
        backgroundColor:'#007bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:30,
        marginVertical:10,
        alignItems:'center',
        width:'80%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff', // White text
        fontWeight: 'bold',
      },
});

export default styles;