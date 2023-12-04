import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us</h1>

      <form>
        <input type='text' placeholder='name' className='border p-2 m-2 rounded' />
        <input type='text' placeholder='email' className='border p-2 m-2 rounded' />
        <button className='bg-green-500 text-white p-2 m-2 rounded shadow'>Submit</button>
      </form>
    </div>
  )
}

export default Contact