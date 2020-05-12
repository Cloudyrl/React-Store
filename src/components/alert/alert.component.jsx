import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import { UserContext } from "../../context/user";

const AlertComponent = () => {
  const { alert, hideAlert } = useContext(UserContext);
  console.log(alert)
  return (
    <>
      {alert.show ? (
        <div>
          <Alert variant={alert.type} onClose={hideAlert} dismissible>
            {alert.msg}
          </Alert>
        </div>
      ) : null}
    </>
  );
};

export default AlertComponent;
