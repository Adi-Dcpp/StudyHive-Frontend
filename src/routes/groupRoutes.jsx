import { Route } from 'react-router-dom'

import GroupsPage from '../pages/groups/GroupsPage'
import GroupDetailPage from '../pages/groups/GroupDetailPage'
import ResourcesPage from '../pages/groups/modules/ResourcesPage'
import GoalsPage from '../pages/groups/modules/GoalsPage'
import AssignmentsPage from '../pages/groups/modules/AssignmentsPage'
import MembersPage from '../pages/groups/modules/MembersPage'
import MessagesPage from '../pages/groups/modules/MessagesPage'

export const groupRoutes = (
  <>
    <Route
      path="groups"
      element={<GroupsPage />}
    />

    <Route
      path="groups/:groupId"
      element={<GroupDetailPage />}
    />

    <Route
      path="groups/:groupId/resources"
      element={<ResourcesPage />}
    />

    <Route
      path="groups/:groupId/goals"
      element={<GoalsPage />}
    />

    <Route
      path="groups/:groupId/assignments"
      element={<AssignmentsPage />}
    />

    <Route
      path="groups/:groupId/members"
      element={<MembersPage />}
    />

    <Route
      path="groups/:groupId/messages"
      element={<MessagesPage />}
    />
  </>
)

export default groupRoutes