import './App.css'

function App() {

  return (
    <div className='App w-screen h-screen'>
      <div className='flex h-screen'>
        <div className='w-100 sm:w-70 lg:w-60 flex-auto flex flex-col items-center justify-center max-w-4xl'>
          <div className='h-3/6 w-4/5 p-12 sm:min-h-[300px] max-h-96 bg-clip-padding bg-white bg-opacity-10 backdrop-filter-lg drop-shadow-lg backdrop-blur-lg rounded-3xl'>
            <h1 className='name text-left text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'> Erik </h1>
            <h1 className='name text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800'> Tyryshkin </h1>
            <h3 className='description text-1xl sm:text-2xl text-grsay-300 text-left mt-6'> Software Engineer</h3>
          </div>
        </div>
        <div className='sm:w-auto sm:flex-auto'>
        </div>
      </div>
    </div>
  )
}

export default App
