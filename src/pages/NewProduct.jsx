import React, { useState } from 'react';

export default function NewProduct() {
  const [ product, setProduct ] = useState({});
  const [ file, setFile ] = useState();

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file') {
      setFile(files && files[0])
    }
    setProduct((product) => ({...product, [name]:value}));
  };
  const handleSubmit = (e) => {};

  return <section>
    <form onSubmit={handleSubmit}>
      <input 
        type="file" 
        accept='image/*' 
        name='file' 
        required 
        onChange={handleChange}/>
        <input 
          type="text"
          name='title' 
          value={product.title ?? ''} 
          placeholder='prd name'
          required
          onChange={handleChange}
          />
    </form>
  </section>;
}