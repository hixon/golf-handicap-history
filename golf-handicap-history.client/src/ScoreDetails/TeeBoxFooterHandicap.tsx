import { Tee, Hole } from '../Interfaces/CourseInterface'

function TeeBoxFooterHandicap({ tee }: { tee: Tee }) {
  return (
      <tr key={tee.teeId}>
          <td>Handicap</td>
          {tee.holes.map((hole: Hole) =>
              <>
                  <td>{hole.hcp}</td>
              </>
          )}
          <td></td>
          <td></td>
          <td></td>
      </tr>
  );
}

export default TeeBoxFooterHandicap;