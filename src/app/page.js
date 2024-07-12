import AboutUs from '@/Components/About/About';
import Banner from '@/Components/Banner/Banner';
import Services from '@/Components/Services/Services';
import React from 'react'

const page = () => {
  const colorScheme = {
    primary: "#a67c52", //yellow ochre
    background: "#fff", //white
    secondary: "#998675;", //light-brown
    ternary: "#171411", //black_dull
    primary_text: "#fff", // white text
    secondary_text: "#2C2C2C", //light black text
  };
  
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default page