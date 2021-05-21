import React from 'react'
import './Filter.css'
class Filter extends React.Component{
    state={
        divcontainer:false
    }
    render(){
        var HandleChange = e =>
        {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const x=this.state.divcontainer;
        return(
            <div className="aaa">
                    <button className="handleChange" onClick={HandleChange}>{x?'Hide Filter':"Show Filter"}</button>
                    {
                        x&&(
                            <div className="filter">
                                <div className="row">
                                    <div className="name">Price</div>
                                    <div className="dropdown">Dropdown</div>
                                </div>
                                <div className="row">
                                    <div className="name">Color</div>
                                    <div className="list">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="name">Brands</div>
                                    <div className="dropdown">Dropdown2</div>
                                </div>
                                <div className="row">
                                    <div className="name">Sort By</div>
                                    <div className="dropdown">Dropdown3</div>
                                </div>
                                <div className="row">
                                    <div className="name">Size</div>
                                    <div className="dropdown">Dropdown4</div>
                                </div>
                                <div className="row">
                                    <div className="name">Show</div>
                                    <div className="dropdown">Dropdown5</div>
                                </div>
                            </div>

                        )
                    }
            </div>
        )
    }
}

export default Filter;