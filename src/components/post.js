import React, { Component } from 'react';

export default class Post extends Component {
    renderTopics() {
        let topics = this.props.films.map((topic, index) => {
            return <span className="post-topic" key={index}>{topic}<br></br></span>
        })
        return topics;
    }

    renderLinks() {
        console.log("pilotos", this.props.pilots)
        let links = this.props.pilots.map((post_link, index) => {
            return (
                <div className="post-link" key={index}>
                    <div className="post-link__box"></div>
                    <div className="post-link__link">
                        <a href={post_link}>Useful Link #{index + 1}</a>
                    </div>
                </div>
            )
        })
        return links;
    }

    render() {
        // return (
        //     <li className="recent-post">
        //         {/*{name: 'CR90 corvette', 
        //         model: 'CR90 corvette', 
        //         manufacturer: 'Corellian Engineering Corporation', 
        //         cost_in_credits: '3500000', 
        //         length: '150', …}*/}

        //         <div className="recent-post__title">
        //             {this.props.name}
        //         </div>
        //         <div className="recent-post__topics">
        //         {this.renderTopics()}
        //         </div>
        //     </li>
        // )
        if (this.props.type == 'recent') {
            return (
                <li className="recent-post">
                    <div className="recent-post__title">
                        {this.props.name}
                    </div>
                    <div className="recent-post__topics">
                        {this.renderTopics()}
                    </div>
                </li>
            )
        } else if (this.props.type == 'result') {
            return (
                <li className="result-post">
                    <div className="result-post__topics">
                        {this.renderTopics()}
                    </div>
                    <div className="result-post__title">
                        {this.props.name}
                    </div>
                    <div className="result-post__links">
                        {this.renderLinks()}
                    </div>
                </li>
            )
        }
    }
}