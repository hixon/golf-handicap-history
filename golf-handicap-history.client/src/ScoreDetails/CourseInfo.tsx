import 'react'
import TeeBox from './TeeBox';
import TeeBoxHeader from './TeeBoxHeader'
import TeeBoxFooterHandicap from './TeeBoxFooterHandicap'
import TeeBoxFooterPar from './TeeBoxFooterPar'
import {Course, Tee} from '../Interfaces/CourseInterface'

function CourseInfo({ details }: { details: Course }) {
  return (
      <table>
          <thead>
              <TeeBoxHeader />
              {details.tees.map((tee: Tee) =>
                  <TeeBox tee={tee} />
              )}
              <TeeBoxFooterHandicap tee={details.tees[0]} />
              <TeeBoxFooterPar tee={details.tees[0] } />
          </thead>
          <tbody>
              {/*TBD*/}
              {/*<ScoreCard info={players } />*/}
          </tbody>
    </table>
  );
}

export default CourseInfo;