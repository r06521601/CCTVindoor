import Legend from './Legend'
import ReactDOM from 'react-dom'
import './ReactPanel.scss'
import React from 'react'

import WorkPackages from './WorkPackages';

var Autodesk = window.Autodesk;

export default class ReactPanel extends Autodesk.Viewing.UI.DockingPanel {

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  constructor (viewer, options) {

    super (viewer.container, options.id, options.title, {
      addFooter: false,
      viewer
    })

    this.container.classList.add('react-docking-panel')
    
    this.container.style.width = "735px"
    this.container.style.top= '0px';
    this.container.style.left= '338px';
    this.container.style.position= 'absolute';
    this.container.style.height= '536px';
    this.container.style.backgroundColor = 'rgba(0, 0, 0, 0.69)';

    this.DOMContent = document.createElement('div')

    this.DOMContent.className = 'dockingPanelScroll right';


    this.container.appendChild(
      this.DOMContent) 


    this.footer = this.createFooter()

    this.container.appendChild(
        this.footer)
      console.log(this.container);
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  initialize () {

    super.initialize()

    this.viewer = this.options.viewer
  }

  /////////////////////////////////////////////////////////
  //
  //
  /////////////////////////////////////////////////////////
  setVisible (show) {

    super.setVisible(show)

    if (show) {

      this.reactNode = ReactDOM.render(
        <WorkPackages viewer={this.viewer}/>,
        this.DOMContent)

    } else if (this.reactNode) {

      ReactDOM.unmountComponentAtNode(
        this.DOMContent)

      this.reactNode = null  
    }
  }

}