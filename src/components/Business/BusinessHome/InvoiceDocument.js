import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        //flexDirection: 'row',
        backgroundColor: "#ffffff",
        padding: 10
    },
    section: {
        margin: 10,
        padding: 10,
        //flexGrow: 0
    },
    text:{
        fontsize: 15
    },
    text1:{
        fontSize: 10
    }
  });
  
export default function InvoiceDocument(){
    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Invoice to: User Email</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Invoice from: Business name</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Business Account Details</Text>
                    <Text style = {styles.text1}>Account Title</Text>
                    <Text style = {styles.text1}>Account Number</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Reservation Date: Date</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Expiry Date: Date</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Total: Amount</Text>
                </View>
                <View style={styles.section}>
                    <Text style = {styles.text}>Tax: Amount</Text>
                </View>
            </Page>
      </Document>
    )
}