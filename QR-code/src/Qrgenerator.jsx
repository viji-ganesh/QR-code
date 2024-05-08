import React, { useState } from 'react'
import './index.css'

const Qrgenerator = () => {
  const [img, setImg] = useState('');
  const [Loading, setLoading] = useState(false);
  const[qrdata, setqrData] = useState('');
  const [size, setSize] = useState('');

  async function generate(){
    setLoading(true);
    try{
     const url =`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURI(qrdata)}`
      setImg(url);

    }
    catch(error){
            console.error('Error generating a QR-code',error);

    }finally{
      setLoading(false);
    }
  }
  function download(){
    fetch(img).then((response)=>response.blob())
    .then ((blob)=>{
      const link = document.createElement('a')
      link.href= URL.createObjectURL(blob)
      link.download = "Qrcode.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    }).catch((error)=>{console.error('Error in downloading the Qr code',error)})

  }
  return (
   <>
   <div className='container'>
    <h1>QR CODE GENERATOR</h1>
    {Loading && <p>please wait..</p>}
    {img && <img src={img} alt="QR-code" className='qrimg' />}
    <div className='input-section'>
      <label htmlFor="datainput" className='input-label'>Data for QR Code</label>
      <input type="text" id='datainput' placeholder='Enter Data for QR Code' value={qrdata} onChange={(e)=>setqrData(e.target.value)} />
      <label htmlFor="sizeinput" className='input-label'>Image Size(Eg:100)</label>
      <input type="text" id='sizeinput' placeholder='Enter Image size' value={size} onChange={(d)=>setSize(d.target.value)} />
      </div>
      <div className='button'>
      <button className='generate-btn'onClick={()=>generate()}disabled={Loading}>Generate QR Code</button>
      <button className='download-btn' onClick={()=>download()}>Download QR Code  </button>
      </div>
      
    
    <p>Designed by <a href="#">viji</a></p>
   </div>
   </>
  )
}

export default Qrgenerator
