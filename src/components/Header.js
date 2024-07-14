import React from 'react'

const Header = () => {
  return (
    // This is to make header overlap
    <div className='z-20 absolute p-8 bg-gradient-to-b from-black w-full'>
        <div className='w-44 ml-20'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='logo'/>
        </div>
    </div>
  )
}

export default Header