import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShow, toggleShow }) => {
  return (
    <header className="HeaderStyle">
      <h1>{title}</h1>
      <Button
        onClick={onShow}
        text={toggleShow ? "Close" : "Add"}
        color={toggleShow ? "red" : "green"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Welcome",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
