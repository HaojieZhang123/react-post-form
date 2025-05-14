import React from 'react'

const Form = () => {
    return (
        <>
            <form action="">

                <div>
                    <label htmlFor="author">author</label>
                    <input type="text" id="author" name="author" />

                    <label htmlFor="title">title</label>
                    <input type="title" id="title" name="title" />
                </div>

                <div>
                    <label htmlFor="Body">Body</label>
                    <textarea id="Body" name="Body"></textarea>
                </div>

                <div>
                    <label htmlFor="public">public</label>
                    <input type="checkbox" id="public" name="public"></input>
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form