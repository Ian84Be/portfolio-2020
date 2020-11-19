/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import projectImage from './WoolyWilly.jpg';
import '../../scss/ToyBox/WoolyWilly.scss';

class WoolyWilly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: projectImage,
      activeDoodle: false,
      brush: 'crayon',
      isDrawing: false,
      hidden: false,
      hue: '#0f141a',
      lastX: 0,
      lastY: 0
    };
    this.canvas = React.createRef();
    this.projectImage = React.createRef();
    this.ctx = null;
    document.body.addEventListener(
      'touchstart',
      e => {
        if (e.target === this.canvas.current) e.preventDefault();
      },
      { passive: false }
    );
    document.body.addEventListener(
      'touchmove',
      e => {
        if (e.target === this.canvas.current) e.preventDefault();
      },
      { passive: false }
    );
    document.body.addEventListener(
      'touchend',
      e => {
        if (e.target === this.canvas.current) e.preventDefault();
      },
      { passive: false }
    );
  }
  render() {
    const { brush, hidden, hue } = this.state;
    return (
      <div className={`WoolyWilly ${this.props.lightMode ? 'lightMode' : ''}`}>
        <section className="WoolyWilly__body">
          <img
            src={projectImage}
            alt="projectImage"
            ref={this.projectImage}
            onLoad={this.stretchCanvas}
          />
          <canvas
            onDoubleClick={() => console.log('onDoubleClick()')}
            onMouseMove={this.draw}
            onMouseDown={e => {
              this.setState({
                ...this.state,
                isDrawing: true,
                lastX: e.offsetX,
                lastY: e.offsetY
              });
            }}
            onMouseUp={this.drawStop}
            onMouseOut={this.drawStop}
            onTouchMove={this.handleTouchMove}
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.drawStop}
            id="draw"
            ref={this.canvas}
            style={hidden ? { display: 'none' } : null}
          ></canvas>

          <div className="controls">
            <section className="brushes">
              <span
                aria-label="pen"
                style={brush === 'pen' ? { background: hue } : null}
                role="button"
                onClick={() => this.changeBrush('pen')}
              >
                🖊
              </span>
              <span
                aria-label="crayon"
                style={brush === 'crayon' ? { background: hue } : null}
                role="button"
                onClick={() => this.changeBrush('crayon')}
              >
                🖍
              </span>

              <span
                aria-label="fire extinguisher"
                style={
                  brush === 'fire extinguisher' ? { background: hue } : null
                }
                role="button"
                onClick={() => this.changeBrush('fire extinguisher')}
              >
                🧯
              </span>
              <span
                aria-label="erase"
                style={brush === 'erase' ? { background: hue } : null}
                role="button"
                onClick={() => this.changeBrush('erase')}
              >
                🧽
              </span>
            </section>
            <section className="colorPicker">
              <input
                type="color"
                value={this.state.hue}
                onChange={this.colorPicker}
              />
            </section>
          </div>
        </section>
      </div>
    );
  }

  componentDidMount() {
    this.stretchCanvas();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.stretchCanvas);
    document.body.removeEventListener('touchstart', e => {
      console.log('touchstart', e);
      if (e.target === this.canvas) e.preventDefault();
    });
    document.body.removeEventListener('touchmove', e => {
      if (e.target === this.canvas) e.preventDefault();
    });
    document.body.removeEventListener('touchend', e => {
      if (e.target === this.canvas) e.preventDefault();
    });
  }

  colorPicker = e => {
    this.setState({ ...this.state, hue: e.target.value });
    this.ctx = this.canvas.current.getContext('2d');
    this.ctx.strokeStyle = `${this.state.hue}`;
  };

  changeBrush = brush => {
    this.ctx = this.canvas.current.getContext('2d');
    this.ctx.strokeStyle = `${this.state.hue}`;
    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.globalAlpha = 0.7;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    if (brush === 'pen') {
      this.ctx.lineWidth = 1.0;
    }
    if (brush === 'crayon') {
      this.ctx.lineWidth = 4.0;
    }
    if (brush === 'fire extinguisher') {
      this.ctx.globalAlpha = 0.2;
      this.ctx.lineWidth = 44.0;
    }
    if (brush === 'erase') {
      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.lineWidth = 30.0;
      this.ctx.lineCap = 'round';
    }
    this.setState({ ...this.state, brush });
  };

  draw = e => {
    const { lastX, lastY, isDrawing } = this.state;
    if (!isDrawing) return;
    const rect = this.canvas.current.getBoundingClientRect();
    const { x, y } = rect;
    const thisX = e.clientX - x;
    const thisY = e.clientY - y;
    this.ctx.beginPath();
    this.ctx.moveTo(lastX, lastY); //start from
    this.ctx.lineTo(thisX, thisY); //go to
    this.ctx.stroke();
    this.setState({
      ...this.state,
      activeDoodle: true,
      lastX: thisX,
      lastY: thisY
    });
  };

  drawStop = e => {
    this.setState({ ...this.state, isDrawing: false });
  };

  handleTouchStart = e => {
    let touch = e.touches[0];
    const rect = this.canvas.current.getBoundingClientRect();
    const { x, y } = rect;
    const thisX = touch.clientX - x;
    const thisY = touch.clientY - y;
    this.setState({
      ...this.state,
      isDrawing: true,
      lastX: thisX,
      lastY: thisY
    });
  };

  handleTouchMove = e => {
    let touch = e.touches[0];
    const { lastX, lastY, isDrawing } = this.state;
    if (!isDrawing) return;
    const rect = this.canvas.current.getBoundingClientRect();
    const { x, y } = rect;
    const thisX = touch.clientX - x;
    const thisY = touch.clientY - y;
    this.ctx.beginPath();
    this.ctx.moveTo(lastX, lastY); //start from
    this.ctx.lineTo(thisX, thisY); //go to
    this.ctx.stroke();
    this.setState({
      ...this.state,
      activeDoodle: true,
      lastX: thisX,
      lastY: thisY
    });
  };

  stretchCanvas = e => {
    const canvas = this.canvas.current;
    const projectImage = this.projectImage.current;
    canvas.style.position = 'absolute';
    canvas.width = projectImage.clientWidth;
    canvas.height = projectImage.clientHeight;
    this.changeBrush(this.state.brush);
  };
}

export default WoolyWilly;
