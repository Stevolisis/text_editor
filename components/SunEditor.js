import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export default function SunEditors({content,setContent}){
    return (
        <SunEditor 
        placeholder="Please type here..." 
        value={content} 
        onChange={setContent}
        setOptions={{
            buttonList:[[
                "bold",
                "underline",
                "italic",
                "strike",
                "align",
                "fontSize",
                "formatBlock",
                "table",
                "image",
                "video",
                "audio",
            ]]
        }}
        />
    );
};
