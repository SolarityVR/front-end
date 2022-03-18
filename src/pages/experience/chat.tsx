import React, { useEffect } from "react";
import Layout from "components/Layout";
import ChatModule from "modules/ChatModule";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import socket from '../../utils/socket-client';

const Index = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(state => state.chat);

  useEffect(() => {
  });

  return (
      <ChatModule />
  );
};

export default Index;
