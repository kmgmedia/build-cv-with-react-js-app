import React from 'react'
import './button.scss';


class Button extends React.Component {
    handleClick = (e) => {
      e.preventDefault();
      const clickedButton = e.target;
      clickedButton.classList.add("animate");
      setTimeout(() => {
        clickedButton.classList.remove("animate");
      }, 600);
    }
  
    render() {
      return (
        <button className="kmg-folio-btn" onClick={this.handleClick}>
          Case Study
        </button>
      );
    }
  }

/* class Button extends React.Component {
        handleClick = (e) => {
        e.preventDefault();
        const kmgFolioBtn = document.querySelector(".kmg-folio-btn");
        kmgFolioBtn.classList.add("animate");
        setTimeout(() => {
            kmgFolioBtn.classList.remove("animate");
            
        }, 600);
        }
    
        render() {
        return (
            <button className="kmg-folio-btn" onClick={this.handleClick}>
            Case Study
            </button>
        );
        }
    }
     */
    
export default Button;