import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, TextInput, TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
const Screen_01 = () => {
    const navigation = useNavigation();
    const category =[
        {name :'Resort', image: require('../assets/baiTH4/resort.png')},
        {name :'Homestay', image: require('../assets/baiTH4/homestay.png')},
        {name :'Hotel', image: require('../assets/baiTH4/hostel.png')},
        {name :'Lodge', image: require('../assets/baiTH4/lodge.png')},
        {name :'Villa', image: require('../assets/baiTH4/villa.png')},
        {name :'Apaerement', image: require('../assets/baiTH4/apartment.png')},
        {name :'Hostel', image: require('../assets/baiTH4/hostel.png')},
        {name :'See all', image: require('../assets/baiTH4/seeall.png')},

    ];

    const location =[
        {image : require('../assets/baiTH4/photo1.png')},
        {image : require('../assets/baiTH4/photo2.png')},
        {image : require('../assets/baiTH4/photo3.png')},
        {image : require('../assets/baiTH4/photo1.png')},
        {image : require('../assets/baiTH4/photo2.png')},
        {image : require('../assets/baiTH4/photo3.png')},
    ];

    const footer=[
        {image: require('../assets/baiTH4/homeicon.png'), name:'Home'},
        {image: require('../assets/baiTH4/exploreicon.png') ,name:'Explore'},
        {image: require('../assets/baiTH4/findicon.png'), name:'Search'},
        {image: require('../assets/baiTH4/profileicon.png'), name:'Profile'},

    ];

    const [categoryAPI, setCategoryAPI] = useState([]);
    const [locationTionAPI, setlocationTionAPI] = useState([]);

    useEffect(() => {
    
        getCategories();
     
        getLocation();
      }, []);

      const getCategories = async () => {
        try {
          const res = await axios.get("https://6713b9c8690bf212c75f899f.mockapi.io/conghuy/category");
          setCategoryAPI(res.data); // Cập nhật state với dữ liệu từ API 
        } catch (error) {
          console.log("API fetch error:", error);
        }
      };

      const getLocation = async () => {
        try {
          const res = await axios.get("https://6713b9c8690bf212c75f899f.mockapi.io/conghuy/location");
          setlocationTionAPI(res.data); // Cập nhật state với dữ liệu từ API 
        } catch (error) {
          console.log("API fetch error:", error);
        }
      };
  return (
    <ScrollView>
        <View style={styles.header}>
            <View style={styles.headerTop}>
                <Image source={require('../assets/baiTH4/logoicon.png')} style={{width:50, height: 50, marginLeft:30, marginTop:30}}/>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <TextInput
                        placeholder='Search here...'
                        style={{marginTop:35, height:37, backgroundColor:'white', width:270, borderRadius:8, marginLeft:20, paddingLeft:18, position:'absolute'}}
                    />
                    <Ionicons name="search-outline" size={24} color="black" style={{marginTop:41, position:'absolute', marginLeft:257}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerBottom}>
                <View style={styles.headerBottomLeft}>
                    <Image source={require('../assets/baiTH4//personicon.png')} style={{borderRadius:'50%', height:43, width:43, marginLeft:37, marginTop:20}}/>
                    <View>
                        <Text style={{color:'white', fontSize:20, marginLeft:10, marginTop:17}}>Welcome!</Text>
                        <Text style={{color:'white', fontSize:13, marginLeft:10}}>Donna Stroupe</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/baiTH4/ringicon.png')} style={{width:40, height:40,marginLeft:150, marginTop:21}}/>
                </View>
            </View>
        </View>


        <View style={{flexDirection:'row', alignItems:'center', marginLeft:33, gap:225}}>
            <Text style={{fontSize:18, fontWeight:"500", marginTop:10}} >Category</Text>
            <TouchableOpacity>
                <Image source={require('../assets/baiTH4/3gach.png')} style={{width:30, marginTop:10}} resizeMode='contain'/>
            </TouchableOpacity>
        </View>

        {/* List */}

        <View
            style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-between',
                rowGap:10,
                marginTop:20,
            }}
        >
            {categoryAPI.map((item, index) => (
              <View key={index} style={{ alignItems: "center", width: "25%" }}>
                <Image source={{uri:item.image}} style={{width:50, height:50}}/>
                <Text style={{fontSize:14}}>{item.name}</Text>
              </View>
            ))}
        </View>

        <View style={{flexDirection:'row', alignItems:'center', marginLeft:33, gap:138}}>
            <Text style={{fontSize:18, fontWeight:"500", marginTop:10}} >Popular Destination</Text>
            <TouchableOpacity>
                <Image source={require('../assets/baiTH4/3gach.png')} style={{width:30, marginTop:10}} resizeMode='contain'/>
            </TouchableOpacity>
        </View>

        <View
            style={{flexDirection:'row'}}
        >
            {locationTionAPI.map((item,index) => (
                <Image key={index} source={{uri:item.image}} style={{width:100, height:104, borderRadius:10, marginLeft:10}}/>
            ))}
        </View>

        <View>
            <Text style={{marginTop:20, fontSize:18, fontWeight:"500", marginLeft:30}}>Recommended</Text>
            <View style={{flexDirection:'row', marginTop:15, columnGap:10}}>
                <Image source={require('../assets/baiTH4/photo4.png')} style={{flex:1, height:120, borderRadius:6}}/>
                <Image source={require('../assets/baiTH4/photo5.png')} style={{flex:1, height:120, borderRadius:6}}/>
            </View>
        </View>

        <View style={{ 
            flexDirection:'row',
            backgroundColor:'#5959b3',
            height:90,
            paddingHorizontal:40,
            marginTop:15,
            alignItems:'center',
            justifyContent:'space-between',
        }}>
            {footer.map((item, index)=>(
                <View key={index} style={{alignItems:'center'}}>
                    <Image source={item.image} style={{width:40, height:40}} resizeMode='contain' />
                    <Text style={{color:'white', fontSize:12, marginTop:4}}>{item.name}</Text>
                </View>
            ))}
        </View>
    </ScrollView>
  );
}

export default Screen_01

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'rgb(89,88,178)',
        height :170,
    },
    headerTop:{
        flexDirection: 'row',
        
    },
    headerBottom:{
        flexDirection: 'row',
    },
    headerBottomLeft:{
        flexDirection: 'row',
    }
})