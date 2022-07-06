import "../styles/App.css";
import Splash from "./splash/Splash";
import "../styles/App.css";
import PropTypes from "prop-types";
import MyEvents from "./myEvents/MyEvents";

function App({ events }) {
  return (
    <>
      <div className="wrapper">
        <Splash />
        <div>My Events</div>
        <MyEvents events={events}/>
      </div>
    </>
  );
}

App.propTypes = {
  events: PropTypes.arrayOf(
      PropTypes.shape({
          owner: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          friendsConfirmed: PropTypes.arrayOf(PropTypes.number),
          friendsInvited: PropTypes.arrayOf(PropTypes.number)
      })
  )
}

export default App;
