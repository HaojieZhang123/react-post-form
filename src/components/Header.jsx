import React from 'react'
import githubLogo from '../assets/github-mark-white.svg'
import githubCopilotLogo from '../assets/github-copilot-white-icon.svg'
import pfp from '../assets/pfp.png'

const Header = () => {
    return (
        <>
            <header>
                <div className="left-header">
                    <button>
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div className='header-logo'>
                        <img src={githubLogo} alt="Github" />
                    </div>
                    <span>
                        <b className='white-text'>New repository</b>
                    </span>
                </div>

                <div className="right-header">
                    <div>
                        <input type="text" placeholder='Type / to search' />
                    </div>

                    <button className='copilot-btn'>
                        <div className='copilot-logo'>
                            <img src={githubCopilotLogo} alt="Github Copilot" />
                        </div>
                        <div>
                            &#128899;
                        </div>
                    </button>

                    {/* | */}

                    <button className='new-btn'>
                        <div>
                            +
                        </div>
                        <div>
                            &#128899;
                        </div>
                    </button>

                    <button>
                        <i class="fa-regular fa-circle-dot"></i>
                    </button>

                    <button>
                        <i class="fa-solid fa-code-pull-request"></i>
                    </button>

                    <button>
                        <i class="fa-regular fa-envelope-open"></i>
                    </button>

                    <div className='profile'>
                        <img src={pfp} alt="pfp" />
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header