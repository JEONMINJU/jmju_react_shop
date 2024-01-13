import React, { useState } from 'react';
import Button from '../components/ui/Button';

export default function NewProduct() {
  const [ product, setProduct ] = useState({});
  const [ file, setFile ] = useState();

  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file') {
      setFile(files && files[0]);
      return;
    }
    // 이전 값 받아와서 새로운 값 생성
    setProduct((product) => ({...product, [name]:value}));
  };
  // 제품 이미지를 등록하면
  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 Cloudinary에 업로드하고 URL을 획득
    // 파이어베이스에 새로운 제품을 추가함
  };

  return <section>
    {file && <img src={URL.createObjectURL(file)} alt='local file' />}
    <form onSubmit={handleSubmit}>
      {/* 파일 */}
      <input 
        type="file" 
        accept='image/*' 
        name='file' 
        required 
        onChange={handleChange}
      />
      {/* 제품명 */}
      <input 
        type="text"
        name='title' 
        value={product.title ?? ''} 
        placeholder='제품명'
        required
        onChange={handleChange}
      />
      {/* 가격 */}
      <input 
        type="number"
        name='price' 
        value={product.price ?? ''} 
        placeholder='가격'
        required
        onChange={handleChange}
      />
      {/* 카테고리 */}
      <input 
        type="text"
        name='category' 
        value={product.category ?? ''} 
        placeholder='카테고리'
        required
        onChange={handleChange}
      />
      {/* 제품설명 */}
      <input 
        type="text"
        name='description' 
        value={product.description ?? ''} 
        placeholder='제품 설명'
        required
        onChange={handleChange}
      />
      {/* 옵션들 */}
      <input 
        type="text"
        name='options' 
        value={product.options ?? ''} 
        placeholder='옵션들(콤마(,)로 구분'
        required
        onChange={handleChange}
      />
      <Button text={'제품 등록하기'} />
    </form>
  </section>;
}