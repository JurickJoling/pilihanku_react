import React from 'react';
import LeftNav from 'material-ui/LeftNav';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {spacing, typography, zIndex} from 'material-ui/styles';
import {cyan500} from 'material-ui/styles/colors';

const SelectableList = MakeSelectable(List);

const AppLeftNav = React.createClass({

  propTypes: {
    docked: React.PropTypes.bool.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: () => {
    return ({
      muiVersions: [],
    });
  },

  componentDidMount: function() {
    const self = this;
    const url = '/versions.json';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        self.setState({
          muiVersions: JSON.parse(request.responseText),
          version: JSON.parse(request.responseText)[0],
        });
      }
    };

    request.open('GET', url, true);
    request.send();
  },

  firstNonPreReleaseVersion: function() {
    let version;
    for (let i = 0; i < this.state.muiVersions.length; i++) {
      version = this.state.muiVersions[i];
      // If the version doesn't contain '-' and isn't 'HEAD'
      if (!/-/.test(version) && version !== 'HEAD') {
        break;
      }
    }
    return version;
  },

  handleVersionChange: function(event, index, value) {
    if (value === this.firstNonPreReleaseVersion()) {
      window.location = 'http://www.material-ui.com/';
    } else {
      window.location = `http://www.material-ui.com/${value}`;
    }
  },

  currentVersion: function() {
    if (window.location.hostname === 'localhost') return this.state.muiVersions[0];
    if (window.location.pathname === '/') {
      return this.firstNonPreReleaseVersion();
    } else {
      return window.location.pathname.replace(/\//g, '');
    }
  },

  handleRequestChangeLink(event, value) {
    window.location = value;
  },

  handleTouchTapHeader() {
    this.context.router.push('/');
    this.props.onRequestChangeLeftNav(false);
  },

  styles: {
    logo: {
      cursor: 'pointer',
      fontSize: 24,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan500,
      paddingLeft: spacing.desktopGutter,
      marginBottom: 8,
    },
    version: {
      paddingLeft: spacing.desktopGutterLess,
      fontSize: 12,
    },
  },

  render() {
    const {
      location,
      docked,
      onRequestChangeLeftNav,
      onRequestChangeList,
      open,
      style,
    } = this.props;

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        width={400}
        onRequestChange={onRequestChangeLeftNav}
        containerStyle={{zIndex: zIndex.leftNav - 100}}
      >
        <div style={this.styles.logo} onTouchTap={this.handleTouchTapHeader}>
          Menu
        </div>

        <span style={this.styles.version}>Available Page:</span>

        <SelectableList
          valueLink={{value: location.pathname, requestChange: onRequestChangeList}}
        >
           <ListItem
            primaryText="Overview"
            value="/get-started/prerequisites"
          />
          <ListItem
            primaryText="Mass Media Campaign"
            value="/get-started/installation"
          />
          <ListItem
            primaryText="Community Outreach"
            value="/get-started/usage"
          />
          <ListItem
            primaryText="Post-Partum Family Planning Indicator"
            value="/get-started/server-rendering"
          />
          <ListItem
            primaryText="Supply Chain Management"
            value="/get-started/examples"
          />
          <ListItem
            primaryText="Contraceptive Choice"
            value="/customization/themes"
          />
          <ListItem
            primaryText="Informatics"
            value="/discover-more/community"
          />
          <ListItem
            primaryText="Contraceptive Outcomes"
            value="/discover-more/showcase"
          />

        </SelectableList>
        <Divider />

        <span style={this.styles.version}> Impact Indicators -</span>
        <span style={this.styles.version}> (Data Available After one year of Program Implementation)</span>
      </LeftNav>
    );
  },
});

export default AppLeftNav;
