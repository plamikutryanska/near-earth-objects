import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import EmptyState from "../EmptyState/EmptyState";
import NearEarthObjectsContainer from "./NearEarthObjectsContainer";
import Loader from "../Loader/Loader";

import { getFormattedDate } from "../../utils/getFormattedDate";
import { getNearEarthObjectDetails } from "../../utils/getNearEarthObjectDetails";
import { UseNasaNearEarthObjects } from "../../hooks/useNasaNearEarthObjects";

const queryClient = new QueryClient();

const NearEarthObjects = () => {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(getFormattedDate(date));


  useEffect(() => {
    setFormattedDate(getFormattedDate(date));
  }, [date]);

  const { data, isLoading } = UseNasaNearEarthObjects(formattedDate);
  const apiResponse = getNearEarthObjectDetails({ data, formattedDate });

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && <Loader />}
      {apiResponse && !isLoading && (
        <NearEarthObjectsContainer apiResponse={apiResponse} />
      )}
      {!apiResponse && !isLoading && <EmptyState />}
    </QueryClientProvider>
  );
};

export default NearEarthObjects;
