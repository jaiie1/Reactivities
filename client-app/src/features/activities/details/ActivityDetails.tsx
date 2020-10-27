import React, { useContext, useEffect } from "react";
import {Grid, GridColumn } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { ActivityDetailedChat } from "./ActivityDetailedChat";
import { ActivityDetailedSideBar } from "./ActivityDetailedSideBar";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";

interface DetailsParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match,
}) => {
  const activityStore = useContext(ActivityStore);
  const {
    activity,   
    loadActivity,
    loadingInitial,
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if(loadingInitial || !activity) return <LoadingComponent content='loading...'/>

  return (
   <Grid>
     <GridColumn width={10}>
    <ActivityDetailedHeader activity={activity} />
    <ActivityDetailedInfo activity={activity} />
    <ActivityDetailedChat/>
     </GridColumn>
     <GridColumn width={6}>
    <ActivityDetailedSideBar/>
     </GridColumn>
   </Grid>
  );
};

export default observer(ActivityDetails);
