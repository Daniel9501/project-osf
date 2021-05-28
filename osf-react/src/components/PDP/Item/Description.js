import React, { useState } from 'react'
import './Description.css';

function Description() {
    const [show1, setShow1]=useState(false)
    const [show2, setShow2]=useState(false)
    const [show3, setShow3]=useState(false)
    return (
        <div className="appa"> 
            <div className="descriptionProductDesktop">
                <div className="buttonsDescription">
                    <button className="description" onClick={() => setShow1(!show1)}>Description</button>
                    <button className="description" onClick={() => setShow2(!show2)}>Additional Information</button>
                    <button className="description" onClick={() => setShow3(!show3)}>Reviews (3)</button>
                </div>
                { 
                    show1?

                        <div className="descriptionContainer">
                        <p className="descriptionColumn">
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br /><br />Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className="descriptionColumn">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                        </div>

                    :null
                }
                { 
                    show2?

                        <div className="descriptionContainer">
                        <p className="descriptionColumn">
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br /><br />Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className="descriptionColumn">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                        </div>

                    :null
                }
                { 
                    show3?

                        <div className="descriptionContainer">
                        <p className="descriptionColumn">
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br /><br />Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                        <p className="descriptionColumn">
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat 
                            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                        </div>

                    :null
                }

            </div>
        </div>
    )
}

export default Description
