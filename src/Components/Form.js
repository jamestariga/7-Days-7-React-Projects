const Form = () => {
  return (
    <>
      <div className='flex justify-center items-center p-10 w-full'>
        <div
          className='flex flex-col justify-center items-center min-w-[50%] mx-6 p-6 py-10 rounded-xl bg-neutral-200'
          id='main'
        >
          <div className='text-2xl font-bold pb-10 ' id='sign'>
            <h1>Sign Up</h1>
          </div>
          <form action='' className='flex flex-col min-w-[70%] gap-2 mb-2'>
            <label className='text-xl font-bold ' id='text'>
              Name
            </label>
            <input className='p-1 w-full' type='text' name='name' required />
            <label className='text-xl font-bold' id='text'>
              Email
            </label>
            <input className='p-1 w-full' type='email' name='email' required />
            <label className='text-xl font-bold' id='text'>
              Password
            </label>
            <input
              className='p-1 w-full'
              type='password'
              name='password'
              required
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
