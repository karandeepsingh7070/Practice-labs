// import {QuestionData} from "../../api/scrapeQuestions"
// import { columns } from "./Table/Column"
import { DataTable } from "./Table/Table"
const Questioneries = () => {
  return (<>
  <div className="h-[100%] w-[100%] lg:w-[50%] md:w-[100%]">
    {/* {QuestionData['questions'].map(() => {
    })}
    return 'hello' */}
    <DataTable  />
  </div>
  </>)
}

export default Questioneries