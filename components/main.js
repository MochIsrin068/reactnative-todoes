import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Note from './listTile'

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteData: [],
            noteText: ''
        }

        this.deleteFunc = this.deleteFunc.bind(this)
    }

    deleteFunc(key) {
        this.state.noteData.splice(key, 1);
        this.setState({
            noteData: this.state.noteData
        })
    }

    addNote() {
        if (this.state.noteData) {
            var date = new Date();
            this.state.noteData.push({
                'date': date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                'note': this.state.noteText
            })

            this.setState({
                noteData: this.state.noteData,
            })


            // this.setState({
            //     noteText: ''
            // })
        }
    }

    render() {
        let notes = this.state.noteData.map((val, key) => {
            return <Note key={key} keyvalue={key} val={val} deleteFunc={() => this.deleteFunc(key)} />
        });

        return (
            <>
                <StatusBar backgroundColor="#E91E63"></StatusBar>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>- NOTE -</Text>
                    </View>

                    {/* BODY */}
                    <ScrollView style={styles.scrollContainer}>
                        {notes}
                    </ScrollView>

                    {/* FOOTER */}
                    <View style={styles.footer}>
                        <TextInput
                            onChangeText={(noteText) => this.setState({
                                noteText
                            })}
                            style={styles.textInput} placeholder="Input To do here" placeholderTextColor="#fff" />
                    </View>

                    {/* Button Action */}
                    <TouchableOpacity
                        onPress={this.addNote.bind(this)}
                        style={styles.addButton}>
                        <Text style={styles.addButtonText}> + </Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}


// STYLING DATA
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: "#E91E63",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#ddd"
    },

    textHeader: {
        color: 'white',
        fontSize: 18,
        padding: 30
    },

    scrollContainer: {
        flex: 1,
        marginBottom: 100,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },

    textInput: {
        alignSelf: "stretch",
        color: '#fff',
        padding: 30,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed"
    },

    addButton: {
        position: "absolute",
        zIndex: 11,
        right: 10,
        bottom: 90,
        backgroundColor: "#E91E63",
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    addButtonText: {
        color: "#fff",
        fontSize: 24
    },


});
