import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [formData,setFormData]=useState({
      'cap-shape':null,
      'cap-surface':null,
      'gill-attachment':null,
      'gill-size':null,
      'veil-color':null,
      'spore-print-color':null,
      'population':null,
      'habitat':null
    });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responce,setResponce]=useState(null);
  const setData=(data)=>{
    setFormData({
      'cap-shape':data.cap_shape.value,
      'cap-surface':data.cap_surface.value,
      'gill-attachment':data.gill_attachment.value,
      'gill-size':data.gill_size.value,
      'veil-color':data.veil_color.value,
      'spore-print-color':data.spore_print_color.value,
      'population':data.population.value,
      'habitat':data.habitat.value
    });
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setIsLoading(true);
    setData(event.target);
    try{
      axios.post('http://127.0.0.1:8000/predict', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response=>{
        setResponce(response.data.prediction[0]);
        console.log(response.data.prediction[0])
      })
      .catch(err=>{
        setError("Failed to fetch data from server.");
        console.log(err)});
    } catch (error) {
      setError("An error occurred while fetching data.");
    console.error("Error:", error);

    } finally {
      setIsLoading(false);
    }

  }

  return (
    <>
    <h1 style={{ display: 'flex', justifyContent: 'center' }} className='text-2xl font-bold mb-4  mt-4 underline ms-10'>
      Check Mushrooms Type (Edible/Poisonous)
    </h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <form onSubmit={handleSubmit} >
       <table className="table table-zebra w-full mb-4 ms-10">
        <thead >
          <tr>
            <th>Feature</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className='text-lg font-semibold '>
          <tr>
            
            <td ><label  htmlFor='cap_shape' className='ms-10'>Cap Shape</label></td>
            <td>&nbsp;&nbsp; x: <input type="radio" name="cap_shape" value='5' className="radio mr-4" id='cap_shape' defaultChecked />
            b: <input type="radio" name="cap_shape" value='0' className="radio mr-4" id='cap_shape'/>
            s: <input type="radio" name="cap_shape" value='4' className="radio mr-4" id='cap_shape'/>
            f: <input type="radio" name="cap_shape" value='2' className="radio mr-4" id='cap_shape'/>
            k: <input type="radio" name="cap_shape" value='3' className="radio mr-4" id='cap_shape'/>
            c: <input type="radio" name="cap_shape" value='1' className="radio mr-4" id='cap_shape'/></td>
          </tr>
          <tr>
            <td><label htmlFor='cap_surface' className='ms-10'>Cap Surface </label></td>
            <td>&nbsp;&nbsp; s: <input type="radio" name="cap_surface" value='2' className="radio mr-4" id='cap_surface' defaultChecked />
                y: <input type="radio" name="cap_surface" value='3' className="radio mr-4" id='cap_surface'/>
                f: <input type="radio" name="cap_surface" value='0' className="radio mr-4" id='cap_surface'/>
                g: <input type="radio" name="cap_surface" value='1' className="radio mr-4" id='cap_surface'/></td>
          </tr>
          <tr>
            <td><label htmlFor='gill_attachment' className='ms-10'>Gill Attachment </label></td>
            <td>&nbsp;&nbsp; f: <input type="radio" name="gill_attachment" value='1' className="radio mr-4" id='gill_attachment' defaultChecked />
                a: <input type="radio" name="gill_attachment" value='0' className="radio mr-4" id='gill_attachment'/></td>
          </tr>
          <tr>
            <td><label htmlFor='gill_size' className='ms-10'>Gill Size </label></td>
            <td>&nbsp;&nbsp; n: <input type="radio" name="gill_size" value='1' className="radio mr-4" id='gill_size' defaultChecked />
                b: <input type="radio" name="gill_size" value='0' className="radio mr-4" id='gill_size'/></td>
          </tr>
          <tr>
            <td><label htmlFor='veil_color' className='ms-10'>Veil Color </label></td>
            <td>&nbsp;&nbsp; 
              w: <input type="radio" name="veil_color" value='2' className="radio mr-4" id='veil_color' defaultChecked />
              n: <input type="radio" name="veil_color" value='0' className="radio mr-4" id='veil_color'/>
              o: <input type="radio" name="veil_color" value='1' className="radio mr-4" id='veil_color'/>
              y: <input type="radio" name="veil_color" value='3' className="radio mr-4" id='veil_color'/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor='spore_print_color' className='ms-10'>Spore Print Color </label></td>
            <td>&nbsp;&nbsp; k: <input type="radio" name="spore_print_color" value='2' className="radio mr-4" id='spore_print_color' defaultChecked />
                n: <input type="radio" name="spore_print_color" value='3' className="radio mr-4" id='spore_print_color'/>
                u: <input type="radio" name="spore_print_color" value='6' className="radio mr-4" id='spore_print_color'/>
                h: <input type="radio" name="spore_print_color" value='1' className="radio mr-4" id='spore_print_color'/>
                w: <input type="radio" name="spore_print_color" value='7' className="radio mr-4" id='spore_print_color'/>
                r: <input type="radio" name="spore_print_color" value='5' className="radio mr-4" id='spore_print_color'/>
                o: <input type="radio" name="spore_print_color" value='4' className="radio mr-4" id='spore_print_color'/>
                y: <input type="radio" name="spore_print_color" value='8' className="radio mr-4" id='spore_print_color'/>
                b: <input type="radio" name="spore_print_color" value='0' className="radio mr-4" id='spore_print_color'/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor='population' className='ms-10'>Population </label></td>
            <td>&nbsp;&nbsp; s: <input type="radio" name="population" value='3' className="radio mr-4" id='population' defaultChecked/>
              n: <input type="radio" name="population" value='2' className="radio mr-4" id='population'/>
              a: <input type="radio" name="population" value='0' className="radio mr-4" id='population'/>
              v: <input type="radio" name="population" value='4' className="radio mr-4" id='population'/>
              y: <input type="radio" name="population" value='5' className="radio mr-4" id='population'/>
              c: <input type="radio" name="population" value='1' className="radio mr-4" id='population'/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor='habitat' className='ms-10'>Habitat </label></td>
            <td>&nbsp;&nbsp; 
              u: <input type="radio" name="habitat" value='5' className="radio mr-4" id='habitat' defaultChecked/>
              g: <input type="radio" name="habitat" value='1' className="radio mr-4" id='habitat'/>
              m: <input type="radio" name="habitat" value='3' className="radio mr-4" id='habitat'/>
              d: <input type="radio" name="habitat" value='0' className="radio mr-4" id='habitat'/>
              p: <input type="radio" name="habitat" value='4' className="radio mr-4" id='habitat'/>
              w: <input type="radio" name="habitat" value='6' className="radio mr-4" id='habitat'/>
              l: <input type="radio" name="habitat" value='2' className="radio mr-4" id='habitat'/>
            </td>
          </tr>
        </tbody>
       </table>
      <button className="btn btn-primary border-2 ms-20 w-2xl bg-amber-300">Check</button>
    </form>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    {isLoading && <p>Loading...</p>}
    {error && <p style={{ color: 'red',display: 'flex', justifyContent: 'center' }}>Error: {error}</p>}
    {(responce===0||responce===1) && <div style={{textAlign:'center'}} className='mt-4 ms-10 p-4 border-2 border-black rounded-lg w-200'>
      <h2 className='text-2xl font-bold mb-2'>Mushrooms Type</h2>
      <p className='text-lg font >-semibold'> {responce===1?"Poisonous":"Edible"}</p>
    </div>}
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul className='ms-10 mt-7 border-2 border-black rounded-lg w-200'>
        <h2 className='text-2xl font-bold mb-2 mt-4 ms-10'>Features Encoding:</h2>
        <ol className='text-lg font-semibold mb-4 ms-10'>
          <li>cap-shape: 
            <ol style={{ listStyleType: 'circle' }} className='ms-10'> 
              <li>bell=b </li>
              <li>conical=c </li>
              <li>convex=x </li>
              <li>flat=f </li>
              <li>knobbed=k </li>
              <li>sunken=s </li>
            </ol> 
          </li>
          <li>cap-surface: 
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>fibrous=f </li>
              <li>grooves=g </li>
              <li>scaly=y </li>
              <li>smoother=s </li>
            </ol> 
          </li>
          <li>gill-attachment:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>attached=a </li>
              <li>free=f </li>
            </ol> 
          </li>
          <li>gill-size:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>broad=b </li>
              <li>narrow=n </li>
            </ol> 
          </li>
          <li>veil-color:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>brown=n </li>
              <li>orange=o </li>
              <li>white=w </li>
              <li>yellow=y </li>
            </ol> 
          </li>
          <li>spore-print-color:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>black=k </li>
              <li>brown=n </li>
              <li>buff=b </li>
              <li>chocolate=h </li>
              <li>green=r </li>
              <li>orange=o </li>
              <li>purple=u </li>
              <li>white=w </li>
              <li>yellow=y </li>
            </ol> 
          </li>
          <li>population:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>abundant=a </li>
              <li>clustered=c </li>
              <li>numerous=n </li>
              <li>scattered=s </li>
              <li>several=v </li>
              <li>solitary=y </li>
            </ol> 
          </li>
          <li>habitat:
            <ol style={{ listStyleType: 'circle' }} className='ms-10'>
              <li>grasses=g </li>
              <li>leaves=l </li>
              <li>meadows=m </li>
              <li>paths=p </li>
              <li>urban=u </li>
              <li>waste=w </li>
              <li>woods=d </li>
            </ol> 
          </li>   
        </ol>
      </ul>
    </div>
    </>
  )
}

export default App
