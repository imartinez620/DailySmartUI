import React, { Component } from 'react';

export default class Post extends Component {
    renderTopics() {
        let topics = this.props.films.map((topic, index) => {
              return <span className="post-topic" key={index}>{topic}<br></br></span>
        })
        return topics;
    }


    render() {
        return (
            <li className="recent-post">
                {/*{name: 'CR90 corvette', 
                model: 'CR90 corvette', 
                manufacturer: 'Corellian Engineering Corporation', 
                cost_in_credits: '3500000', 
                length: '150', …}*/}

                <div className="recent-post__title">
                    {this.props.name}
                </div>
                <div className="recent-post__topics">
                {this.renderTopics()}
                </div>
            </li>
        )
    }
}