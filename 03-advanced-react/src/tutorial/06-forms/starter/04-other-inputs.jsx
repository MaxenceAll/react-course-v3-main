import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {

  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  function handleShipping (e) {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  }

  function handleFramework (e) {
    console.log(e.target.value)
    setFramework(e.target.value)
  }



  

  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>


        {/* name */}
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type='checkbox' name="shipping" id='shipping' checked={shipping} onChange={(e)=>handleShipping(e)}></input>
        </div>


        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name={framework}
          value={framework}
          onChange={(e)=> handleFramework(e)}
          
          >
            
            {frameworks.map( (tool)=> {
              return <option key={tool}>{tool}</option>
            })}

          </select>
        </div>


        <button type='submit' className='btn btn-block'>
          submit
        </button>


      </form>
    </div>
  );
};
export default OtherInputs;
