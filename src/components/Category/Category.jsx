import React from 'react'
import './Category.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Btn from '../Btn/Btn'
const Category = () => {
  return (
     <>
     <section className="category">
        <div className="container">
            <SectionTitle position='center'>NEW ARRIVALS</SectionTitle>
            
     <div className="category__wrapper">
        <Card image={'/Card-1.png'} name='T-SHIRT WITH TAPE DETAILS' rate='4.5' price='120' stars="⭐⭐⭐⭐"/>
        <Card image={'/Card-2.png'} name='SKINNY FIT JEANS ' rate='3.5' price='240' stars="⭐⭐⭐"/>
        <Card image={'/Card-3.png'} name='CHECKERED SHIRT ' rate='4.5' price='180' stars="⭐⭐⭐⭐"/>
        <Card image={'/Card-4.png'} name='SLEEVE STRIPED T-SHIRT ' rate='5' price='130' stars="⭐⭐⭐⭐⭐"/>
     </div>
     
     <Btn>View All</Btn>
     <hr style={{margin: '60px 0'}} />
     
     
            <SectionTitle position='center'>top selling</SectionTitle>
            
     <div className="category__wrapper">
        <Card image={'/Card-5.png'} name='VERTICAL STRIPED SHIRT ' rate='5' price='120' stars="⭐⭐⭐⭐⭐"/>
        <Card image={'/Card-6.png'} name=' COURAGE GRAPHIC T-SHIRT ' rate='4.0' price='240' stars="⭐⭐⭐⭐"/>
        <Card image={'/Card-7.png'} name='LOOSE FIT BERMUDA SHORTS  ' rate='3.0' price='180' stars="⭐⭐⭐"/>
        <Card image={'/Card-8.png'} name='FADED SKINNY JEANS  ' rate='4.5' price='130' stars="⭐⭐⭐⭐"/>
     </div>
     
     <Btn>View All</Btn>
         
        </div>
     </section>
     
     </>
  )
}

export default Category