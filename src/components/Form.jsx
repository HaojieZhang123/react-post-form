import React from 'react'

const Form = ({ formData, handleChange, handleSubmit }) => {
    return (
        <>
            <div className="form-container">

                <div className='form-header'>
                    <h2 className='white-text'>Create a new repository</h2>
                    <p>
                        A repository contains all project files, including the revision history. Already have a project repository elsewhere?
                        <span className='link'>
                            Import a repository.
                        </span>
                    </p>
                </div>
                <hr />
                <form action="" className='d-flex flex-wrap'>

                    <p><em className='white-text'>Required fields are marked with an asterisk (*).</em></p>

                    {/* author and title */}
                    <div className='d-flex col-100 gap'>
                        <div className="col-50 form-half-row">
                            <label htmlFor="author"><b className='white-text'>Author*</b></label>
                            <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} />
                        </div>

                        <div className="col-50 form-half-row">
                            <label htmlFor="title"><b className='white-text'>Title*</b></label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                        </div>
                    </div>

                    <p className='white-text'>Great repository names are short and memorable. Need inspiration? How about <b className='green-text'>urban-barnacles</b> ?</p>

                    <hr />

                    {/* body */}
                    <div>
                        <label htmlFor="body"><b className='white-text'>Body</b> (optional)</label>
                        <textarea id="body" name="body" value={formData.body} onChange={handleChange}>
                        </textarea>
                    </div>

                    <hr />

                    {/* public */}
                    <div className='checkbox-area'>
                        <input type="checkbox" id="public" name="public" checked={formData.public} onChange={handleChange}></input>
                        <label htmlFor="public">
                            <span className='white-text'>
                                <i class="fa-solid fa-book-bookmark"></i>
                                Public
                            </span>
                            <br />
                            Anyone on the internet can see this repository. You choose who can commit.
                        </label>
                    </div>

                    <hr />

                    <p>
                        <i class="fa-solid fa-circle-exclamation"></i>
                        This page is only made for educational purposes.
                        I have no affiliation with Github. This is just a test page to show how the form looks like.
                    </p>

                    <hr />

                    {/* submit */}
                    <div className='submit-area'>
                        <button type="submit" onClick={handleSubmit}>Send form</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form