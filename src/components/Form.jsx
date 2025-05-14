import React from 'react'

const Form = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <form action="">

                {/* author and title */}
                <div>
                    <label htmlFor="author">author</label>
                    <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />

                    <label htmlFor="title">title</label>
                    <input type="title" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>

                {/* body */}
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" name="body" value={formData.body} onChange={handleChange}>
                    </textarea>
                </div>

                {/* public */}
                <div>
                    <label htmlFor="public">public</label>
                    <input type="checkbox" id="public" name="public" checked={formData.public} onChange={handleChange}></input>
                </div>

                {/* submit */}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Form