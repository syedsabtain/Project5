import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";


import '../first/navstyle.css'

const dataary = {
  first:'We Provide Consultancy If Any Customer Is Confused About Choosing An Illustraion',
  second:'We Have One Of The Best Certified Illustration Developers',
  third:'Customer Can Contact Us 24/7',
  
}
const ary = ['avatar1','avatar2','avatar3'];
const ary2 = ['avatarExpanded1','avatarExpanded2','avatarExpanded3'];

const listData = [...Array(3).keys()];
const createCardFlipId = index => `listItem-${index}`;


const shouldFlip = index => (prev, current) =>
  index === prev || index === current;

const ListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      shouldInvert={shouldFlip(index)}
    >
      <div className="listItem" onClick={() => onClick(index)}>
        
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="listItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              shouldFlip={shouldFlip(index)}
              delayUntil={createCardFlipId(index)}
            >
              <div className={ary[index]} >
                 
              </div>
            </Flipped>
            <div className="description">
              {listData.slice(0, 3).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}
                >
                    
                  <div>
                      
                  </div>
                  
                </Flipped>
              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

const ExpandedListItem = ({ index, onClick }) => {
  return (
    <Flipped
      flipId={createCardFlipId(index)}
      stagger="card"
      onStart={el => {
        setTimeout(() => {
          el.classList.add("animated-in");
        }, 400);
      }}
    >
      <div className="expandedListItem" onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <div className="expandedListItemContent">
            <Flipped
              flipId={`avatar-${index}`}
              stagger="card-content"
              delayUntil={createCardFlipId(index)}
            >
              <div className={ary[index],ary2[index]}>
              </div>
            </Flipped>
            <div className="description">
              {listData.slice(0, 2).map(i => (
                <Flipped
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  delayUntil={createCardFlipId(index)}
                >
                  <div></div>
                </Flipped>
              ))}
            </div>
            <div className="additional-content">
              {listData.slice(0, 1).map((i,ind ) => (
                <p>{Object.values(dataary)[index]}</p>

              ))}
            </div>
          </div>
        </Flipped>
      </div>
    </Flipped>
  );
};

class AnimatedList extends Component {
  state = { focused: null };
  onClick = index =>{
    this.setState({
      focused: this.state.focused === index ? null : index
    });  }
  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: this.state.focused !== null
          }
        }}
        decisionData={this.state.focused}
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={this.onClick} id={index} />
                )}
              </li>
            );
          })}
        </ul>
      </Flipper>
    );
  }
}


export default AnimatedList
