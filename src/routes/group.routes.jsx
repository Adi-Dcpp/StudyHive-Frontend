import { Route } from 'react-router-dom'
import Groups from '../pages/app/Groups'
import GroupDetails from '../pages/app/GroupDetails'

export const groupRoutes = (
  <>
    <Route path="groups" element={<Groups />} />
    <Route path="groups/:groupId" element={<GroupDetails />} />
  </>
)
