import React from 'react'
import S1_objDeclaration from './Components/S1_objDeclaration'
import S2_ReusableComponents from './Components/S2_ReusableComponents'
import S3_Props from './Components/S3_Props'
const App = () => {
  return (
    <>
    {/* <div>
     <S1_objDeclaration/>
    </div> */}

    {/* <div>
      <S2_ReusableComponents/>
      <S2_ReusableComponents/>
    </div> */}

    <div>
      <S3_Props title="ApllePhone" brand="Aplle" price={20000}/>
      <S3_Props title="SonataWatch" brand="Sonata" price={3000}/>
    </div>
    </>
  )
}

export default App
