import React, { createContext, FC, useContext } from 'react';

import { UserService } from './UserService';

export const services = {
  userService: new UserService(),
};

export const ServicesContext = createContext(services);

export const ServicesProvider: FC = ({ children }) => {
  return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
};

export const useService = () => useContext(ServicesContext);
