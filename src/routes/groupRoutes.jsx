import { Route } from 'react-router-dom'

import GroupsPage from '../pages/groups/GroupsPage'
import GroupDetailPage from '../pages/groups/GroupDetailPage'

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
  </>
)

export default groupRoutes