import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../App.css'
import MoreInfo from "./MoreInfo";
class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state={
            itemId:0
        }
    }
    onChange = (index,item) => {
        console.log(index,item)
        this.setState({
            itemId:index
        })
    }
    render() {
        console.log(this.state.itemId,'------------')
        return (
            <div className="cor">
                <Carousel 
                    autoPlay 
                    interval="5000" 
                    infiniteLoop 
                    transitionTime="1000"
                    onChange={this.onChange}
                >
                    <div>
                        <p className="legend">Disney Land @ California</p>
                        <img src="https://www.fodors.com/wp-content/uploads/2019/10/02_UltimateCalifornia__Disneyland_2-DL.0923-768x512.jpg" alt="img1"/>
                    </div>
                    <div>
                        <p className="legend">Mering @ California</p>
                        <img src="https://www.fodors.com/wp-content/uploads/2019/10/06_UltimateCalifornia__Yosemite_6-Yosemite-%C2%A9Visit-California-Carol-Highsmith-768x512.jpg" alt="img2" style={{height:"100%"}}/>
                    </div>
                    <div>
                        <p className="legend">Blaise @ California</p>
                        <img src="https://www.fodors.com/wp-content/uploads/2019/10/11_UltimateCalifornia__HearstCastle_11-Hearst-Castle2-%C2%A9Visit-California-Blaise.jpg" alt="img3"/>
                    </div>
                    <div>
                        <p className="legend">Malibu @ California</p>
                        <img src="https://www.fodors.com/wp-content/uploads/2019/10/20_UltimateCalifornia__SurfingMalibu_20-austin-neill-HAKTHWgeDWE-unsplash.jpg" alt="im43"/>
                    </div>
                </Carousel>
                <MoreInfo id={this.state.itemId}/>
            </div>
        )
    };
}

export default Slider;