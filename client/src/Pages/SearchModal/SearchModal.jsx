import React from 'react'

const SearchModal = () => {
  return (
    <div>
    <div className="cursor-pointer" onClick={()=>window.search_modal.showModal()}>Search</div>
    <dialog id='search_modal' className='modal'>
      <div className='modal-box'>
      <form>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" formMethod='dialog'>✕</button>
          <h1 className="font-bold">Search</h1>
          <div className='form-control mt-4'>
                <label className='label'>
                    <span className='label-text'>Search For some user</span>
                </label>
                <input type="text" className='input input-bordered w-full input-accent' placeholder='Description'/>
            </div>
      </form>
      <div className='mt-10'>
        Result
      </div>
      </div>
    </dialog>
    </div>
  )
}

export default SearchModal