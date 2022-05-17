import React from 'react'
import { Link } from 'react-router-dom'
import articulos from '../data/articulos'

const ArticlesList = () => {
    return (
        <>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>Articulos</h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap m-4">
                    {articulos.map((art, index) => (
                        <div key={index} className="flex flex-col p-4 md:w-1/2" >
                            <div className='h-full border-2 border-gray-200 border-opacity-50 rounded-lg overflow-hidden'>
                                <Link to={`/article/${art.name}`}>
                                    <img src={art.thumbnail} alt="" />
                                </Link>
                            </div>
                            <div className='p-6'>
                                <Link to={`/article/${art.name}`}>
                                    <p className=' text-lg font-medium text-gray-900 mb-3'>{art.title}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ArticlesList