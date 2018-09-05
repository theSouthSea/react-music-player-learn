import React, { Component} from 'react';
import './progress.less';
class Progress extends Component {
    constructor(props) {
        super(props);
        this.changeProgress = this.changeProgress.bind(this);
    }
    changeProgress(e) {
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        console.log(progress);
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }
    render() {
        return (
            <div className="components-progress" ref="progressBar" onClick={ this.changeProgress }>
              <div className="progress" style={ {
                                                    width: `${this.props.progress}%`,
                                                    backgroundColor: this.props.barColor
                                                } }></div>
            </div>
        )
    }
}
export default Progress;