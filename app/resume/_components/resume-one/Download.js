"use client"

const Download = ({handlePrint}) => {
  return (
    <div className='flex justify-end mt-5'>
        <button
            className="text-sm font-normal text-white"
            onClick={handlePrint}
        >
            Download
        </button>
    </div>
  )
}

export default Download