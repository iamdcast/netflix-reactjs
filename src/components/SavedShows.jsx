import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext';
import {db} from '../firebase'
import { useEffect, useState } from 'react';
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'


const SavedShows = () => {
const [movies, setMovies] = useState([])
const {user} = UserAuth()
const sliderLeft = () =>{
    let slider = document.getElementById('slider')
    slider.scrollLeft -= 500
};
const sliderRight = () => {
let slider = document.getElementById('slider')
    slider.scrollLeft += 500
}

useEffect(()=> {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc)=>{
        setMovies(doc.data()?.savedShows)
    })
},[user?.email]);

const movieRef = doc(db, 'users', `${user?.email}`)
const deleteShow = async (passedID) => {
    try{
        const result = movies.filter((item)=> item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
        
    } catch (error){
        console.log(error)
    }
}

  return (
    <>
        <h2 className="p-4 font-bold text-white text md:text-xl">My Shows</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft onClick={sliderLeft} className='absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block' size={40} />
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id)=> (
                    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
                            <p className="flex items-center justify-center h-full text-xs font-bold text-center white-space-normal md:text-sm">{item?.title}</p>
                            <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                        </div>
                        </div>
                ))}

            </div>
            <MdChevronRight onClick={sliderRight} className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block' size={40} />
        </div>
    </>
  )
}

export default SavedShows