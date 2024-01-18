import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 p-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-10 bg-white rounded shadow-sm'>
              <div className='text-2xl'>Login</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='p-3 w-full border outline-none focus:border-gray-500 rounded-sm'
                  placeholder='Email'
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.5rem] text-sm'>Email khong hop le</div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 w-full border outline-none focus:border-gray-500 rounded-sm'
                  placeholder='Password'
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.5rem] text-sm'>Email khong hop le</div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 w-full border outline-none focus:border-gray-500 rounded-sm'
                  placeholder='Confirm Password'
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.5rem] text-sm'>Email khong hop le</div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 bg-orange text-white'>Register</button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-300'>You have account?</span>
                  <Link className='text-red-400' to='/buyer/login'>
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
