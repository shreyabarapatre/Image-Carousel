import React, { Component } from 'react'
import '../App.css';
export default class MoreInfo extends Component {
    render() {
        let itemId = this.props.id;
        switch(itemId){
            case 0:
                return (
                    <div className='text'>
                        <span>It all started here in 1955 when Walt Disney himself decided to build a theme park around his Disney animated empire. With constant renovations and updates, Disneyland promises to always have something new–Star Wars: Galaxy’s Edge is the latest addition to the park. Classic attractions still include Tomorrowland, Pirates of the Caribbean, It’s a Small World, Space Mountain, and many more.</span>
                    </div>
                )
            case 1:
                return (
                    <div className='text'>
                        <span>Part of a sprawling park network in the Sierra Nevada Mountains, Yosemite National Park is known for its giant sequoia trees, epic waterfalls, and abundance of wildlife. The park is filled with activities like rock climbing, hiking, and mountain biking. Remember, reservations are required to enter the park, so plan ahead.</span>
                    </div>
                )
            case 2:
                return (
                    <div className='text'>
                        <span>In its heyday, the Hearst Castle in San Simeon was a hotspot for celebrities with roaring ‘20s parties that catered to everyone from Charlie Chaplin and Clark Gable to Jean Harlow and the Marx Brothers. Built by media mogul William Randolph Hearst between 1919 and 1947, the castle was fictionalized and lampooned in the classic film Citizen Kane. Today, visitors can tour the opulent palace, which features a zoo, gold-leaf Roman pool, and a priceless art collection.</span>
                    </div>
                )
            case 3:
                return (
                    <div className='text'>
                        <span>Part of a sprawling park network in the Sierra Nevada Mountains, Yosemite National Park is known for its giant sequoia trees, epic waterfalls, and abundance of wildlife. The park is filled with activities like rock climbing, hiking, and mountain biking. Remember, reservations are required to enter the park, so plan ahead.</span>
                    </div>
                )
            default:
                return(
                    <div className='text'>
                        <span>Tried to Access something which is not available</span>
                    </div>
                )
        }
        
    }
}
