import { useState, useRef } from 'react'
import FIleBase from 'react-file'

const CreatePostModal = () => {

    const descriptionRef = useRef()
    const imageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(descriptionRef.current.value, imageRef.current.value)
        window.create_post_modal.close()
    }

  return (
    <div>
    <button className="cursor-pointer" onClick={()=>window.create_post_modal.showModal()}>Create</button>
    <dialog id="create_post_modal" className={`modal`}>
        <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" formMethod='dialog' onClick={()=>window.create_post_modal.close()}>✕</button>
            <h3 className="font-bold text-lg">Create new post</h3>
            <div className='form-control mt-4'>
                <label className='label'>
                    <span className='label-text'>Post Description</span>
                </label>
                <input type="text" ref={descriptionRef} className='input input-bordered w-full input-accent' placeholder='Description'/>
            </div>
            <div className='form-control mt-4'>
                <label className='label'>
                    <span className='label-text'>Upload an image</span>
                </label>
                <input type="file" ref={imageRef} className='file-input file-input-bordered file-input-accent w-full' placeholder='Description'/>
            </div>
            <div className="modal-action">
            <button className="btn btn-outline btn-accent" type='submit'>Submit</button>
            </div>
        </form>
    </dialog>
    </div>
  )
}

export default CreatePostModal