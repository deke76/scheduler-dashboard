import React, { Component } from "react";
import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

// Class declaration
class Dashboard extends Component {
  // initial state
  state = {
    loading : false,
    focused : null
  };

  // set the panel focus
  selectPanel(id) {
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  };

  render() {
    const dashboardClasses = classnames("dashboard", {"dashboard--focused" : this.state.focused });

    if ( this.state.loading ) {
      return <Loading />;
    } 
    
    // Place the data in to an array of Panel components
    const panels = 
      data.filter(
        panel => this.state.focused === null || this.state.focused === panel.id)
          .map(panel =>
            <Panel
              key={panel.id}
              id={panel.id}
              label={panel.label}
              value={panel.value}
              onSelect={event => this.selectPanel(panel.id)}
            />
      );
      
    return  (
      <main className={dashboardClasses}>
        { panels }
      </main>
    );
  }
}

export default Dashboard;
