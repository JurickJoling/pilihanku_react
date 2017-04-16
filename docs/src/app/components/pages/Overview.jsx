import React from 'react';
import {Link} from 'react-router';
import styleResizable from 'material-ui/utils/styleResizable';
import spacing from 'material-ui/styles/spacing';
import transitions from 'material-ui/styles/transitions';
import typography from 'material-ui/styles/typography';
import {grey200} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import ReactHighcharts from 'react-highcharts'; 
import HighchartsMore from 'highcharts-more';
// We tell HighchartsMore to use the same Highcharts object as ReactHighcharts
import Highlight from'react-highlight';
import ReactDOM from 'react-dom'; 
HighchartsMore(ReactHighcharts.Highcharts);


const Overview = React.createClass({

  propTypes: {
    firstChild: React.PropTypes.bool,
    heading: React.PropTypes.string,
    kindchart: React.PropTypes.element,
    lastChild: React.PropTypes.bool,
  },

  mixins: [styleResizable],

  getDefaultProps() {
    return {
      firstChild: false,
      lastChild: false,
    };
  },

  getInitialState() {
    return {
      zDepth: 0,
    };
  },

  getStyles() {
    const desktopGutter = spacing.desktopGutter;
    const desktopKeylineIncrement = spacing.desktopKeylineIncrement;
    const styles = {
      root: {
        transition: transitions.easeOut(),
        maxWidth: '530px',
        margin: `0 auto ${desktopGutter}px auto`,
      },
      rootWhenMedium: {
        float: 'left',
        width: '33%',
        marginRight: 4,
        marginBottom: 0,
      },
      image: {
        //Not sure why this is needed but it fixes a display
        //issue in chrome
        marginBottom: -6,
      },
      heading: {
        fontSize: 20,
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
        fontWeight: typography.fontWeightMedium,
        color: typography.textDarkBlack,
        backgroundColor: grey200,
        textAlign: 'center',
        margin: 0,
        padding: 0,
        lineHeight: `${desktopKeylineIncrement}px`,
      },
      rootWhenLastChild: {
        marginBottom: 0,
      },
      rootWhenMediumAndLastChild: {
        marginRight: 0,
        marginBottom: 0,
      },
      rootWhenMediumAndFirstChild: {
        marginLeft: 0,
      },
    };

    if (this.isDeviceSize(styleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(styleResizable.statics.Sizes.LARGE)) {
      styles.root = Object.assign(
        styles.root,
        styles.rootWhenMedium,
        this.props.firstChild && styles.rootWhenMediumAndFirstChild,
        this.props.lastChild && styles.rootWhenMediumAndLastChild
      );
    }

    return styles;
  },

  _onMouseEnter() {
    this.setState({
      zDepth: 4,
    });
  },

  _onMouseLeave() {
    this.setState({
      zDepth: 0,
    });
  },

  render() {
    const styles = this.getStyles();
      const config = {
      /* HighchartsConfig */
       chart: {
        polar: true
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
     const configi = {
      /* HighchartsConfig */
       chart: {
        type: 'bar'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    const confico = {
      /* HighchartsConfig */
       chart: {
        type: 'bar'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    return (
      <Paper
        zDepth={this.state.zDepth}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        style={Object.assign(
          styles.root,
          this.props.lastChild && styles.rootWhenLastChild)}
      >
        <h3 style={styles.heading}>{this.props.heading}</h3>
        <ReactHighcharts config={this.props.kindchart}> </ReactHighcharts>
      </Paper>
    );
  },

});

export default Overview;
