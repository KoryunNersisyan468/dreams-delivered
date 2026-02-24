import { useRef, } from "react";
import JoditEditor from "jodit-react";

export function Eddditor({ value,setValue }) {



    const editor = useRef(null);

    const config = {
        readonly: false,
        height: 'auto',
        
    };
    const handleUpdate = (event) => {
        setValue({...value,letter:event})
    };


    return (
        <div className="editor">
            <JoditEditor
                ref={editor}
                value={value?.letter}
                config={config}
                onBlur={handleUpdate}
            />

        </div>

    );
}