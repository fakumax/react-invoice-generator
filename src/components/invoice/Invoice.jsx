import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument'

const Invoice = () => {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )
}

export default Invoice  