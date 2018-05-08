import React, { Component } from 'react';

export class PictureRow extends Component {
    render() {
        return (
            <div class="picture-row">
                <div className="col-sm-3 picture" style={{ backgroundColor: '#302A77' }}>
                    <h1>Picture 1</h1>
                </div>
                <div className="col-sm-3 picture" style={{ backgroundColor: '#EEBB55' }}>
                    <h1>Picture 2</h1>
                </div>
                <div className="col-sm-3 picture" style={{ backgroundColor: '#5457A6' }}>
                    <h1>Picture 3</h1>
                </div>
            </div>
        )
    }
}