var Autodesk = window.Autodesk;

class Legend extends Autodesk.Viewing.UI.DockingPanel {

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

    
    this.container.style.width = "600px"
    this.container.style.top= '0px';
    this.container.style.left= '338px';
    this.container.style.position= 'absolute';
    this.container.style.height= '500px';

    this.DOMContent = document.createElement('div')

    this.DOMContent.className = 'shit right';



    this.container.appendChild(
      this.DOMContent) 
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
        <AIApp/>,
        this.DOMContent)

    } else if (this.reactNode) {

      ReactDOM.unmountComponentAtNode(
        this.DOMContent)
        window.stream.getTracks()[0].stop();
        window.cancelAnimationFrame(window.reqId);

      this.reactNode = null  
    }
  }

}