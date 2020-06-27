export const BaseURL='https://localhost:44374/'



const EndPoints = {
  Track: 'Track/',
  Task: 'Task/',
  Branch: 'Branch/',
 
};

 const TrackActions = {
    GetAllTracks: 'api/Track',
    GetTrackByTrackId: 'api/Track/track',
    GetTrackByBranchId: 'api/Track',
    AddTrack: 'api/Track/Add',
    UpdateTrack: 'api/Track/Edit',
    DeleteTrackById: 'api/Track/Delete',
  };

  export const TrackPaths={
    //GetAllTracks:`${BaseURL}${EndPoints.Track}${TrackActions.GetAllTracks}`
    GetAllTracks:`${BaseURL}${TrackActions.GetAllTracks}`,
    GetTrackByTrackId:`${BaseURL}${TrackActions.GetTrackByTrackId}`,
    GetTrackByBranchId:`${BaseURL}${TrackActions.GetTrackByBranchId}`,
    AddTrack:`${BaseURL}${TrackActions.AddTrack}`,
    UpdateTrack:`${BaseURL}${TrackActions.UpdateTrack}`,
    DeleteTrackById:`${BaseURL}${TrackActions.DeleteTrackById}`,
  }
  
  const BranchActions = {
    GetAllBranches: 'api/branch',
    GetBranchById: 'api/branch',
    AddBranch: 'api/branch/Add',
    UpdateBranch: 'api/branch/Edit',
    DeleteBranchById: 'api/branch/Delete',
   
  };
  export const BranchPaths={
    // GetAllBranches:`${BaseURL}${EndPoints.Branch}${BranchActions.GetAllBranches}`
     GetAllBranches:`${BaseURL}${BranchActions.GetAllBranches}`,
     GetBranchById:`${BaseURL}${BranchActions.GetBranchById}`,
     AddBranch:`${BaseURL}${BranchActions.AddBranch}`,
     UpdateBranch:`${BaseURL}${BranchActions.UpdateBranch}`,
     DeleteBranchById:`${BaseURL}${BranchActions.DeleteBranchById}`,
   }
  const TaskActions = {
    GetAllTasks: 'Tasks',
    GetTaskById: 'Task',
    DeleteTaskById: 'Delete',
    UpdateTaskById: 'Update',
    AddTask: 'Add',
   
  };

export const TaskPaths={
  // GetAllTasks:`${BaseURL}${EndPoints.Task}${TaskActions.GetAllTasks}`,
  // GetTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.GetTaskById}`,
  // DeleteTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.DeleteTaskById}`,
  // UpdateTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.UpdateTaskById}`,
  // AddTask: `${BaseURL}${EndPoints.Task}${TaskActions.AddTask}`,
  GetAllTasks:`${BaseURL}${TaskActions.GetAllTasks}`,
  GetTaskById: `${BaseURL}${TaskActions.GetTaskById}`,
  DeleteTaskById: `${BaseURL}${TaskActions.DeleteTaskById}`,
  UpdateTaskById: `${BaseURL}${TaskActions.UpdateTaskById}`,
  AddTask: `${BaseURL}${TaskActions.AddTask}`,
}

const ProjectManagActions = {
  GetCollabByProjId: 'PM',
  DeleteCollabByUserId: 'Delete',
  MakeOwnerByUserId: 'MakeOwner',
  AddCollabByUserEmail: 'Add',
 
};

export const ProjectManagPaths={
GetCollabByProjId:`${BaseURL}${ProjectManagActions.GetCollabByProjId}`,
DeleteCollabByUserId: `${BaseURL}${ProjectManagActions.DeleteCollabByUserId}`,
MakeOwnerByUserId: `${BaseURL}${ProjectManagActions.MakeOwnerByUserId}`,
AddCollabByUserEmail: `${BaseURL}${ProjectManagActions.AddCollabByUserEmail}`,
}

const ProjectActions = {
  GetProjectById: 'api/Project/Project',
  GetProjectByTrackId: 'api/Project/Track',
  GetProjectByStudentId: 'api/Project/Student',
  AddProjectByTrackId: 'api/Project/Add',
  UpdateProject: 'api/Project/Edit',
  DeleteProjectById: 'api/Project/Delete',
 
};
export const ProjectPaths={
  // GetAllBranches:`${BaseURL}${EndPoints.Branch}${BranchActions.GetAllBranches}`
  GetProjectById:`${BaseURL}${ProjectActions.GetProjectById}`,
   GetProjectByTrackId:`${BaseURL}${ProjectActions.GetProjectByTrackId}`,
   GetProjectByStudentId:`${BaseURL}${ProjectActions.GetProjectByStudentId}`,
   AddProjectByTrackId:`${BaseURL}${ProjectActions.AddProjectByTrackId}`,
   UpdateProject:`${BaseURL}${ProjectActions.UpdateProject}`,
   DeleteProjectById:`${BaseURL}${ProjectActions.DeleteProjectById}`,
 }
 
const ProjectMaterialActions = {
  UploadByProjectById: 'api/ProjectMaterial/Upload',
  DownloadById: 'api/ProjectMaterial/Download',
  DeleteByFileName: 'api/ProjectMaterial/Delete',
  
 
};
export const ProjectMaterialPaths={
  // GetAllBranches:`${BaseURL}${EndPoints.Branch}${BranchActions.GetAllBranches}`
  UploadByProjectById:`${BaseURL}${ProjectMaterialActions.UploadByProjectById}`,
  DownloadById:`${BaseURL}${ProjectMaterialActions.DownloadById}`,
  DeleteByFileName:`${BaseURL}${ProjectMaterialActions.DeleteByFileName}`,
 }

 
 const IntakeActions = {
  GetAllIntakes: 'api/Intake',
  GetIntakeByIntakeId: 'api/Intake/Intake',
  GetIntakeByBranchId: 'api/Intake',
  AddIntake: 'api/Intake/Add',
  UpdateIntake: 'api/Intake/Edit',
  DeleteIntakeById: 'api/Intake/Delete',
};

export const IntakePaths={
  //GetAllIntakes:`${BaseURL}${EndPoints.Intake}${IntakeActions.GetAllIntakes}`
  GetAllIntakes:`${BaseURL}${IntakeActions.GetAllIntakes}`,
  GetIntakeByIntakeId:`${BaseURL}${IntakeActions.GetIntakeByIntakeId}`,
  GetIntakeByBranchId:`${BaseURL}${IntakeActions.GetIntakeByBranchId}`,
  AddIntake:`${BaseURL}${IntakeActions.AddIntake}`,
  UpdateIntake:`${BaseURL}${IntakeActions.UpdateIntake}`,
  DeleteIntakeById:`${BaseURL}${IntakeActions.DeleteIntakeById}`,
}