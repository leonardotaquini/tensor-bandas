import { useState } from "react";
import { bandas } from "../helpers/bandas";
import { tensorCalculator } from "../helpers/tensorCalculator";
const Form = () => {

    
    const [calificacion, setCalificacion] = useState<number[]>([]); 
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(calificacion);
        tensorCalculator(calificacion);
    }

    const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCalificacion([...calificacion, parseInt(e.target.value)])
        
    }

  return (
    <>
      <form onSubmit={ handleSubmit } className="flex flex-col w-1/4 shadow-2xl">
        {
            bandas.map( ( banda, i ) => {

                return(
                    <div key={i} className="mb-4 flex flex-row items-center justify-center border border-gray-300">
                        <label>{banda}</label>
                        <select name={banda} onChange={ handleChangeOption } className="my-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mx-2">
                            <option value="1" className="">1</option>
                            <option value="2" className="">2</option>
                            <option value="3" className="">3</option>
                            <option value="4" className="">4</option>
                            <option value="5" className="">5</option>
                            <option value="6" className="">6</option>
                            <option value="7" className="">7</option>
                            <option value="8" className="">8</option>
                            <option value="9" className="">9</option>
                            <option value="10" className="">10</option>
                        </select>
                    </div>
                )
            })
        }
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
      </form>
    </>
  )
}

export default Form
