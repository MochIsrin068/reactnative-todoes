import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


export default class ListTile extends React.Component {
    render() {
        return (
            <View key={this.props.keyvalue} style={styles.note}>
                <Text style={styles.notetext}>{this.props.val.date}</Text>
                <Text style={styles.notetext}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.deleteFunc} style={styles.noteDelete}>
                    <Text style={styles.noteDeletetext}>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    noteDelete: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2980b9",
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    note: {
        position: "relative",
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: "#ededed",

    },

    notetext: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: "#e91e63"
    },

    noteDeletetext: {
        color: "#fff",
    }
})