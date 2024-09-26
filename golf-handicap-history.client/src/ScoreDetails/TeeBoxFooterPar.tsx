
import { Tee, Hole } from '../Interfaces/CourseInterface'

function TeeBoxFooterPar({ tee }: { tee: Tee }) {
  return (
      <tr key={tee.teeId}>
          <td>Par</td>
          {tee.holes.map((hole: Hole) =>
              <>
                  <td>{hole.par}</td>
              </>
          )}
          <td>{ tee.front9par }</td>
          <td>{ tee.back9par }</td>
          <td>{ tee.totalpar }</td>
      </tr>
  );
}

export default TeeBoxFooterPar;