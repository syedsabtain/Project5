import React from 'react';
import './App.css';
import './extra/bootstrap.min.css'
import Navflip from './extra/Navflip'
import {SocialMediaIconsReact} from 'social-media-icons-react'
import {useSpring,animated} from 'react-spring'
import Blogge from './first/Blogcomp'

function App() {


    const testing = useSpring({
        from:{opacity:0, margin:-500},
        to:{opacity:1, margin:0},
        config:{
          
              delay:1000,
              duration:3000
          
        }
    })
    return (
        <div>
            <animated.div style={testing}>
            <div className='bg-image  text-center'>
                {/* navbar section */}
                <nav class="navbar navbar-expand-lg shadow-lg fixed-top navbar-dark bg-navbar">
                    <a class="  font-style text-white mr-5">illustration.com</a>
                    <button
                        class="navbar-toggler navlink6"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item active mr-2">
                                <a class="nav-link navlink3" href="#">Home
                                    {/* <span class="sr-only">(current)</span> */}
                                </a>
                            </li>
                            <li class="nav-item mr-2">
                                <a class="nav-link navlink4" href="#">Illustrations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navlink3" href="#">About</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                {/* navbar ends */}

                <div className=' text-custom text-white  text-center'>
                    <div className='container main-div'>
                    <h1>Welcome to Our Compay</h1>
                    <p>We Create One Of The Best Illustation In The  World</p>    
                    </div>
                    

                </div>

            </div>
            </animated.div>
            <div className='bg-image2'>
                <div className='container'>
                    <div className='text-center second-imge'>
                    <div className='container main-div'>
                        <h1>Team Work</h1>
                        <p>Team Work Is The Key For Success In Any Project. 
                        We Creat An Illustraion According TO Customer Need. We Don't Charge THem Until They Are Satisfied</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-colorr'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 text-center '>
                            
                            <Blogge></Blogge>
                        </div>
                        <div className='col-md-4'>
                            <Navflip></Navflip>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer --> */}
            <footer class="page-footer  text-center ">

                {/* <!-- Footer Elements --> */}
                <div class="container">

                    {/* <!-- Grid row--> */}
                    <div class="row">

                        {/* <!-- Grid column --> */}
                        <div class="col-md-12 ">
                            <div class=" flex-center">

                                {/* <!-- Facebook --> */}
                                <a class="fb-ic mr-2">
                                <SocialMediaIconsReact borderColor="rgba(242,236,236,1)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="20%"  size="52" />
                                </a>
                                {/* <!-- Twitter --> */}
                                <a class="tw-ic mr-2">
                                <SocialMediaIconsReact borderColor="rgba(242,236,236,1)" borderWidth="2" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="20%"  size="52" />
                                </a>
                               
                                {/* <!--Linkedin --> */}
                                <a class="li-ic mr-2">
                                <SocialMediaIconsReact borderColor="rgba(242,236,236,1)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="20%"  size="52" />
                                </a>
                                {/* <!--Instagram--> */}
                                <a class="ins-ic mr-2">
                                <SocialMediaIconsReact borderColor="rgba(242,236,236,1)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="20%"  size="52" />
                                </a>
                                {/* <!--Pinterest--> */}
                                <a class="pin-ic mr-2">
                                <SocialMediaIconsReact borderColor="rgba(242,236,236,1)" borderWidth="2" borderStyle="solid" icon="pinterest-light" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="20%" size="52" />
                                </a>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row--> */}

                </div>
                {/* <!-- Footer Elements --> */}

                {/* <!-- Copyright --> */}
                <div class="footer-copyright pt-3 text-white text-center ">© 2020 Copyright:
                    <a>
                        Syed Sabtain</a>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </div>
        
    )
}

export default App