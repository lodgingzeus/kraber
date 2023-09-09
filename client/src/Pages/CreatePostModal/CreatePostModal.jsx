import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const CreatePostModal = () => {

    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)

    const [ postData, setPostData ] = useState({
        description: '',
        imageFile: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", postData.imageFile)
        formData.append("upload_preset", "cvesltdr")
        formData.append("cloud_name","dckmqagkz")

        
        const cloud_response =  await fetch('https://api.cloudinary.com/v1_1/dckmqagkz/image/upload', {
            method: 'POST',
            body: formData
        })
        const cloud_data = await cloud_response.json()

        if(cloud_data.secure_url){
            
            const response = await fetch('http://localhost:8181/post/create', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user._id,
                    description: postData.description,
                    image: cloud_data.secure_url,
                    username: user.username
                })
            })
            const data = await response.json()
            console.log(data)
        }
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
                <input type="text" onChange={(e) => setPostData({ ...postData, description: e.target.value})} className='input input-bordered w-full input-accent' placeholder='Description'/>
            </div>
            <div className='form-control mt-4'>
                <label className='label'>
                    <span className='label-text'>Upload an image</span>
                </label>
                {/* <FIleBase64
                
                className='file-input file-input-bordered file-input-accent w-full'
                onDone = { ({base64}) => setPostData({ ...postData, imageFile: base64})}
                /> */}
                <input type="file" onChange={(e) => setPostData({ ...postData, imageFile: e.target.files[0]})} className='file-input file-input-bordered file-input-accent w-full' placeholder='Description'/>
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