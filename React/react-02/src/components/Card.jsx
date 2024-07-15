// import React  from 'react'

function Card({username, btnText="Click Here!", imgURL}) {
    console.log(username)
    return (
    <>
    <div className="w-[300px] rounded-md border mb-4" >
      <img
        src= {imgURL}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{username}</h1>
        <p className="mt-3 text-sm text-600">
          This is just a demonstration of how to use Props in ReactJs.
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[12.5px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {btnText}
        </button>
      </div>
    </div>
    </>
    )
}

export default Card