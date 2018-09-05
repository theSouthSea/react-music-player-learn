import React, { Component} from 'react';
import Header from './components/header';
import Player from './pages/player';
import { MUSIC_LIST} from './config/musiclist';
class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMusitItem: MUSIC_LIST[0]
        }
    }
    componentDidMount() {
        $("#player").jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    mp3: MUSIC_LIST[0].file
                }).jPlayer('play');
            },
            supplied: 'mp3',
            'wmode': 'window'
        })
    // $("#player").bind($.jPlayer.event.timeupdate, (e) => {
    //     duration = e.jPlayer.status.duration;
    //     this.setState({
    //         playedtime: Math.round(e.jPlayer.status.currentTime),
    //         progress: e.jPlayer.status.currentPercentAbsolute
    //     })
    // })
    }
    // componentWillUnmount() {
    //     $("#player").unbind($.jPlayer.event.timeupdate);
    // }
    render() {
        return (
            <div>
              <Header></Header>
              <Player currentMusitItem={ this.state.currentMusitItem }></Player>
            </div>
        )
    }
}
export default Root;