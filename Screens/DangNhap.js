import { StyleSheet,Image, TouchableOpacity, TextInput,Text, View } from 'react-native'
import React, { useState }from 'react'
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const DangNhap = ({navigate}) => {
    
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        if (!user || !password) {
            alert('Please fill all fields.');
            return;
        }
        try {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Đăng nhập thành công
                console.log(data);
                // Lưu tên người dùng và link ảnh vào navigation
                navigation.navigate("Screen_01", { 
                    user: user, // Truyền username
                    avatar: data.avatar // Truyền link ảnh
                }); 

                setUser("")
                setPassword("")
            } else {
                // Đăng nhập không thành công
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong!');
        }

    };
  return (
    <View>
       {/* Hình ảnh và văn bản chào mừng */}
       <View style={{ alignItems: 'center', marginBottom: 40 }}>
                <Image
                    source={require('../assets/baiTH4/logoicon.png')}
                    style={{ width: 100, height: 100, marginTop:50, borderRadius:'80%'}}
                />
                <Text style={{ fontSize: 30, fontWeight: '600', marginVertical: 10 }}>
                    Welcome
                </Text>
                <Text style={{ fontSize: 15, color: 'gray', textAlign: 'center' }}>
                    Create your account
                </Text>
        </View>
        <View>
            {/* Input cho username với icon */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10, marginLeft:15,marginRight :15 }}>
                    <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your username"
                        style={{ flex: 1 }}
                        value={user}
                        onChangeText={setUser}
                    />
            </View>

                {/* Input cho password */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, borderWidth: 1, borderRadius: 20, padding: 10,  marginLeft:15,marginRight :15 }}>
                    <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />
                    <TextInput
                        placeholder="Enter your password"
                        secureTextEntry
                        style={{ flex: 1 }}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
        </View>
            <View>
                <TouchableOpacity
                    style={{ width: '94%',  marginLeft:15,marginRight :15, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                    onPress={handleLogin}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: '94%', marginLeft: 16, marginTop: 11, backgroundColor: 'rgb(34, 200, 247)', paddingVertical: 11, borderRadius: 20 }}
                    onPress={() => {
                        navigation.navigate("DangKy");
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        You don't have an account? Sign Up Here
                    </Text>
                </TouchableOpacity>
            </View>

    </View>
  )
}

export default DangNhap

const styles = StyleSheet.create({})