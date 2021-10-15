import React, { FC, useContext, createContext, useState } from "react";
import { parseUserAtributes, cognitoUserPool, LoginObject } from "utils";
import { useNotification } from "components/providers";
import { navigate } from "gatsby";

const initialValues = {
  signUp: (values: LoginObject) => {},
};

const UserContext = createContext(initialValues);

export const UserProvdier: FC = ({ children }) => {
  //   const [user, setUser] = useState();
  const { showNotitication } = useNotification();

  const signUp = (values: LoginObject) => {
    const UserAtributes = parseUserAtributes(values);

    cognitoUserPool.signUp(
      values.name,
      values.password,
      UserAtributes,
      UserAtributes,
      (err, _) => {
        if (err) {
          return showNotitication(
            "You must fill all fields, please!!",
            "error"
          );
        }
        navigate("/send-email/");
      }
    );
  };

  return (
    <UserContext.Provider value={{ signUp }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
