import { Fragment } from "react"
import WithoutTanStack from "./components/WithoutTanStack"
import WithTanStack from "./components/WithTanStack"
import Deduplication from "./components/Deduplication"
import StaleTime from "./components/StaleTime"
import RefetchInterval from "./components/RefetchInterval"
import FetchMultiQuery from "./components/FetchMultiQuery"
import UseMutation from "./components/UseMutation"
import Pagination from "./components/Pagination"

const App = () => {
  return (
    <Fragment>
      {/* <WithoutTanStack/> */}
      {/* <WithTanStack/> */}
      {/* <Deduplication/> */}
      {/* <StaleTime/> */}
      {/* <RefetchInterval/> */}
      {/* <FetchMultiQuery/> */}
      {/* <UseMutation/> */}
      <Pagination/>
    </Fragment>
  )
}

export default App