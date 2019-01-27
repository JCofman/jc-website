import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const delay = 300;

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: delay },
      exit: { opacity: 0 },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;
