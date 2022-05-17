import React from 'react'
import { useParams } from 'react-router-dom';
import articulos from '../data/articulos';

const Article = () => {

    let { name } = useParams();

    const articulo = articulos.find(art => art.name == name)
    if (!articulo) return <h1>El Artilculo no existe</h1>
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                {articulo.title}
            </h1>
            <div>
                <img src={articulo.thumbnail} alt="imagen" />
            </div>
            <div>
            {articulo.content.map((contenido,index)=>(
                <p key={index} className='mx-auto leading-relaxed text-base mb-4'>
                    {contenido}
                </p>
            ))}
            </div>
        </>
    )
}

export default Article