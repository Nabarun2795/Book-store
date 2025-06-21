import React from 'react'
import Banner from './Banner';
import TopSeller from './topseller'
import News from './News';
import Recommends from './Recommends';

const homes = () => {
  return (
    <>
    <div><Banner/></div>
    <div><TopSeller/></div>
    <div><Recommends/></div>
    <div><News/></div>
    </>
  )
}

export default homes