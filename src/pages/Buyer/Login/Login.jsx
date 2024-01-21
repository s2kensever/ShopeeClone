import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const handleLogin = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 p-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-10 bg-white rounded shadow-sm' onSubmit={handleLogin}>
              <div className='text-2xl'>Login</div>
              <div className='mt-8'>
                <input
                  className='p-3 w-full border outline-none focus:border-gray-500 rounded-sm'
                  placeholder='Email'
                  {...register('email', {
                    required: { value: true, message: 'Email is required parameter' },
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Not use type email' }
                  })}
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.5rem] text-sm'>{errors?.email?.message}</div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='p-3 w-full border outline-none focus:border-gray-500 rounded-sm'
                  placeholder='Password'
                  {...register('password', {
                    minLength: {
                      value: 6,
                      message: 'Length from 6-160 characters'
                    },
                    maxLength: {
                      value: 160,
                      message: 'Length from 6-160 characters'
                    }
                  })}
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.5rem] text-sm'>{errors?.password?.message}</div>

              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 bg-orange text-white'>Register</button>
              </div>
              <div className='mt-8 text-center'>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-300'>You don t have account?</span>
                  <Link className='text-red-400' to='/buyer/register'>
                    Register
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
