import React, { Component } from "react";
import "./App.css";


class App extends Component {
    render() {


        const menuTop = <img src="/images/menu-top.svg " />
        const ironhackLogo = <img src="/images/ironhack-logo.svg" alt="" />
        const reactLogo = <img src="/images/react-logo.svg" alt="" srcset="" />
        const wellcome = <h1 className="wellcome">Say hello to ReactJs</h1>
        const text = <h3 className="text"> You will learn the secrets of the modern coding, from the best techers in the world.</h3>
        const icon1 = <img src="/images/icon1.png" alt="" srcset="" className="image" />
        const icon2 = <img src="/images/icon2.png" alt="" srcset="" />
        const icon3 = <img src="/images/icon3.png" alt="" srcset="" />
        const icon4 = <img src="/images/icon4.png" alt="" srcset="" />
        const button = <button className="button">Awesome!</button>





        return (
            <div className="App">


                <div className="navBar">

                    {ironhackLogo}
                    {menuTop}

                </div>

                <div className="mainContainer">

                    <div className="body">

                        <div>

                            <div>{wellcome}</div>

                            <div>{text}</div>
                            <div>{button}</div>




                        </div>



                        <div className="reactLogos">

                            <div>
                                {reactLogo}
                                {reactLogo}

                            </div>



                        </div>


                    </div>

                    <div className="icons">


                        <div class="iconColumn">
                            <div >{icon1} </div>
                            <div className="iconText">
                                <h2>Declarative</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>

                        <div class="iconColumn">
                            <div >{icon2} </div>
                            <div className="iconText">
                                <h2>Components</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div class="iconColumn">
                            <div >{icon3} </div>
                            <div className="iconText">
                                <h2>Single-Way</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                        <div class="iconColumn">
                            <div >{icon4} </div>
                            <div className="iconText">
                                <h2>JSX</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>



                        {/* <div>{icon2}</div>
                        <div>{icon3}</div>
                        <div>{icon4}</div> */}



                    </div>


                </div>
            </div>






        );
    }
}

export default App;
