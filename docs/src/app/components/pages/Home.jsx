import React from 'react';
import Overview from './Overview';
import FullWidthSection from '../FullWidthSection';
import RaisedButton from 'material-ui/RaisedButton';
import styleResizable from 'material-ui/utils/styleResizable';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
// We tell HighchartsMore to use the same Highcharts object as ReactHighcharts
import Highlight from'react-highlight';
import ReactDOM from 'react-dom';
HighchartsMore(ReactHighcharts.Highcharts);
import {Grid, Row, Col} from 'react-flexbox-grid';

const HomePage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  mixins: [
    styleResizable,
  ],
  homeCard() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 130,
        width: 420,
        height: 157,
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      demoStyle: {
        margin: '16px 32px 0px 32px',
      },
      h1: {
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 32,
      },
      h1WhenLarge: {
        fontSize: 56,
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
      colmd3: {
        width: 33.4,
      },
    };
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
     const config2 = {
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

    styles.h2 = Object.assign({}, styles.h1, styles.h2);

    if (this.isDeviceSize(styleResizable.statics.Sizes.LARGE)) {
      styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
      styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
      styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <Overview
          heading="Get Started"
          kindchart={config}
          firstChild={true}
        />
        <Overview
          heading="Customization"
          route="/customization"
          kindchart={config2}
        />
        <Overview
          heading="Components"
          kindchart={config}
          lastChild={true}
        />
        <Overview
          heading="Get Started"
          kindchart={config}
          firstChild={true}
        />
        <Overview
          heading="Customization"
          route="/customization"
          kindchart={config2}
        />
        <Overview
          heading="Components"
          kindchart={config}
          lastChild={true}
        />
      </FullWidthSection>
    );
  },

  homePageHero() {
    const styles = {
      root: {
        backgroundColor: cyan500,
        overflow: 'hidden',
      },
      svgLogo: {
        marginLeft: window.innerWidth * 0.5 - 130,
        width: 420,
        height: 157,
      },
      tagline: {
        margin: '16px auto 0 auto',
        textAlign: 'center',
        maxWidth: 575,
      },
      label: {
        color: lightBaseTheme.palette.primary1Color,
      },
      githubStyle: {
        margin: '16px 32px 0px 8px',
      },
      demoStyle: {
        margin: '16px 32px 0px 32px',
      },
      h1: {
        color: darkWhite,
        fontWeight: typography.fontWeightLight,
      },
      h2: {
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      taglineWhenLarge: {
        marginTop: 32,
      },
      h1WhenLarge: {
        fontSize: 56,
      },
      h2WhenLarge: {
        fontSize: 24,
        lineHeight: '32px',
        paddingTop: 16,
        marginBottom: 12,
      },
  };

    styles.h2 = Object.assign({}, styles.h1, styles.h2);

    if (this.isDeviceSize(styleResizable.statics.Sizes.LARGE)) {
      styles.tagline = Object.assign({}, styles.tagline, styles.taglineWhenLarge);
      styles.h1 = Object.assign({}, styles.h1, styles.h1WhenLarge);
      styles.h2 = Object.assign({}, styles.h2, styles.h2WhenLarge);
    }

    return (
      <FullWidthSection style={styles.root}>

          <h2 style={styles.h2}>
            A Set of React Components <span style={styles.nowrap}>
            that Implement</span> <span style={styles.nowrap}>
            Google&apos;s Material Design</span>
          </h2>

      </FullWidthSection>
    );
  },

  homePurpose() {
    const styles = {
      root: {
        backgroundColor: grey200,
      },
      content: {
        maxWidth: 700,
        padding: 0,
        margin: '0 auto',
        fontWeight: typography.fontWeightLight,
        fontSize: 20,
        lineHeight: '28px',
        paddingTop: 19,
        marginBottom: 13,
        letterSpacing: 0,
        color: typography.textDarkBlack,
      },
    };

    return (
      <FullWidthSection
        style={styles.root}
        useContent={true}
        contentStyle={styles.content}
        contentType="p"
        className="home-purpose"
      >
        Material-UI came about from our love of&nbsp;
        <a href="http://facebook.github.io/react/">React</a> and&nbsp;
        <a href="https://www.google.com/design/spec/material-design/introduction.html">
         Google's Material Design
        </a>. We're currently using it on a project at&nbsp;
        <a href="https://www.call-em-all.com/Careers">Call-Em-All</a> and plan on adding to it
        and making it better in the coming months.
      </FullWidthSection>
    );
  },

  homeFeatures() {
    const styles = {maxWidth: 906};

    return (
      <FullWidthSection useContent={true} contentStyle={styles}>
        <HomeFeature
          heading="Get Started"
          route="/get-started"
          img="images/get-started.svg"
          firstChild={true}
        />
        <HomeFeature
          heading="Customization"
          route="/customization"
          img="images/css-framework.svg"
        />
        <HomeFeature
          heading="Components"
          route="/components"
          img="images/components.svg"
          lastChild={true}
        />
      </FullWidthSection>
    );
  },

  homeContribute() {
    const styles = {
      root: {
        backgroundColor: grey200,
        textAlign: 'center',
      },
      h3: {
        margin: 0,
        padding: 0,
        fontWeight: typography.fontWeightLight,
        fontSize: 22,
      },
      button: {
        marginTop: 32,
      },
    };

    return (
      <FullWidthSection useContent={true} style={styles.root}>
        <h3 style={styles.h3}>
          Want to help make this <span style={styles.nowrap}>project awesome? </span>
          <span style={styles.nowrap}>Check out our repo.</span>
        </h3>
        <RaisedButton
          label="GitHub"
          primary={true}
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          style={styles.button}
        />
      </FullWidthSection>
    );
  },

  handleTouchTapDemo() {
    this.context.router.push('/components');
  },

  render() {
    const style = {
      paddingTop: spacing.desktopKeylineIncrement,
    };

    return (
      <div style={style}>
        {this.homeCard()}
      </div>
    );
  },

});

export default HomePage;
