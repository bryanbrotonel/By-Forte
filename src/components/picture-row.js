import React, { Component } from 'react';

export class PictureRow extends Component {
    render() {
        return (
            <div class="d-flex justify-content-around w-100 flex-column flex-lg-row">
                <div className="p-2 picture">
                    <h1>Picture 1</h1>
                </div>
                <div className="p-2 picture" style={{ backgroundColor: '#EEBB55' }}>
                    <h1>Picture 2</h1>
                </div>
                <div className="p-2 picture" style={{ backgroundColor: '#5457A6' }}>
                    <h1>Picture 3</h1>
                </div>
            </div>
        )
    }
}