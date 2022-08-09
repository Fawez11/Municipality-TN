import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    profilecontainer:{
      
        width:"90%",
        height:"100%",
        marginTop:"10%",
        alignSelf:"center",
        backgroundColor:"white",
        shadowRadius: 10,
        elevation: 13,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
    },
    image:{
        borderRadius:70,
        width:"30%",
        overflow:'hidden',
        marginLeft:150,
     
        
    },
    infocontainer:{
        marginTop:50,
        borderRadius:20,
        borderColor:"black",
        borderWidth:0
        
    },
    logoutbuton:{
        backgroundColor:"#14b8a6",
        borderRadius:7,
        width:"30%",
        textAlign:"center",
        alignItems:"center",
       marginBottom:30,
        marginTop:10,
        height:30
    },
    emailinput:{
        borderRadius:20,
        backgroundColor:"grey",
        width:"100%",
        height:40
    },
    formcontainer:{
        alignContent:"center",
        alignItems:'center',
        width:"50%",
        marginTop:"50%",
        
        

    },
    nameinput:{
        borderRadius:20,
        backgroundColor:"grey",
        width:"100%",
        marginTop:20,
        height:40
    },
    imageinput:{
        backgroundColor:"#14b8a6",
        width:"50%",
        marginRight:5,
        marginTop:20,
        height:30,
        textAlign:"center",
        alignItems:"center",
        alignContent:"center",
        marginLeft:10
    
    },
    icon:{
        marginLeft:200,
        marginTop:-15
    },
    submitbutton:{
        backgroundColor:"#14b8a6",
        width:"40%",
        alignItems:"center",
        textAlign:"center",
        borderRadius:7,
        marginTop:20,
        height:30
        
    },
    backbutton:{
        backgroundColor:"#14b8a6",
        width:"30%",
        marginTop:20,
        borderRadius:5,
        alignItems:"center",
        height:30,
        marginLeft:10
        

        
    },
    card:{
        alignContent:"center",
        alignItems:'center',
        backgroundColor:"#fff",
        alignSelf:"center",
        width:"90%",
        marginTop:20,
        shadowOffset:{
            height:10,
            width:10
        },
        shadowColor:"black",
        shadowOpacity:0.5,
        borderRadius:40,
        padding:20,
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        
    },
    complainsbut:{
        backgroundColor:"green",
        width:'20%',
        height:"30",
        borderRadius:70,
        
    },
    complaincard:{
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
    ,
    cards:{
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    buttonscontainer:{
        alignItems:"center",
        marginTop:"20%"
    },
    updatebutton:{
        padding:5,
        lineHeight:20,
        borderRadius:6,
        backgroundColor:"#2ea44f",
        alignSelf:"flex-start"
    },
    deletebutton:{
        borderRadius:6,
        backgroundColor:"#ff4742",
        padding:8,
        marginLeft:10,
        alignSelf:"flex-start"

    },
    popupinput:{
        backgroundColor:"#dee1e2",
        borderColor:"#dee1e2",
        borderRadius:2,
        height:36,
        padding:5

        

    },
    submitpopup:{
        borderRadius:6,
        backgroundColor:"#008060",
        padding:8,
        marginLeft:10
    },
    container:{
        
        width: "90%",
        alignSelf: "center",
        shadowRadius: 10,
        elevation: 13,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 0,
        },
        backgroundColor: "#fff",
        marginTop: 20,
        borderRadius:7
    },
        card: {
       backgroundColor: "#fff",
       padding: 10,
       margin: 10,
       borderRadius: 70
    },
    image:{
        height: 200,
        width: "100%",
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{

    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    }
})