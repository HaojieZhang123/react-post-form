import React from 'react'
import githubLogo from '../assets/github-mark-white.svg'
import githubCopilotLogo from '../assets/github-copilot-white-icon.svg'

const Header = () => {
    return (
        <>
            <header>
                <div className="left-header">
                    <button>
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div>
                        <img src={githubLogo} alt="Github" />
                    </div>
                    <span>
                        New repository
                    </span>
                </div>

                <div className="right-header">
                    <div>
                        <input type="text" placeholder='Type / to search' />

                        <button>
                            <div>
                                <img src={githubCopilotLogo} alt="Github Copilot" />
                            </div>
                            <div>
                                &#128899;
                            </div>
                        </button>

                        {/* | */}

                        <button>
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
                            <div></div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header