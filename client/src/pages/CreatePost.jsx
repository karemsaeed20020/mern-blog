import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div className="p-3 mx-auto min-h-screen max-w-3xl">
      <h1 className="text-center font-semibold my-7 text-3xl">CreatePost</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <TextInput type="text" placeholder="Title" required id="title" className="flex-1" />
            <Select>
                <option value='uncategorized'>select a category</option>
                <option value="javascript">JavaScript</option>
                <option value="reactjs">React.js</option>
                <option value="nextjs">Next.js</option>
            </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 p-3 border-dotted">
            <FileInput type='file' accept="image/*" />
            <Button type="button" outline gradientDuoTone='purpleToPink' size='sm'>Upload image</Button>

        </div>
        <ReactQuill theme="snow" placeholder="Write Something..." className="h-72 mb-12" required />
        <Button gradientDuoTone='purpleToPink' type="submit">Publish</Button>
      </form>
    </div>
  )
}

export default CreatePost
