import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }


    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }




    render() {
        const { name, background } = this.props;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className='ColorBox'>
                    <div style={{ background }} className={this.state.copied ? 'copy-overlay show' : 'copy-overlay'} />
                    <div className={this.state.copied ? 'copy-msg show' : 'copy-msg'}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>
                            Copy
                    </button>
                    </div>
                    <span className='see-more'>More</span>

                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;
