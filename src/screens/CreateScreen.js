import React, {useState, useRef} from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {useDispatch} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import {addPost} from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const imgRef = useRef()

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        setText('')
        navigation.navigate('Main')
    }

    const photoPickHandler = uri => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create New Post</Text>
                    <TextInput 
                        style={styles.textarea} 
                        placeholder='Input Text of post' 
                        value={text} 
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler}/>
                    <Button 
                        title='Create post'
                        color={THEME.MAIN_COLOR} 
                        onPress={saveHandler}
                        disabled={!text && !imgRef.current}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Create Post',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item 
                title='Togle Drawer' 
                iconName='ios-menu' 
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

styles = StyleSheet.create({
   
    wrapper: {
        padding: 10
    },

    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },

    textarea: {
        padding: 10,
        marginBottom: 10
    },

    image: {
        width: '100%',
        height: 200,
        marginBottom: 10
    },
})