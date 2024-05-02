import React from 'react'

const Qrgenerator = () => {
  return (
   <>
   <div className='container'>
    <h1>QR CODE GENERATOR</h1>
    <div className='input-section'>
      <label htmlFor="datainput" className='input-label'>Data for QR Code</label>
      <input type="text" id='datainput' placeholder='Enter Data for QR Code' />
      <label htmlFor="sizeinput" className='input-label'>Image Size(Eg:100)</label>
      <input type="text" id='sizeinput' placeholder='Enter Image size' />
      </div>
      <div className='button'>
      <button className='generate-btn'>Generate QR Code</button>
      <button className='download-btn'>Download QR Code  </button>
      </div>
      
    
    <p>Designed by <a href="#">viji</a></p>
   </div>
   </>
  )
}

export default Qrgenerator
