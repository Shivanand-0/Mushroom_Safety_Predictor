import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    'cap-shape': null,
    'cap-surface': null,
    'gill-attachment': null,
    'gill-size': null,
    'veil-color': null,
    'spore-print-color': null,
    'population': null,
    'habitat': null
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responce, setResponce] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 1. Reset states & show loader
    setIsLoading(true);
    setError(null);
    setResponce(null);

    // 2. Extract data directly to avoid React state timing issues
    const data = event.target;
    const currentPayload = {
      'cap-shape': data.cap_shape.value,
      'cap-surface': data.cap_surface.value,
      'gill-attachment': data.gill_attachment.value,
      'gill-size': data.gill_size.value,
      'veil-color': data.veil_color.value,
      'spore-print-color': data.spore_print_color.value,
      'population': data.population.value,
      'habitat': data.habitat.value
    };

    setFormData(currentPayload); // Optional: keep state synced

    // 3. Make the API call using async/await
    try {
      // Switch this URL when deploying to Vercel/Render!
      // const res = await axios.post('http://127.0.0.1:8000/predict', currentPayload, {
      const res = await axios.post('https://mushroom-api-backend.onrender.com/predict', currentPayload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResponce(res.data.prediction[0]);
      console.log(res.data.prediction[0]);
    } catch (err) {
      setError("Failed to fetch data from server.");
      console.error("Error:", err);
    } finally {
      // 4. This now correctly waits for the API to finish before hiding the loader
      setIsLoading(false); 
    }
  }

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }} className='text-2xl font-bold mb-4 mt-4 underline ms-10'>
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
                <td ><label htmlFor='cap_shape' className='ms-10'>Cap Shape</label></td>
                <td>&nbsp;&nbsp; 
                  x: <input type="radio" name="cap_shape" value='5' className="radio mr-4" id='cap_shape' defaultChecked />
                  b: <input type="radio" name="cap_shape" value='0' className="radio mr-4" id='cap_shape'/>
                  s: <input type="radio" name="cap_shape" value='4' className="radio mr-4" id='cap_shape'/>
                  f: <input type="radio" name="cap_shape" value='2' className="radio mr-4" id='cap_shape'/>
                  k: <input type="radio" name="cap_shape" value='3' className="radio mr-4" id='cap_shape'/>
                  c: <input type="radio" name="cap_shape" value='1' className="radio mr-4" id='cap_shape'/>
                </td>
              </tr>
              <tr>
                <td><label htmlFor='cap_surface' className='ms-10'>Cap Surface </label></td>
                <td>&nbsp;&nbsp; 
                  s: <input type="radio" name="cap_surface" value='2' className="radio mr-4" id='cap_surface' defaultChecked />
                  y: <input type="radio" name="cap_surface" value='3' className="radio mr-4" id='cap_surface'/>
                  f: <input type="radio" name="cap_surface" value='0' className="radio mr-4" id='cap_surface'/>
                  g: <input type="radio" name="cap_surface" value='1' className="radio mr-4" id='cap_surface'/>
                </td>
              </tr>
              <tr>
                <td><label htmlFor='gill_attachment' className='ms-10'>Gill Attachment </label></td>
                <td>&nbsp;&nbsp; 
                  f: <input type="radio" name="gill_attachment" value='1' className="radio mr-4" id='gill_attachment' defaultChecked />
                  a: <input type="radio" name="gill_attachment" value='0' className="radio mr-4" id='gill_attachment'/>
                </td>
              </tr>
              <tr>
                <td><label htmlFor='gill_size' className='ms-10'>Gill Size </label></td>
                <td>&nbsp;&nbsp; 
                  n: <input type="radio" name="gill_size" value='1' className="radio mr-4" id='gill_size' defaultChecked />
                  b: <input type="radio" name="gill_size" value='0' className="radio mr-4" id='gill_size'/>
                </td>
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
                <td>&nbsp;&nbsp; 
                  k: <input type="radio" name="spore_print_color" value='2' className="radio mr-4" id='spore_print_color' defaultChecked />
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
                <td>&nbsp;&nbsp; 
                  s: <input type="radio" name="population" value='3' className="radio mr-4" id='population' defaultChecked/>
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
          
          <button 
            type="submit" 
            className="btn btn-primary border-2 ms-20 w-2xl bg-amber-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Check'}
          </button>
        </form>
      </div>

      {/* Modern Loader Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem' }}>
        
        {isLoading && (
          <div className="flex flex-col items-center">
            {/* Tailwind CSS animated spinner */}
            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-amber-500"></div>
            <p className="mt-2 text-lg font-semibold animate-pulse">Analyzing Mushroom...</p>
          </div>
        )}

        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>}
        
        {(!isLoading && (responce === 0 || responce === 1)) && (
          <div style={{ textAlign: 'center' }} className='mt-4 p-4 border-2 border-black rounded-lg w-64 shadow-lg'>
            <h2 className='text-2xl font-bold mb-2'>Mushroom Type</h2>
            <p className={`text-xl font-bold ${responce === 1 ? "text-red-600" : "text-green-600"}`}> 
              {responce === 1 ? "⚠️ Poisonous" : "✅ Edible"}
            </p>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul className='ms-10 mt-7 border-2 border-black rounded-lg w-200'>
          <h2 className='text-2xl font-bold mb-2 mt-4 ms-10'>Features Encoding:</h2>
          <ol className='text-lg font-semibold mb-4 ms-10 grid grid-cols-2 gap-4'>
            {/* Split the list into two columns to save vertical space if you want, or leave as is */}
            <div>
              <li>cap-shape: 
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'> 
                  <li>bell=b, conical=c, convex=x</li>
                  <li>flat=f, knobbed=k, sunken=s</li>
                </ol> 
              </li>
              <li className="mt-2">cap-surface: 
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>fibrous=f, grooves=g</li>
                  <li>scaly=y, smoother=s</li>
                </ol> 
              </li>
              <li className="mt-2">gill-attachment:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>attached=a, free=f</li>
                </ol> 
              </li>
              <li className="mt-2">gill-size:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>broad=b, narrow=n</li>
                </ol> 
              </li>
            </div>
            <div>
              <li>veil-color:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>brown=n, orange=o, white=w, yellow=y</li>
                </ol> 
              </li>
              <li className="mt-2">spore-print-color:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>black=k, brown=n, buff=b, chocolate=h</li>
                  <li>green=r, orange=o, purple=u, white=w, yellow=y</li>
                </ol> 
              </li>
              <li className="mt-2">population:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>abundant=a, clustered=c, numerous=n</li>
                  <li>scattered=s, several=v, solitary=y</li>
                </ol> 
              </li>
              <li className="mt-2">habitat:
                <ol style={{ listStyleType: 'circle' }} className='ms-10 font-normal'>
                  <li>grasses=g, leaves=l, meadows=m, paths=p</li>
                  <li>urban=u, waste=w, woods=d</li>
                </ol> 
              </li>
            </div>
          </ol>
        </ul>
      </div>
    </>
  )
}

export default App
