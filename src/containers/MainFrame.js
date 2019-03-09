import React, { Component, Fragment } from 'react';
import GridBlock from '../components/GridBlock';
import GameBoard from '../components/GameBoard';
import './styles/MainFrame.css';

export default class MainFrame extends Component {
    state = {
        completedBy: null,
    }

  render() {
    return (
      <div className="mainframe">
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock />
            <GridBlock displayTop="none" display="none" />
        </Fragment>
        <Fragment>
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayLeft="none" display="none" />
            <GridBlock displayTop="none" display="none" displayLeft="none" />
        </Fragment>
      </div>
    )
  }
}

