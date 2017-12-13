import React from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

import "./index.css";
const CardImageView = props => (
  <Card
    style={{ width: 250, display: "inline-block", margin: 5 }}
    bodyStyle={{ padding: 5 }}
  >
    <div className="custom-image">
      <img
        alt="example"
        width="100%"
        src="http://www.uwgb.edu/UWGBCMS/media/Maps/images/map-icon.jpg"
      />
    </div>
    <div className="custom-card">
      <h3>{props.header}</h3>
      <p>{props.content}</p>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Button
          shape="circle"
          type="primary"
          icon="check"
          size="large"
          style={{ backgroundColor: "green", borderColor: "green", margin: 10 }}
          onClick={props.onAccept}
        />
        <Button
          shape="circle"
          type="primary"
          icon="close"
          size="large"
          style={{ backgroundColor: "red", borderColor: "red", margin: 10 }}
          onClick={props.onReject}
        />
      </div>
    </div>
  </Card>
);

CardImageView.defaultProps = {
  header: "Anonim Maymunlar",
  content: "Maymun gibi calisicaz :D",
  onAccept: () => console.log("Accepted"),
  onReject: () => console.log("Rejected")
};

CardImageView.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired
};
export default CardImageView;
