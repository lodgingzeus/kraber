import { useState, useRef } from 'react'

const CreatePostModal = () => {

    const descriptionRef = useRef()
    const imageRef = useRef()

    const [ open, setOpen ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(descriptionRef.current.value, imageRef.current.value)
        // window.my_modal_1.close()
    }

    const closeDialog = () => {
        setOpen(false)
    }

  return (
    <div>
    <div className="cursor-pointer" onClick={()=>window.create_post_modal.showModal()}>Create</div>
    <dialog id="create_post_modal" className="modal">
        <form className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" formMethod='dialog'>✕</button>
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
            <button className="btn btn-outline btn-accent modal-open" type='submit' formMethod="post" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </dialog>
    </div>
  )
}

export default CreatePostModal